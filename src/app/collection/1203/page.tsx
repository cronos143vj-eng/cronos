import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";
import { formatPrice } from "@/lib/utils";

export default function Collection1203() {
  const luxuryProducts = [
    {
      id: 'luxury1',
      brand: 'Rolex',
      name: 'Cosmograph Daytona',
      model: 'Platinum Ice Blue',
      description: 'El carro de Apolo en la muñeca. Platino 950 con esfera azul glaciar y bisel Cerachrom marrón castaño. La cúspide de la velocidad y el prestigio.',
      price: 95400.00,
      image: '/images/1203/daytona.png',
      myth: 'El Carro de Apolo'
    },
    {
      id: 'luxury2',
      brand: 'Patek Philippe',
      name: 'Grand Complications',
      model: 'Ref. 5270P Perpetual Calendar',
      description: 'Una pieza digna de Chronos. Calendario perpetuo, fases lunares y cronógrafo manual en platino. La ingeniería que domina el tiempo mismo.',
      price: 185600.00,
      image: '/images/1203/patek.png',
      myth: 'El Cetro de Cronos'
    },
    {
      id: 'luxury3',
      brand: 'Audemars Piguet',
      name: 'Royal Oak',
      model: 'Flying Tourbillon Openworked',
      description: 'Forjado como el escudo de Ares. El primer reloj en oro arena con movimiento esqueletado. Fuerza bruta envuelta en elegancia matemática.',
      price: 210000.00,
      image: '/images/1203/ap.png',
      myth: 'El Escudo de Ares'
    },
    {
      id: 'luxury4',
      brand: 'Vacheron Constantin',
      name: 'Overseas',
      model: 'Tourbillon Skeleton Grade 5 Titanium',
      description: 'La brújula de Poseidón para el hombre moderno. Titanio grado 5 con movimiento ultra-plano. Resistencia al mar, elegancia al viento.',
      price: 145000.00,
      image: '/images/1203/vc.png',
      myth: 'El Tridente de Poseidón'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#3C3633] selection:bg-[#C5A059] selection:text-white overflow-x-hidden font-serif stone-grain relative">      

      {/* 🏛️ ARCHITECTURAL STYLES 🏛️ */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
      
      :root {
        --greek-gold: #C5A059;
        --bone-white: #F9F6F0;
        --aged-marble: #F2EFE9;
        --shadow-stone: rgba(60, 54, 51, 0.08);
      }

      .font-cinzel { font-family: 'Cinzel', serif; }
      .font-cormorant { font-family: 'Cormorant Garamond', serif; }

      .marble-texture {
        background-color: var(--bone-white);
        background-image: 
          url("https://www.transparenttextures.com/patterns/white-marble.png"),
          url("https://www.transparenttextures.com/patterns/natural-paper.png"),
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent);
        background-blend-mode: multiply, overlay, normal;
      }

      .stone-grain {
        position: relative;
      }
      .stone-grain::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.25;
        pointer-events: none;
        background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
        z-index: 0;
      }

      .greek-key {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M0 0h20v20H0V0zm2 2h16v16H2V2zm2 2h12v12H4V4zm2 2h8v8H6V6zm2 2h4v4H8V8zm22-8h20v20H30V0zm2 2h16v16H32V2zm2 2h12v12H34V4zm2 2h8v8H36V6zm2 2h4v4H38V8zm22-8h20v20H60V0zm2 2h16v16H62V2zm2 2h12v12H64V4zm2 2h8v8H66V6zm2 2h4v4H68V8zm22-8h20v20H90V0zm2 2h16v16H92V2zm2 2h12v12H94V4zm2 2h8v8H96V6zm2 2h4v4H98V8z' fill='%23C5A059' fill-opacity='0.1'/%3E%3C/svg%3E");
        background-repeat: repeat-x;
        height: 20px;
        width: 100%;
      }

      .chiseled-border {
        border: 8px solid transparent;
        border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%23F2EFE9'/%3E%3Cpath d='M0 0l10 10v40l-10 10V0zm60 0L50 10v40l10 10V0zM0 0l10 10h40l10-10H0zm0 60l10-10h40l10 10H0z' fill='%23DED9CF'/%3E%3C/svg%3E") 8 stretch;
        box-shadow: inset 0 0 15px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.08);
      }
      @media (min-width: 768px) {
        .chiseled-border {
          border-width: 20px;
          border-image-slice: 20;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.05), 0 10px 40px rgba(0,0,0,0.1);
        }
      }

      .greek-column {
        background: linear-gradient(to right, 
          #DED9CF 0%, 
          #F9F6F0 10%, 
          #F9F6F0 90%, 
          #DED9CF 100%
        );
        box-shadow: 
          inset 8px 0 20px rgba(0,0,0,0.06), 
          inset -8px 0 20px rgba(0,0,0,0.06);
        position: relative;
        border-left: 1px solid rgba(0,0,0,0.05);
        border-right: 1px solid rgba(0,0,0,0.05);
      }

      .pedestal-3d {
        background: var(--aged-marble);
        border: 1px solid #E5E1D8;
        box-shadow: 
          0 15px 45px rgba(0,0,0,0.1),
          0 30px 90px rgba(0,0,0,0.08),
          inset 0 2px 5px rgba(255,255,255,0.9),
          inset 0 -15px 30px rgba(0,0,0,0.04);
        transform-style: preserve-3d;
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
      }

      .pedestal-3d::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png");
        opacity: 0.2;
        pointer-events: none;
        mix-blend-mode: overlay;
      }

        .pedestal-3d:hover {
          transform: translateY(-15px) scale(1.02);
        }

        .gold-leaf {
          color: var(--greek-gold);
          text-shadow: 0 1px 1px rgba(255,255,255,0.8);
          background: linear-gradient(135deg, #C5A059 0%, #E8D09B 50%, #C5A059 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .luminous-glow {
          box-shadow: 0 0 50px rgba(197, 160, 89, 0.1);
        }

        @keyframes drift-light {
          0% { transform: translateX(-10%); opacity: 0.3; }
          50% { transform: translateX(10%); opacity: 0.5; }
          100% { transform: translateX(-10%); opacity: 0.3; }
        }

        .light-shaft {
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 70%);
          filter: blur(40px);
          animation: drift-light 10s ease-in-out infinite;
        }
      `}</style>

      <Navbar />

      <div className="greek-key relative z-50"></div>

      {/* 🏛️ HERO SECTION: THE TEMPLE OF TIME 🏛️ */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-64 md:pt-56 pb-24 overflow-hidden marble-texture border-b border-[#E5E1D8]">
        {/* Architectural Background */}
        <div className="absolute inset-0 flex justify-between px-2 md:px-20 pointer-events-none opacity-20 md:opacity-40">
          <div className="w-8 md:w-32 h-full greek-column shadow-[10px_0_30px_rgba(0,0,0,0.05)] border-x border-[#DED9CF]/30"></div>
          <div className="w-8 md:w-32 h-full greek-column hidden lg:block opacity-50 border-x border-[#DED9CF]/30"></div>
          <div className="w-8 md:w-32 h-full greek-column hidden lg:block opacity-50 border-x border-[#DED9CF]/30"></div>
          <div className="w-8 md:w-32 h-full greek-column shadow-[-10px_0_30px_rgba(0,0,0,0.05)] border-x border-[#DED9CF]/30"></div>
        </div>

        {/* Ambient Lighting (Mount Olympus) */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#C5A059]/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-[-5%] w-[40vw] h-[100vh] light-shaft pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8 md:space-y-12">
          <div className="mb-4 md:mb-8 flex justify-center">
             <div className="px-6 py-2 border border-[#C5A059]/30 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#C5A059] font-cinzel">Edición Imperial 12/03</span>
             </div>
          </div>

          <h1 className="text-4xl md:text-9xl font-black font-cinzel tracking-tight leading-[0.95] mb-8 text-[#1A1A1A]">
            <span className="block italic font-light text-2xl md:text-6xl mb-4 text-[#C5A059] font-cormorant">La Arquitectura de la</span>
            <span className="relative text-[min(9.5vw,10rem)] leading-none block md:inline tracking-tighter">
              ETERNIDAD
              <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-2xl text-[#666] font-cormorant leading-relaxed italic mb-12 px-4 md:px-0 break-words">
            "Donde la precisión se rinde ante el mito. Presentamos las piezas más exclusivas de Cronos & Co, seleccionadas para quienes no solo miden el tiempo, sino que lo trascienden."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link href="#pantheon" className="w-full md:w-auto">
              <CTAButton size="lg" className="w-full md:w-auto bg-[#1A1A1A] text-white font-cinzel px-12 py-6 text-xs md:text-sm tracking-widest hover:bg-[#C5A059] transition-all duration-700 shadow-2xl">
                ENTRAR AL PANTEÓN
              </CTAButton>
            </Link>
          </div>
        </div>

        {/* Floating Statuette/Artifact (SVG/CSS abstract) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#C5A059]"></div>
          <span className="text-[9px] font-cinzel tracking-[0.3em] text-[#C5A059]">SCROLL</span>
        </div>
      </section>

      {/* 🏛️ GALLERY: THE PANTHEON OF HOROLOGY 🏛️ */}
      <section id="pantheon" className="py-24 md:py-40 relative bg-[#FAFAFA] marble-texture">
        {/* Pediment-like divider */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFFFFF] to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24 relative">
             <h2 className="text-4xl md:text-7xl font-cinzel font-black tracking-tighter text-[#1A1A1A] mb-4">LOS INMORTALES</h2>
             <div className="w-16 md:w-24 h-[1.5px] md:h-[2px] bg-[#C5A059] mx-auto mb-6"></div>
             <p className="text-[#C5A059] font-cinzel text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">Curaduría de Real Prestigio</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            {luxuryProducts.map((product, idx) => (
              <div key={product.id} className="group relative">
                {/* 🏛️ THE PEDESTAL 🏛️ */}
                <div className="pedestal-3d p-6 md:p-12 relative overflow-hidden h-full flex flex-col border-b-[6px] md:border-b-[8px] border-[#C5A059] chiseled-border bg-white/80 backdrop-blur-sm">
                  
                  {/* Chiseled Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/20"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C5A059]/20"></div>
                  
                  {/* Watch Identity */}
                  <div className="relative z-10 mb-6 md:mb-8">
                    <span className="text-[10px] md:text-xs font-cinzel text-[#C5A059] tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-1 md:mb-2">{product.myth}</span>
                    <h3 className="text-[min(8.5vw,3rem)] md:text-5xl font-cinzel font-bold text-[#1A1A1A] leading-tight md:leading-none mb-2 md:mb-4">{product.brand}</h3>
                    <p className="text-lg md:text-2xl font-cormorant italic text-[#666]">{product.model}</p>
                  </div>

                  {/* The Image (Real feel placeholder) */}
                  <div className="relative w-full aspect-square mb-8 md:mb-12 group-hover:scale-105 transition-transform duration-1000">
                    <div className="absolute inset-x-0 bottom-[-5%] h-[10%] bg-black/10 blur-xl scale-x-75"></div>
                    {/* Placeholder for real watch image */}
                    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 bg-white/40 border border-white/50 shadow-inner rounded-full overflow-hidden">
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05),transparent_70%)]"></div>
                       <div className="text-center space-y-4 relative z-10">
                          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-[#C5A059]/10 flex items-center justify-center bg-white shadow-2xl">
                             <span className="text-5xl md:text-7xl text-[#C5A059] drop-shadow-lg">⌚</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Persuasive Copy */}
                  <div className="mt-auto space-y-8 md:space-y-10">
                    <p className="text-[#444] font-cormorant text-lg md:text-xl leading-relaxed italic border-l border-[#C5A059]/20 pl-4">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 border-t border-[#eee] pt-8">
                      <div className="text-center sm:text-left">
                        <span className="text-[10px] font-cinzel text-[#999] tracking-widest block mb-1">VALOR ESTIMADO</span>
                        <div className="text-3xl md:text-4xl font-cinzel font-bold text-[#1A1A1A] tracking-tighter">{formatPrice(product.price)}</div>
                      </div>
                      <Link href={`/checkout?productId=${product.id}`} className="w-full sm:w-auto">
                        <CTAButton className="w-full sm:w-auto bg-transparent border-2 border-[#C5A059] text-[#C5A059] font-cinzel px-10 py-5 hover:bg-[#C5A059] hover:text-white transition-all duration-500 shadow-lg text-xs md:text-sm tracking-widest">
                          RESERVAR PIEZA
                        </CTAButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏛️ PHILOSOPHY: ARCHITECTURE OF TIME 🏛️ */}
      <section className="py-24 md:py-48 bg-[#F9F6F0] relative overflow-hidden marble-texture border-y border-[#E5E1D8]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[1px] bg-[#C5A059]/10 rotate-[-15deg]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[1px] bg-[#C5A059]/10 rotate-[15deg]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <span className="text-7xl md:text-8xl text-[#C5A059]/10 font-cinzel absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 pointer-events-none">Σ</span>
          
          <Logo variant="full" color="#C5A059" className="w-full max-w-[240px] md:max-w-md h-auto opacity-40 mb-12 md:mb-20 mx-auto" />
          
          <h3 className="text-[min(8vw,4rem)] md:text-6xl font-cinzel font-bold text-[#1A1A1A] mb-8 md:mb-12 leading-none tracking-tight uppercase px-2">
            La Geometría <br className="md:hidden" /> de lo Absoluto
          </h3>
          
          <div className="space-y-6 md:space-y-10 font-cormorant text-lg md:text-3xl text-[#555] leading-relaxed italic px-2 md:px-4 break-words">
            <p className="border-b border-[#C5A059]/10 pb-6 md:pb-10 italic">"Un reloj de lujo no es solo un instrumento. Es una columna que sostiene la identidad de quien lo porta."</p>
            <p>"En la Línea 12/03, cada engranaje respeta la proporción áurea. Cada pulido es un reflejo de la luz del Mediterráneo."</p>
          </div>
          
          <div className="mt-16 md:mt-24 flex justify-center gap-10 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-cinzel font-bold text-[#C5A059]">Φ</div>
              <div className="text-[8px] md:text-[10px] font-cinzel tracking-[0.3em] text-[#999] mt-2 uppercase">Simetría</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-cinzel font-bold text-[#C5A059]">Ω</div>
              <div className="text-[8px] md:text-[10px] font-cinzel tracking-[0.3em] text-[#999] mt-2 uppercase">Perfección</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ CTA: CLAIM YOUR LEGACY 🏛️ */}
      <section className="relative z-10 py-32 md:py-48 bg-[#1A1A1A] text-white overflow-hidden flex flex-col items-center border-t border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 md:space-y-20 flex flex-col items-center">
          <Logo variant="full" color="#C5A059" className="w-full max-w-[280px] md:max-w-md h-auto filter brightness-0 invert opacity-20 mb-4 md:mb-12 mx-auto" />
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-8xl font-cinzel font-black tracking-tighter leading-none gold-leaf uppercase">EL TIEMPO <br className="md:hidden" /> ES SUYO</h2>
            <p className="text-lg md:text-3xl font-cormorant italic text-[#AAA] mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Acceso exclusivo a la bóveda 12/03. Piezas con certificación de herencia y procedencia garantizada.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-10 w-full">
            <button className="w-full md:w-auto px-12 md:px-24 py-6 md:py-8 bg-[#C5A059] text-white font-cinzel tracking-[0.4em] text-xs md:text-sm hover:bg-[#E8D09B] hover:scale-105 transition-all duration-700 shadow-[0_20px_50px_rgba(197,160,89,0.3)] border border-[#E8D09B]/20">
              SOLICITAR CONSULTA PRIVADA
            </button>
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-px bg-[#C5A059]/30"></div>
              <p className="text-[#666] font-cinzel text-[8px] md:text-[10px] tracking-[0.4em] uppercase">Cronos & Co • Imperial 12/03</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ FOOTER: MINIMALIST LUXE 🏛️ */}
      <footer className="py-12 bg-white border-t border-[#EEE] flex flex-col md:flex-row justify-center items-center gap-8 px-6 text-center">
        <div className="flex justify-center gap-6 md:gap-12">
          <span className="text-[8px] md:text-[10px] font-cinzel tracking-[0.5em] text-[#999] uppercase">Atenas</span>
          <span className="text-[8px] md:text-[10px] font-cinzel tracking-[0.5em] text-[#999] uppercase">Ginebra</span>
          <span className="text-[8px] md:text-[10px] font-cinzel tracking-[0.5em] text-[#999] uppercase">Monaco</span>
        </div>
      </footer>
    </main>
  );
}
