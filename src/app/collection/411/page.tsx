import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function Collection411() {
  let products: any[] = [];

  try {
    products = await (prisma.product as any).findMany({
      where: { category: '411_retro' }
    });
  } catch (error) {
    // fallback to mockups below
  }

  const displayProducts = [
    {
      id: 'retro1',
      name: 'Heritage Chrono 1971',
      slug: 'heritage-chrono-1971',
      description: 'Cronógrafo mecánico con esfera pátina champagne, bisel taquimétrico y correa de cuero envejecido ocre. Una oda a los años dorados.',
      price: 389.00,
      compareAt: 599.00,
      images: ['/images/411/watch1.png'],
    },
    {
      id: 'retro2',
      name: 'Sovereign Moonphase',
      slug: 'sovereign-moonphase-411',
      description: 'Complicación de fase lunar con esfera azul medianoche texturizada. Elegancia celestial en caja de plata pulida.',
      price: 449.00,
      compareAt: null,
      images: ['/images/411/watch2.png'],
    },
    {
      id: 'retro3',
      name: 'Bronze Explorer 411',
      slug: 'bronze-explorer-411',
      description: 'Caja de bronce con pátina natural, esfera verde bosque y correa de lona técnica. Resistencia con historia.',
      price: 359.00,
      compareAt: 550.00,
      images: ['/images/411/watch3.png'],
    },
    {
      id: 'retro4',
      name: 'Velvet Rose Gold',
      slug: 'velvet-rose-gold-411',
      description: 'Minimalismo puro en oro rosa. Esfera de esmalte marfil y correa de seda negra para las noches más exclusivas.',
      price: 329.00,
      compareAt: 499.00,
      images: ['/images/411/watch4.png'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#140e08] text-[#D4A055] selection:bg-[#E8C97A] selection:text-[#140e08] overflow-x-hidden" style={{ cursor: 'crosshair' }}>
      
      {/* ═══════════ 90s CUSTOM STYLES INJECT ═══════════ */}
      <style>{`
        @keyframes cyber-scroll {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        @keyframes text-blink {
          0%, 49% { opacity: 1; color: #ff00ff; }
          50%, 100% { opacity: 0; }
        }
        .animate-90s-blink {
          animation: text-blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .win95-btn {
          background-color: #c0c0c0 !important;
          color: black !important;
          border-top: 3px solid #ffffff !important;
          border-left: 3px solid #ffffff !important;
          border-right: 3px solid #000000 !important;
          border-bottom: 3px solid #000000 !important;
          font-family: 'Courier New', Courier, monospace !important;
          box-shadow: inset 1px 1px 0px #dfdfdf, inset -1px -1px 0px #808080 !important;
          text-transform: uppercase;
        }
        .win95-btn:active {
          border-top: 3px solid #000000 !important;
          border-left: 3px solid #000000 !important;
          border-right: 3px solid #ffffff !important;
          border-bottom: 3px solid #ffffff !important;
          box-shadow: inset 1px 1px 0px #808080 !important;
          padding-top: 14px;
        }
        .retro-blue-link {
          color: #0000ff !important;
          text-decoration: underline !important;
          font-family: 'Times New Roman', serif;
        }
        .retro-blue-link:visited {
          color: #800080 !important;
        }
      `}</style>

      {/* ═══════════ 90s MARQUEE BANNER ═══════════ */}
      <div className="relative z-50 w-full bg-[#000080] text-[#ffff00] border-b-[3px] border-b-[#808080] border-t-[3px] border-t-[#ffffff] py-1 overflow-hidden flex items-center font-mono text-[11px] md:text-xs tracking-widest">
        <div className="whitespace-nowrap inline-block" style={{ animation: 'cyber-scroll 25s linear infinite' }}>
          *** ¡BIENVENIDO A CRONOS CYBER-VAULT 411! *** OPTIMIZADO PARA NETSCAPE NAVIGATOR 3.0 *** RESOLUCIÓN RECOMENDADA 800x600 *** ENCRIPTACIÓN SSL ACTIVADA *** NUEVAS PIEZAS DE COLECCIÓN AGREGADAS HOY ***
        </div>
      </div>
      
      {/* ═══════════ WARM AMBIENT LIGHTING EFFECTS & RETRO VIBES ═══════════ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Deep walnut base with real texture */}
        <div className="absolute inset-0 bg-[#120a05]"></div>
        <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-cover bg-center bg-fixed shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" style={{
          backgroundImage: 'url(/images/411/wood.png)',
        }}></div>
        
        {/* High-end museum vignetting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.85)_100%)]"></div>
        
        {/* 🚦 VINTAGE COLORED LIGHTS BACKDROP 🚦 */}
        {/* Warm amber main glow */}
        <div className="absolute top-[-20%] left-[0%] w-[80vw] h-[80vw] bg-[#f59e0b]/20 blur-[180px] rounded-full animate-pulse-slow pointer-events-none"></div>
        
        {/* Deep retro Teal accent */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#0f766e]/30 blur-[150px] rounded-full animate-drift-slower pointer-events-none"></div>

        {/* Vintage crimson accent */}
        <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] bg-[#991b1b]/20 blur-[140px] rounded-full pointer-events-none"></div>
        
        {/* Film Grain overlay & Scanlines for retro analog feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'
        }}></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      </div>

      <Navbar />

      {/* ═══════════ HERO SECTION — PHYSICAL RECORD STORE MOOD ═══════════ */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 md:px-8 z-10 pt-48 md:pt-56 pb-24">
        {/* Warm spotlight from above */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#f59e0b]/15 blur-[180px] rounded-full pointer-events-none"></div>
        
        <div className="w-full max-w-5xl mx-auto relative animate-fade-in group">
          
          {/* Main Wooden Plaque Base */}
          <div className="relative border-[12px] md:border-[24px] border-[#2b1709] bg-[#110804] p-8 md:p-16 lg:p-24 shadow-[0_40px_80px_rgba(0,0,0,1),inset_0_0_80px_rgba(0,0,0,1)] flex flex-col items-center justify-center"
               style={{ borderStyle: 'outset', borderImage: 'linear-gradient(to bottom right, #4a2b16, #1c0f05) 1' }}>
            
            {/* Texture and light leak inside plaque */}
            <div className="absolute inset-0 opacity-50 mix-blend-color-burn bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-[#ffebb3] shadow-[0_5px_40px_10px_rgba(251,191,36,0.5)] z-0 rounded-b-full"></div>

            <div className="relative z-10 space-y-8 md:space-y-12 w-full">
              
              {/* Badge (Record Label style) */}
              <div className="inline-flex items-center space-x-3 px-8 py-3 bg-[#000] border-2 border-[#f59e0b]/40 shadow-[inset_0_0_15px_rgba(245,158,11,0.2),0_10px_20px_rgba(0,0,0,0.8)] mx-auto relative overflow-hidden group/logo">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <Logo variant="icon" color="#fcd34d" className="w-6 h-6 flex-shrink-0 relative z-10 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#fcd34d] relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">CRONOS RECORDS • EDICIÓN 411</span>
              </div>

              {/* Main Title (Gold Foil Stamping Effect) */}
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] relative text-center">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#ffebb3] via-[#f59e0b] to-[#78350f] drop-shadow-[0_8px_10px_rgba(0,0,0,0.8)]"
                        style={{ textShadow: '0 2px 4px rgba(255,255,255,0.2), 0 10px 20px rgba(0,0,0,0.9), inset 0 2px 5px rgba(255,255,255,0.5)' }}>
                    VINTAGE
                  </span>
                </h1>
                
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.4em] text-[#fcd34d] uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)] flex items-center justify-center gap-4 mt-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#f59e0b] hidden md:block"></span>
                  PRESTIGE COLLECTION
                  <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#f59e0b] hidden md:block"></span>
                </h2>
              </div>

              {/* Description (Engraved text feeling) */}
              <div className="max-w-2xl mx-auto pt-4 relative">
                <div className="absolute left-0 top-0 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b]/30"></div>
                <div className="absolute right-0 bottom-0 w-8 h-8 border-b-2 border-r-2 border-[#f59e0b]/30"></div>
                <p className="text-[#d4d4d4] text-sm md:text-lg font-medium leading-relaxed px-8 py-4 text-center italic drop-shadow-[0_2px_2px_rgba(0,0,0,1)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Cada pieza de la <strong className="font-black text-[#f59e0b] not-italic">Línea 411</strong> es un homenaje a la relojería artesanal de las décadas doradas. Movimientos clásicos, materiales nobles y el aura de quien sabe que <span className="text-[#a36a38]">los mejores tiempos nunca pasan de moda</span>.
                </p>
              </div>

            </div>
          </div>
          
          {/* Scroll indicator (Hanging metallic chains/bar) */}
          <Link href="#gallery" className="absolute -bottom-24 left-1/2 -translate-x-1/2 hover:scale-110 transition-transform">
            <div className="flex flex-col items-center space-y-0">
              <div className="w-1 h-12 bg-gradient-to-b from-[#4a2b16] to-[#f59e0b] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <div className="bg-[#110804] border-2 border-[#f59e0b] px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#f59e0b] font-black">ABAJO A LA VITRINA</span>
                <span className="text-[#f59e0b] animate-bounce">↓</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════ LIFESTYLE WOODEN SHELF GALLERY (VINYL/CASSETTE PORTADAS) ═══════════ */}
      <section id="gallery" className="py-20 md:py-32 relative z-10 px-0 md:px-8">
        <div className="absolute inset-0 bg-[#0a0604]/80 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Section Title */}
          <div className="text-center mb-16 space-y-4 px-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#f59e0b] to-[#fef08a] drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">La</span>
              <br />
              <span className="text-[#f59e0b] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Colección</span>
            </h2>
          </div>

          {/* ═══ THE MASSIVE WOODEN SHELF GRID ═══ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-[#2c1a0e] p-4 md:p-6 border-[12px] md:border-[20px] border-[#382212] rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,1),inset_0_0_100px_rgba(0,0,0,0.9)] relative"
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
            
            {displayProducts.map((product: any, idx: number) => (
              <div
                key={product.id}
                className="group relative"
              >
                {/* ══ INDIVIDUAL WOODEN CUBBY ══ */}
                <div className="relative bg-[#110804] border-[8px] md:border-[16px] border-[#2b1709] w-full aspect-[4/5] flex items-end justify-center overflow-hidden transition-all duration-700 shadow-[inset_0_0_50px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.5)]"
                     style={{ borderStyle: 'outset', borderImage: 'linear-gradient(to bottom right, #4a2b16, #1c0f05) 1' }}>
                  
                  {/* Top LED Light Strip inside the cubby */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ffebb3] shadow-[0_5px_30px_8px_rgba(251,191,36,0.9),0_15px_60px_rgba(245,158,11,0.6)] z-20"></div>

                  {/* ══ THE ALBUM / CASSETTE COVER ══ */}
                  <Link href={`/product/${product.slug}`} className="relative w-[85%] aspect-square bg-[#0d0704] mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.9)] rounded-sm overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                    
                    {/* The Album Art (Product Image) */}
                    <div className="relative w-full h-[70%] bg-black">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover object-center filter contrast-125 saturate-110 sepia-[.2]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Vintage print halftone effect overlay */}
                      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/retina-wood.png')] pointer-events-none"></div>
                    </div>

                    {/* The Sleeve Info (Cardboard styling) */}
                    <div className="relative w-full h-[30%] bg-[#e5d9c5] p-3 md:p-4 border-t-2 border-[#c2b299] flex flex-col justify-between">
                      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-multiply pointer-events-none"></div>
                      
                      {/* Name / Title */}
                      <div className="flex justify-between items-start gap-2 relative z-10">
                        <h3 className="text-sm md:text-base font-black uppercase tracking-tighter text-[#3e2723] leading-none" style={{ fontFamily: 'Impact, sans-serif' }}>
                          {product.name}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-black text-[#8b0000]">{formatPrice(product.price)}</div>
                        </div>
                      </div>
                      
                      {/* "Record Label" Badge */}
                      <div className="flex justify-between items-end relative z-10">
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[#5d4037]">CRONOS STEREO</span>
                        <span className="px-2 py-0.5 bg-[#3e2723] text-[#e5d9c5] text-[7px] font-black tracking-widest uppercase">EDICIÓN 411</span>
                      </div>
                    </div>

                    {/* ══ SHRINK WRAP PLASTIC REFLECTION ══ */}
                    {/* High gloss diagonal streak */}
                    <div className="absolute inset-0 pointer-events-none z-30 opacity-70">
                      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/30 to-transparent rotate-[35deg] origin-center -translate-x-[20%] translate-y-[20%]"></div>
                      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white/20 to-transparent mix-blend-overlay"></div>
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
                      
                      {/* Plastic creasing / wrinkles */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')]"></div>
                    </div>

                  </Link>

                  {/* Discount Sticker (Like a physical price tag on the wrap) */}
                  {product.compareAt && (
                    <div className="absolute top-[20%] right-[12%] bg-[#ffcc00] text-black text-[9px] font-black px-2 py-2 rounded-full w-12 h-12 flex items-center justify-center text-center leading-none z-40 shadow-[2px_4px_10px_rgba(0,0,0,0.5)] rotate-[15deg] group-hover:rotate-[25deg] transition-transform">
                      -{Math.round(((product.compareAt - product.price) / product.compareAt) * 100)}%<br/>OFF
                    </div>
                  )}

                  {/* Hover action overlay inside cubby (invisible until hover) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 flex flex-col items-center justify-center p-6 gap-4 backdrop-blur-sm shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] border-4 border-[#c0c0c0] hover:border-dotted">
                    
                    {/* 90s style prompt inside overlay */}
                    <div className="w-full max-w-[200px] mb-2 px-2 py-1 bg-[#000080] text-white font-mono text-[9px] border-b-2 border-white flex justify-between">
                      <span>sys://shop.exe</span>
                      <span className="text-[#c0c0c0]">_ □ x</span>
                    </div>

                    <p className="text-center text-[#39ff14] text-xs font-mono px-2 leading-relaxed tracking-tighter bg-black border border-[#39ff14]/40 p-2">
                      &gt; {product.description.substring(0, 60)}...
                    </p>

                    <div className="w-full max-w-[200px] flex flex-col gap-2 mt-2">
                      <Link href={`/checkout?productId=${product.id}`} className="w-full">
                        <CTAButton fullWidth className="py-2 text-[11px] font-black win95-btn">
                          💿 AÑADIR A CESTA
                        </CTAButton>
                      </Link>
                      <Link href={`/product/${product.slug}`} className="w-full text-center bg-white p-[2px] border border-black">
                        <span className="retro-blue-link text-[12px] hover:text-red-500 font-bold block bg-[#c0c0c0] w-full text-center">
                          » Haz clic para detalles «
                        </span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom shelf base — thick wooden edge */}
          <div className="relative h-12 bg-gradient-to-b from-[#382212] to-[#140a04] mt-0 shadow-[0_20px_50px_rgba(0,0,0,1)] rounded-b-xl max-w-[1400px] border-t-2 border-[#000]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b]/40"></div>
            {/* Shelf texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-repeat mix-blend-color-burn"></div>
          </div>
        </div>
      </section>

      {/* ═══════════ LIFESTYLE QUOTE SECTION ═══════════ */}
      <section className="py-32 md:py-48 relative overflow-hidden z-10 border-y border-[#f59e0b]/20"
        style={{
          background: 'radial-gradient(circle at center, #1e1008 0%, #0a0604 100%)'
        }}
      >
        {/* Retro Neon ambient lights */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#0f766e]/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#991b1b]/20 blur-[120px] rounded-full"></div>

        {/* Vintage scanlines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10 bg-[#0a0604]/60 p-12 md:p-24 rounded-3xl border border-[#382215] backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center">
          <Logo variant="full" color="#f59e0b" className="w-full max-w-[280px] md:max-w-md h-auto opacity-80 mix-blend-screen drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] italic flex flex-col items-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#c2410c] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              &ldquo;El verdadero lujo no sigue tendencias. Las trasciende.&rdquo;
            </span>
            {/* 90s animated Under Construction gif imitation */}
            <div className="mt-8 flex items-center justify-center gap-2 bg-[#ffff00] text-black px-4 py-1 border-2 border-dashed border-red-600 font-mono text-sm uppercase tracking-widest animate-pulse">
              <span className="text-red-600">🚧</span> CAUTION: HIGH LUXURY AHEAD <span className="text-red-600">🚧</span>
            </div>
          </h3>
          <div className="inline-block border-t border-b border-[#0f766e] py-3 px-8">
            <p className="text-lg md:text-2xl font-black tracking-[0.4em] uppercase text-[#5eead4] drop-shadow-[0_0_8px_rgba(94,234,212,0.8)]">Cronos & Company • Heritage 411</p>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES — VINTAGE CREDENTIALS ═══════════ */}
      <section className="py-24 md:py-32 px-6 relative z-10 bg-gradient-to-b from-[#0a0604] to-[#120a05]">
        <div className="max-w-7xl mx-auto relative">
          {/* Subtle wood backdrop */}
          <div className="absolute inset-0 opacity-10 blur-[2px] bg-[url('/images/411/wood.png')] bg-cover mix-blend-screen pointer-events-none"></div>

          {/* Section heading */}
          <div className="text-center mb-16 md:mb-20">
            <p className="inline-block px-6 py-2 bg-[#991b1b]/20 border border-[#991b1b] rounded-full text-[11px] font-black uppercase tracking-[0.5em] text-[#fca5a5] mb-6 drop-shadow-[0_0_5px_rgba(252,165,165,0.6)]">Artesanía Atemporal</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e5e5e5] via-[#f59e0b] to-[#e5e5e5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">La Marca de lo Clásico</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {[
              { icon: '⚙️', color: 'from-[#f59e0b]', title: 'MOVIMIENTO\nMECÁNICO', desc: 'Calibres automáticos y cuerda manual con acabados Côtes de Genève.' },
              { icon: '🪵', color: 'from-[#c2410c]', title: 'CUERO\nARTESANAL', desc: 'Correas de becerro y cocodrilo curtidas a mano en talleres europeos.' },
              { icon: '💎', color: 'from-[#0f766e]', title: 'CRISTAL\nABOVEDADO', desc: 'Zafiro mineral curvado que evoca la estética de los años 60-70.' },
              { icon: '🏛️', color: 'from-[#991b1b]', title: 'DISEÑO\nHERITAGE', desc: 'Inspiración directa en piezas icónicas de las décadas doradas.' },
            ].map((item, i) => (
              <div key={item.title} className="relative text-center p-8 md:p-10 group bg-[#160d07] border border-[#2c1a10] hover:border-[#f59e0b]/50 rounded-xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:-translate-y-2">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} to-transparent opacity-50`}></div>
                
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">{item.icon}</div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#fcd34d] whitespace-pre-line leading-relaxed mb-4 pb-4 border-b border-[#382215] drop-shadow-sm">{item.title}</h4>
                <p className="text-[14px] font-medium text-[#d4d4d4] leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WARM CTA SECTION ═══════════ */}
      <section className="py-24 md:py-40 relative z-10 overflow-hidden bg-[#0d0704]">
        {/* Real Retro Lighting Backdrop */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[conic-gradient(at_center,_transparent_0deg,_rgba(245,158,11,0.05)_90deg,_transparent_180deg,_rgba(15,118,110,0.05)_270deg,_transparent_360deg)] animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f59e0b]/10 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12 bg-[#160d07]/90 p-12 md:p-20 border-[8px] border-t-[#c0c0c0] border-l-[#c0c0c0] border-b-[#808080] border-r-[#808080] shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
          
          <div className="w-full bg-[#000080] text-white font-mono text-xs md:text-sm border-b-2 border-white flex justify-between py-1 px-4 mb-8 -mt-8 absolute left-0 right-0 top-0">
            <span>VIP.exe - CRONOS MEMBER DASHBOARD</span>
            <div className="flex gap-1">
              <span className="bg-[#c0c0c0] text-black px-2 border border-black cursor-pointer hidden md:block">_</span>
              <span className="bg-[#c0c0c0] text-black px-2 border border-black cursor-pointer hidden md:block">□</span>
              <span className="bg-[#c0c0c0] text-black px-2 border border-black cursor-pointer font-bold">X</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] pt-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#b45309]">
              EL CLÁSICO<br />NUNCA MUERE
            </span>
          </h2>
          <p className="text-[#e5e5e5] text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Piezas limitadas con numeración grabada. Solo para quienes entienden que la verdadera elegancia es silenciosa, profunda y <strong className="animate-pulse text-[#39ff14] font-mono">eterna.sys</strong>
          </p>
          <div className="flex flex-col items-center space-y-8 pt-6">
            <Link href="#gallery">
              <CTAButton size="lg" className="px-16 py-6 text-xl win95-btn shadow-[5px_5px_0px_#000]">
                🚀 INICIAR ACCESO 411
              </CTAButton>
            </Link>
            <p className="text-[11px] text-[#38bdf8] uppercase font-mono tracking-[0.2em] bg-black px-6 py-2 border-[2px] border-[#38bdf8] shadow-[inset_0_0_10px_rgba(56,189,248,0.5)]">
              &gt; ENVÍO_SEGURO=1 | PAGO_CIFRADO=1
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER - 90s HIT COUNTER & BADGES ═══════════ */}
      <footer className="py-12 bg-black border-t-4 border-[#382215] relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 px-8">
        {/* Hit Counter */}
        <div className="flex flex-col items-center">
          <span className="text-[#39ff14] font-mono text-[9px] mb-1">YOU ARE VISITOR NO.</span>
          <div className="flex bg-[#222] border-2 border-gray-600 p-1">
            {['0','1','4','2','0','6','9'].map((d, i) => (
              <span key={i} className="bg-black text-red-600 font-mono font-black text-xl w-6 text-center border-r border-[#333] last:border-0" style={{ textShadow: '0 0 5px red' }}>
                {d}
              </span>
            ))}
          </div>
        </div>
        
        {/* Made with / Best viewed Badges (CSS Recreations) */}
        <div className="flex flex-wrap gap-2">
          <div className="border border-blue-400 bg-black py-[2px] px-[4px] flex items-center gap-1 shadow-[2px_2px_0_blue]">
            <span className="w-3 h-3 bg-blue-600 rounded-sm inline-block"></span>
            <span className="text-[8px] text-white font-mono leading-none">Netscape<br/>Now!</span>
          </div>
          <div className="border border-yellow-400 bg-gray-800 py-[2px] px-[4px] flex items-center shadow-[2px_2px_0_yellow]">
            <span className="text-[9px] text-yellow-400 font-mono font-bold leading-none">HTML<br/>3.2</span>
          </div>
          <div className="border border-green-500 bg-black py-[2px] px-[4px] flex items-center shadow-[2px_2px_0_green]">
            <span className="text-[9px] text-green-400 font-mono leading-none">800x600<br/>VGA</span>
          </div>
        </div>

        <p className="text-[10px] font-mono text-[#8b5e3c] mix-blend-screen ml-auto mt-4 md:mt-0">© 1998-2024 Cronos Cyber Corp.</p>
      </footer>
    </main>
  );
}
