import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 selection:bg-black selection:text-white">
      <div className="bg-white max-w-lg w-full rounded-2xl p-8 sm:p-12 text-center shadow-xl shadow-zinc-200/50 border border-zinc-100">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">Pago Cancelado</h1>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          No se ha realizado ningún cargo a tu tarjeta. Si tuviste un problema, intenta con otro método de pago o contáctanos para ayudarte.
        </p>

        <Link href="/checkout">
          <CTAButton fullWidth>Intentar de Nuevo</CTAButton>
        </Link>
      </div>
    </div>
  );
}
