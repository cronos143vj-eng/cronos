import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { updateOrderStatusByStripeId } from "@/lib/services/order.service";

// Stripe requiere el cuerpo sin parsear (raw body) para verificar las firmas localmente o en un servidor Next.js viejo.
// NOTA: Para el App Router de Next.js > 13, await req.text() logra el objetivo.

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as any;

  // Manejar el evento
  if (event.type === "checkout.session.completed") {
    // Pago completado. Actualizar el estado de la base de datos a PAID
    if (session.payment_status === "paid") {
      try {
        await updateOrderStatusByStripeId(session.id, "PAID");
        // Aquí puedes desencadenar un email de confirmación (vía Resend o NodeMailer)
        console.log(`[WEBHOOK] Orden ${session.metadata?.orderId} marcada como PAGADA.`);
      } catch (error) {
        console.error("[WEBHOOK ERROR] Falló la actualización a PAID de la sesión", session.id);
      }
    }
  }

  if (event.type === "checkout.session.async_payment_failed" || event.type === "checkout.session.expired") {
     // Actualizar estado de DB a CANCELED 
      try {
        await updateOrderStatusByStripeId(session.id, "CANCELLED");
        console.log(`[WEBHOOK] Orden ${session.metadata?.orderId} marcada como CANCELADA.`);
      } catch (error) {
        console.error("[WEBHOOK ERROR] Falló la actualización a CANCELLED de la sesión", session.id);
      }
  }

  return new NextResponse(null, { status: 200 });
}
