import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function Collection143() {
  let products: any[] = [];
  
  try {
     // Intentamos obtener los productos de la categoría desde la DB
     products = await (prisma.product as any).findMany({
        where: { category: '143_lady' }
     });
  } catch (error) {
     // Database field 'category' not yet synced, using beautiful mock fallback
  }

  // Si no hay productos en la DB o el campo no existe, usamos los mockups definidos
  const displayProducts = products.length > 0 ? products : [
    {
      id: 'mock1',
      name: 'Rosé Elite 143',
      slug: 'rose-elite-143',
      description: 'Acero inoxidable cepillado en oro rosa, esfera de nácar genuino. La definición de feminidad y fuerza.',
      price: 249.00,
      compareAt: 399.00,
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800'],
    },
    {
      id: 'mock2',
      name: 'Pure Pearl 143',
      slug: 'pure-pearl-143',
      description: 'Elegancia minimalista con detalles en oro de 18k and correa de cuero italiano en tono blush.',
      price: 189.00,
      compareAt: null,
      images: ['https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800'],
    },
    {
      id: 'mock3',
      name: 'Midnight Vino 143',
      slug: 'midnight-vino-143',
      description: 'Esfera color vino profundo con marcadores de diamante. Un tributo a la noche de gala.',
      price: 299.00,
      compareAt: 450.00,
      images: ['https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'],
    }
  ];

  return (
    <main className="min-h-screen bg-[#EDD5D5] text-[#7A4040] selection:bg-[#7A4040] selection:text-[#EDD5D5] overflow-x-hidden">
      {/* PROTAGONIST FULL PALETTE Hypnotic Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#EDD5D5]">
        {/* Deep Vino Accent */}
        <div className="absolute top-[-20%] left-[-20%] w-[120vw] h-[120vw] bg-[#7A4040]/35 blur-[100px] rounded-full animate-drift-slow opacity-90"></div>
        
        {/* Dusty Rose Swirl */}
        <div className="absolute bottom-[10%] right-[-10%] w-[90vw] h-[90vw] bg-[#CE9E9C]/40 blur-[80px] rounded-full animate-drift-slower"></div>
        
        {/* Soft Taupe Base */}
        <div className="absolute top-[40%] left-[-15%] w-[100vw] h-[100vw] bg-[#AF9181]/30 blur-[90px] rounded-full animate-drift-medium"></div>
        
        {/* Gold Lux Highlight */}
        <div className="absolute top-[10%] right-[5%] w-[60vw] h-[60vw] bg-[#D0A868]/40 blur-[70px] rounded-full animate-drift-slow opacity-60"></div>
        
        {/* Cream Glow */}
        <div className="absolute bottom-[-15%] left-[10%] w-[80vw] h-[80vw] bg-[#ECDCCB]/50 blur-[60px] rounded-full animate-drift-slower opacity-80"></div>

        {/* Dynamic Vino Accent 2 */}
        <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-[#7A4040]/25 blur-[90px] rounded-full animate-drift-medium"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 pt-48 md:pt-56 pb-24 z-10 w-full">
        <div className="space-y-12 animate-fade-in w-full flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-[#7A4040]/20 bg-white/40 backdrop-blur-xl mb-4 group hover:border-[#7A4040]/40 transition-all cursor-default shadow-lg z-10 mt-12 md:mt-20">
             <Logo variant="icon" color="lady" className="w-5 h-5 flex-shrink-0" />
             <span className="text-xs font-black uppercase tracking-[0.5em] text-[#7A4040]">COLECCIÓN 143</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-balance">
            ETEREA<br />
            <span className="italic font-light tracking-normal lowercase text-[0.6em] md:text-[0.4em] translate-y-[-10px] block opacity-80">and delicately yours</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#7A4040]/80 font-light leading-relaxed text-balance px-4 italic">
            "143" no es solo una cifra. Es el código eterno de "I Love You", capturado en piezas de relojería fina para la mujer que define su propio tiempo.
          </p>

          <Link href="#gallery" className="block pt-12 animate-bounce-slow">
            <div className="w-px h-16 bg-gradient-to-b from-[#7A4040] to-transparent mx-auto"></div>
          </Link>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="gallery" className="py-32 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {displayProducts.map((product: any, idx: number) => (
              <div key={product.id} className={`flex flex-col space-y-12 ${idx % 2 !== 0 ? 'lg:translate-y-32' : ''} group`}>
                <Link href={`/product/${product.slug}`} className="relative aspect-[4/5] bg-white border border-[#7A4040]/10 overflow-hidden shadow-2xl hover:shadow-[0_40px_100px_-20px_rgba(122,64,64,0.15)] transition-all duration-700">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EDD5D5]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{product.name}</h2>
                    <span className="text-2xl font-light">{formatPrice(product.price)}</span>
                  </div>
                  <p className="text-[#7A4040]/60 text-lg font-light leading-relaxed max-w-md">{product.description}</p>
                  <Link href={`/product/${product.slug}`} className="inline-block group-2">
                    <CTAButton className="bg-[#7A4040] text-[#EDD5D5] px-12 py-5 rounded-none hover:bg-[#5a2f2f] transition-colors">
                      DESCUBRIR PIEZA
                    </CTAButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-48 bg-[#7A4040] text-[#EDD5D5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDD5D5]/5 blur-[120px] rounded-full"></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10 flex flex-col items-center">
          <Logo variant="full" color="lady" className="w-full max-w-[280px] md:max-w-md h-auto filter brightness-0 invert opacity-40 mx-auto" />
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">"Para la mujer que no espera, sino que crea su destino."</h3>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-60">Cronos & Company • Heritage 143</p>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { title: 'CRISTAL DE ZAFIRO', desc: 'Resistencia absoluta ante cualquier contacto.' },
            { title: 'DISEÑO DELGADO', desc: 'Cajas de hasta 6mm para un confort sin precedentes.' },
            { title: 'ORO DE 18K', desc: 'Detalles con chapado premium garantizado.' }
          ].map(item => (
            <div key={item.title} className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.4em]">{item.title}</h4>
              <p className="text-sm font-light opacity-60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center border-t border-[#7A4040]/10 opacity-30">
        <p className="text-[10px] font-black uppercase tracking-widest">© 2024 Cronos & Company • 143 Lady Collection</p>
      </footer>
    </main>
  );
}
