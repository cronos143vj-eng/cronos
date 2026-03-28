import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { formatPrice } from '@/lib/utils';
import CTAButton from '@/components/ui/CTAButton';
import Navbar from '@/components/layout/Navbar';
import { trackEventServer } from '@/lib/services/event.service';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    notFound();
  }

  // Tracking view
  await trackEventServer('PRODUCT_VIEW', product.id);

  const features = [
    { title: 'Material', value: 'Acero Inoxidable 316L' },
    { title: 'Movimiento', value: 'Cuarzo Japonés de Precisión' },
    { title: 'Cristal', value: 'Mineral Endurecido Anti-rayaduras' },
    { title: 'Resistencia', value: '3 ATM (Salpicaduras y Lluvia)' },
    { title: 'Diámetro', value: '42mm' },
    { title: 'Correa', value: 'Eslabones Ajustables / Piel Italiana' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Gallery Section */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-32">
            <div className="relative aspect-square w-full bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden group shadow-2xl">
              <Image 
                src={product.images[0] || 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49'} 
                alt={product.name} 
                fill 
                className="object-cover transition duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-[0.2em] shadow-xl">Cronos & Co. Genuine Selection</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
               {/* Pre-fill with other angles or same image if none */}
               {[0, 1, 2, 3].map((i) => (
                 <div key={i} className={`relative aspect-square bg-zinc-950 border transition-all cursor-pointer rounded-sm overflow-hidden ${i === 0 ? 'border-zinc-500 opacity-100' : 'border-zinc-900 opacity-40 hover:opacity-100'}`}>
                    <Image 
                        src={product.images[0]} 
                        alt={product.name} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 15vw"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col space-y-10 md:space-y-12">
            <div className="space-y-4">
              <nav className="flex items-center text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-6 font-black">
                <Link href="/" className="hover:text-white transition">Inicio</Link>
                <span className="mx-3 w-1 h-1 rounded-full bg-zinc-800"></span>
                <span className="text-zinc-400">Especialidades</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-balance">
                {product.name}
              </h1>
              <p className="text-red-500 text-xs uppercase tracking-[0.4em] font-black">Limited Prestige Collection</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <span className="text-5xl font-black text-white tracking-tighter">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-4">
                {product.compareAt && (
                  <span className="text-2xl text-zinc-700 line-through font-light tracking-tighter">{formatPrice(product.compareAt)}</span>
                )}
                <span className="bg-zinc-100 text-black text-[10px] font-black px-3 py-1.5 rounded-none uppercase tracking-widest shadow-lg">
                  AHORRO INMEDIATO
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light text-balance border-l-2 border-zinc-900 pl-8">
              {product.description}
            </p>

            <div className="space-y-8 pt-10 border-t border-zinc-900">
               <div className="flex flex-col gap-4">
                  <Link href={`/checkout?productId=${product.id}`} className="block">
                    <CTAButton size="lg" fullWidth className="text-xl py-8 bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_20px_80px_-20px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
                      ADQUIRIR ESTA PIEZA
                    </CTAButton>
                  </Link>
                  <p className="text-[10px] text-zinc-600 text-center uppercase font-black tracking-widest">Reserva Asegurada • Redirección a WhatsApp VIP</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4 text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em] bg-zinc-950 p-5 border border-zinc-900 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>Envío Asegurado 24h</span>
                  </div>
                  <div className="flex items-center space-x-4 text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em] bg-zinc-950 p-5 border border-zinc-900 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <span>Garantía de Origen</span>
                  </div>
               </div>
            </div>

            {/* Features Table */}
            <div className="pt-12 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600">Especificaciones Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex justify-between border-b border-zinc-900/50 py-4 group hover:bg-zinc-900/20 px-2 transition">
                    <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{feature.title}</span>
                    <span className="text-zinc-200 text-xs font-medium">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof Mini */}
            <div className="mt-12 bg-zinc-950 border border-zinc-900 p-8 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl rounded-full"></div>
                <div className="flex text-yellow-500 mb-4 text-xs">★★★★★</div>
                <p className="text-lg italic text-zinc-300 font-light mb-6 leading-relaxed">"Simplemente espectacular. El peso que tiene denota calidad pura. Lo recomiendo al 100% para quien busca presencia."</p>
                <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.3em]">- Daniel R. <span className="text-green-900 ml-2">✓ PROPIETARIO VERIFICADO</span></p>
            </div>

          </div>
        </div>
      </main>

      {/* Trust Bar */}
      <section className="bg-black py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
                { title: 'PAGOS PROTEGIDOS', desc: 'CIFRADO BANCARIO AES-256' },
                { title: 'ENVÍO ASEGURADO', desc: 'COBERTURA TOTAL RIESGO CERO' },
                { title: 'CALIDAD PREMIUM', desc: 'CRITERIO DE SELECCIÓN MEC-7' },
                { title: 'SOPORTE 24/7', desc: 'LÍNEA DE ATENCIÓN DIRECTA' }
            ].map((item) => (
                <div key={item.title} className="space-y-3 group">
                    <div className="text-white font-black text-xs tracking-[0.3em] group-hover:text-zinc-400 transition">{item.title}</div>
                    <div className="text-zinc-700 text-[9px] uppercase font-bold tracking-widest">{item.desc}</div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
