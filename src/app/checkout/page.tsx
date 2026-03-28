'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import Navbar from '@/components/layout/Navbar';
import { useTracking } from '@/lib/hooks/useTracking';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const { trackEvent } = useTracking();

  useEffect(() => {
    if (!productId) return;
    
    // Track checkout start
    trackEvent('CHECKOUT_START', productId);

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('No se pudo cargar el producto para el checkout.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId, trackEvent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ ...product, quantity: 1 }],
          customerName: `${formData.firstName} ${formData.lastName}`.trim(),
          customerEmail: formData.email,
          customerPhone: formData.phone,
          address: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
        }),
      });

      if (!res.ok) throw new Error('Error al procesar el checkout. Intenta de nuevo.');
      
      const { url } = await res.json();
      
      // Track Success / Redirect
      trackEvent('WHATSAPP_REDIRECT', productId || undefined, { orderNumber: url.split('orden%20es%20la%20*%23')[1]?.split('*')[0] });

      if (url) window.location.href = url;
    } catch (err: any) {
      setError(err.message || 'Ha ocurrido un error inesperado.');
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product && !isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">No se encontró el producto</h1>
        <Link href="/">
          <CTAButton>Volver a la tienda</CTAButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* WhatsApp Context Header */}
            <div className="p-8 bg-black border border-zinc-900 rounded-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden group hover:border-zinc-700 transition">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <div className="w-14 h-14 bg-green-950/30 border border-green-900/50 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className="text-balance text-center sm:text-left">
                <h3 className="text-green-500 font-black uppercase tracking-[0.2em] mb-1">Reserva Prioritaria Vía WhatsApp</h3>
                <p className="text-zinc-500 text-sm font-light">Al completar tus datos, serás redirigido a nuestra línea de atención VIP para coordinar tu envío de forma segura.</p>
              </div>
            </div>

            {error && (
              <div className="p-6 bg-red-950/20 text-red-500 border border-red-900 rounded-sm text-sm font-black uppercase tracking-widest animate-shake">
                {error}
              </div>
            )}

            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-12">
              <section className="space-y-8">
                <div className="flex items-center gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500">01</span>
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 whitespace-nowrap">Información de Contacto</h2>
                    <div className="h-px w-full bg-zinc-900"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Nombre</label>
                    <input
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Ej: Daniel"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Apellido</label>
                    <input
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Ej: Rodríguez"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Email Principal</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="daniel@boutique.com"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">WhatsApp de Cobertura</label>
                    <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+57 321 000 0000"
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                    </div>
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500">02</span>
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 whitespace-nowrap">Logística y Entrega</h2>
                    <div className="h-px w-full bg-zinc-900"></div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Dirección de Destino</label>
                  <input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Calle 123 #45-67, Edificio Cronos"
                    className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Ciudad / Municipio</label>
                    <input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Medellín"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-600 ml-1">Código de Zona / Postal</label>
                    <input
                      required
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="05001"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-white focus:ring-0 transition-all px-5 py-4 rounded-sm text-sm outline-none placeholder:text-zinc-800"
                    />
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-10 rounded-sm relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <h2 className="text-xl font-black uppercase tracking-tighter mb-10 border-b border-zinc-900 pb-6 text-balance leading-none">Tu Selección de <br/> <span className="text-zinc-600">Prestigio</span></h2>
                
                <div className="flex gap-6 pb-10 border-b border-zinc-900/50">
                  <div className="relative w-28 h-28 bg-black border border-zinc-900 rounded-sm overflow-hidden flex-shrink-0">
                    <Image 
                      src={product.images[0]} 
                      alt={product.name} 
                      fill 
                      className="object-cover" 
                      sizes="150px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-black text-base uppercase tracking-tight leading-tight mb-2 text-balance">{product.name}</h3>
                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-4">Cronos&Co. Original</p>
                    <p className="font-black text-xl tracking-tighter">{formatPrice(product.price)}</p>
                  </div>
                </div>

                <div className="py-8 space-y-5 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-600">
                  <div className="flex justify-between items-center group">
                    <span className="group-hover:text-zinc-400 transition">Base de Inversión</span>
                    <span className="text-white text-xs">{formatPrice(product.price)}</span>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="group-hover:text-zinc-400 transition">Canal VIP Logística</span>
                    <span className="text-green-900 bg-green-950/20 px-2 py-1">INCLUIDO</span>
                  </div>
                  <div className="flex justify-between pt-8 border-t border-zinc-900 text-sm text-white font-black items-end">
                    <span className="tracking-tighter uppercase text-xs text-zinc-500">Total a Liquidar</span>
                    <span className="text-4xl tracking-tighter leading-none">{formatPrice(product.price)}</span>
                  </div>
                </div>

                <div className="mt-10 space-y-6">
                    <CTAButton
                    form="checkout-form"
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={isLoading}
                    className={`text-lg py-7 shadow-[0_20px_60px_-10px_rgba(255,255,255,0.1)] ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'} text-black bg-white transition-all font-black`}
                  >
                    {isLoading ? 'ASEGURANDO CONEXIÓN...' : 'PEDIR POR WHATSAPP'}
                  </CTAButton>
                  
                  <div className="flex items-center justify-center gap-4 text-[9px] text-zinc-700 font-bold uppercase tracking-[0.3em]">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> 
                        CIFRADO SSL
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                    <span>PAGO PROTEGIDO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-t-2 border-white rounded-full animate-spin"></div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
