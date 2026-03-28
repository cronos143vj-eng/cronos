import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 selection:bg-black selection:text-white">
      <div className="bg-white max-w-lg w-full rounded-2xl p-8 sm:p-12 text-center shadow-xl shadow-zinc-200/50 border border-zinc-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">¡Compra Exitosa!</h1>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          Tu pago ha sido procesado de forma segura y tu pedido ya está en fila para envío. Te enviaremos un correo con la información de rastreo en breve.
        </p>

        <div className="bg-zinc-50 rounded-xl p-6 mb-8 border border-zinc-100 text-sm text-left">
          <p className="flex justify-between border-b border-zinc-200 pb-2 mb-2">
            <span className="text-zinc-500">Beneficio Desbloqueado</span>
            <span className="text-zinc-900 font-medium">Garantía 2 Años</span>
          </p>
          <p className="flex justify-between">
            <span className="text-zinc-500">Estado</span>
            <span className="text-zinc-900 font-medium">Preparando Envío Express</span>
          </p>
        </div>

        <Link href="/">
          <CTAButton fullWidth>Volver a la Tienda</CTAButton>
        </Link>
      </div>
    </div>
  );
}
