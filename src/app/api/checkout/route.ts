import { NextResponse } from 'next/server';
import { createPendingOrder } from '@/lib/services/order.service';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, customerEmail, customerName, customerPhone, address, city, zipCode } = body;

    if (!items || items.length === 0) {
      return new NextResponse("Items are required", { status: 400 });
    }

    // Calculamos el total
    let total = 0;
    const dbItems = items.map((item: any) => {
      total += item.price * (item.quantity || 1);
      return {
        productId: item.id,
        quantity: item.quantity || 1,
        price: item.price,
      };
    });

    // 1. Crear Orden en DB en estado WAITING_CONTACT
    const order = await createPendingOrder({
      customerEmail: customerEmail || 'guest@example.com',
      customerName: customerName || 'Lead WhatsApp',
      customerPhone: customerPhone || '',
      items: dbItems,
      total,
      // Nota: we can expand the order service to include address if needed,
      // but the most important part is the lead capture.
    });

    // 2. Generar el mensaje de WhatsApp
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const productName = items[0].name;
    const orderNumber = order.orderNumber;
    
    const message = `¡Hola Cronos&Co! 👋

Me interesa el reloj: *${productName}*.
Ya llené mis datos de envío en el sitio web. Mi orden es la *#${orderNumber}*.

Mis datos:
👤 Nombre: ${customerName}
📧 Email: ${customerEmail}
📍 Dirección: ${address}, ${city} (${zipCode})

¿Cómo puedo realizar el pago? Quedo atento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    return NextResponse.json({ url: whatsappUrl });
  } catch (error) {
    console.error('[CHECKOUT_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
