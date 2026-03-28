import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";
import CTAButton from "@/components/ui/CTAButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden relative scroll-smooth">
      {/* 🎬 CINEMATIC OVERLAYS 🎬 */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      
      <Navbar />

      {/* 🔮 THE NEXUS ELEVATED (HERO) 🔮 */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-52 md:pt-64 pb-24">
        {/* Deep Field Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Layered Phantoms */}
          <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-[#F9F6F0]/5 blur-[220px] rounded-full animate-drift-slow opacity-40"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[80vw] h-[80vw] bg-[#0d9488]/5 blur-[200px] rounded-full animate-drift-slower"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-[#78350f]/5 blur-[120px] rounded-full animate-drift-medium opacity-30"></div>
          
          {/* Linear Intersection (Nexus Nod) */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_80px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-2xl mb-12 md:mb-20 group hover:border-[#C5A059]/20 transition-all cursor-default scale-90 md:scale-100 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
             <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059] animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-500 group-hover:text-[#C5A059] transition-colors translate-x-[0.4em]">THE CHRONOS NEXUS</span>
          </div>

          <div className="space-y-4 group w-full flex flex-col justify-center items-center">
            <h1 className="text-[13vw] md:text-[14vw] lg:text-[11rem] font-black uppercase tracking-[-0.02em] leading-[0.7] mix-blend-difference w-full text-center">
              <span className="block text-zinc-800 transition-all duration-1000 group-hover:tracking-[0.05em] group-hover:text-zinc-600">TIME</span>
              
              <div className="flex items-center justify-center space-x-4 md:space-x-12 my-6 md:my-12 w-full max-w-3xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent flex-1"></div>
                <span className="text-zinc-600 text-[10px] md:text-sm tracking-[1.5em] md:tracking-[2.5em] font-light uppercase translate-x-[0.75em] md:translate-x-[1.25em]">IS THE</span>
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent flex-1"></div>
              </div>

              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 animate-pulse-slow">LEGACY</span>
            </h1>
          </div>

          <div className="max-w-2xl mx-auto pt-10 md:pt-16 relative opacity-0 animate-fade-in [animation-delay:1s] fill-mode-forwards text-center">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-px bg-zinc-900"></div>
             <p className="text-base md:text-2xl text-zinc-500 font-light tracking-[0.1em] leading-relaxed italic px-6 md:px-0" style={{ fontFamily: 'var(--font-cormorant)' }}>
               "Navega entre las dimensiones del prestigio. No buscamos que veas la hora, sino que sientas tu propio tiempo."
             </p>
          </div>

          <div className="pt-20 md:pt-32">
            <Link href="#portals">
              <div className="inline-block group cursor-pointer relative">
                 <div className="w-px h-24 md:h-32 bg-gradient-to-b from-white/20 via-white to-transparent mx-auto group-hover:h-48 transition-all duration-1000 ease-in-out relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full blur-[4px] animate-bounce"></div>
                 </div>
                 <span className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.6em] text-zinc-800 mt-10 block group-hover:text-white group-hover:translate-y-2 transition-all duration-700">Explorar Portales</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌌 THE MONOLITHIC PORTALS 🌌 */}
      <div id="portals" className="relative space-y-0">
        
        {/* 🏛️ PORTAL: 12/03 IMPERIAL (Marble/Gold) 🏛️ */}
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-32 overflow-hidden group py-32 md:py-48 pt-56 md:pt-64 border-t border-white/5">
          <div className="absolute inset-0 bg-[#0a0a0a] z-0 overflow-hidden">
             {/* Deep Marble Background */}
             <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')] pointer-events-none group-hover:scale-110 transition-transform duration-[20s] ease-out"></div>
             
             {/* Parallax Pillars */}
             <div className="absolute inset-0 flex justify-around px-20 opacity-10 blur-[1.5px]">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-[8vw] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform group-hover:translate-y-[-5%] transition-transform duration-[8s] ease-out" style={{ transitionDelay: `${i * 0.3}s` }}></div>
                ))}
             </div>

             {/* Imperial Glows */}
             <div className="absolute top-[20%] left-[-10%] w-[70vw] h-[70vw] bg-[#C5A059]/15 blur-[200px] rounded-full animate-drift-slow opacity-60"></div>
             <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-5xl space-y-10 md:space-y-14 transform md:group-hover:translate-x-12 transition-transform duration-1000 ease-out">
             <div className="flex items-center space-x-6">
                <div className="w-12 md:w-20 h-px bg-[#C5A059]"></div>
                <span className="text-[#C5A059] text-[9px] md:text-xs font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Divinidad Analógica</span>
             </div>
             <h2 className="text-6xl sm:text-7xl md:text-[min(12rem,15vw)] font-black uppercase tracking-tighter leading-[0.75] text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
               12<span className="text-[#C5A059] opacity-40">/</span>03 <br />
               <span className="text-[0.45em] tracking-[0.25em] opacity-80 block mt-2">IMPERIAL</span>
             </h2>
             <p className="max-w-xl text-zinc-400 text-base md:text-3xl font-light italic leading-relaxed border-l border-white/10 pl-6 md:pl-10" style={{ fontFamily: 'var(--font-cormorant)' }}>
               "Arquitectura atemporal capturada en piezas que exigen un respeto absoluto. El panteón de la elegancia."
             </p>
             <div className="pt-12 md:pt-20">
               <Link href="/collection/1203">
                 <CTAButton size="lg" className="bg-[#C5A059] text-black px-12 md:px-24 py-5 md:py-8 font-black tracking-widest text-xs md:text-base group hover:bg-white hover:scale-110 transition-all duration-500 shadow-[0_20px_60px_rgba(197,160,89,0.3)]">
                   ASCENDER
                   <span className="ml-4 md:ml-6 inline-block transform group-hover:translate-x-2 transition-transform">🏛️</span>
                 </CTAButton>
               </Link>
             </div>
          </div>
        </section>

        {/* 🌴 PORTAL: 21/06 CYBER (Neo-Grid/Shadows) 🌴 */}
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-32 overflow-hidden group bg-black py-32 md:py-48 pt-56 md:pt-64 border-t border-white/5">
          <div className="absolute inset-0 z-0 overflow-hidden">
             {/* Neo-Grid Bloom */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:80px_80px] group-hover:bg-[size:60px_60px] transition-all duration-1000 ease-out"></div>
             
             {/* Digital Bloom Glows */}
             <div className="absolute center-[-10%] w-[100vw] h-[100vw] bg-[radial-gradient(circle,_rgba(45,212,191,0.05)_0%,_transparent_70%)] animate-pulse-slow"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#0ea5e9]/10 blur-[200px] rounded-full"></div>
             <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#ec4899]/10 blur-[180px] rounded-full animate-drift-slow"></div>
          </div>

          <div className="relative z-20 max-w-5xl space-y-10 md:space-y-14 text-right md:ml-auto md:group-hover:-translate-x-12 transition-transform duration-1000 ease-out">
             <div className="flex items-center justify-end space-x-6">
                <span className="text-[#2dd4bf] text-[9px] md:text-xs font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Bio-Sincronización Inmersiva</span>
                <div className="w-12 md:w-20 h-px bg-[#2dd4bf]"></div>
             </div>
             <h2 className="text-6xl sm:text-7xl md:text-[min(12rem,15vw)] font-black uppercase tracking-tighter leading-[0.75] text-white" style={{ fontFamily: 'Impact, sans-serif' }}>
               21<span className="text-[#2dd4bf] opacity-60">:</span>06 <br />
               <span className="text-[0.45em] tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#2dd4bf] block mt-2">CYBER</span>
             </h2>
             <p className="max-w-xl ml-auto text-cyan-200/50 text-base md:text-3xl font-light tracking-[0.05em] leading-relaxed italic pr-6 md:pr-10 border-r border-[#2dd4bf]/20">
               {">"} LA NATURALEZA NO PIDE PERMISO... <br />
               {">"} SE ADAPTA, EVOLUCIONA Y CONQUISTA EL CÓDIGO.
             </p>
             <div className="pt-12 md:pt-20">
               <Link href="/collection/2106">
                 <CTAButton size="lg" className="bg-transparent border-2 border-[#2dd4bf] text-[#2dd4bf] px-12 md:px-24 py-5 md:py-8 font-black tracking-widest text-xs md:text-base group overflow-hidden relative transition-all duration-500 shadow-[0_0_50px_rgba(45,212,191,0.2)]">
                   <span className="relative z-10 group-hover:text-black transition-colors">SINCRONIZAR</span>
                   <div className="absolute inset-0 bg-[#2dd4bf] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 </CTAButton>
               </Link>
             </div>
          </div>
        </section>

        {/* 📚 PORTAL: 411 HERITAGE (Walnut/Win95) 📚 */}
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-32 overflow-hidden group bg-[#080502] py-32 md:py-48 pt-56 md:pt-64 border-t border-white/5">
          <div className="absolute inset-0 z-0">
             {/* Premium Walnut Grain */}
             <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] group-hover:scale-105 transition-transform duration-[15s] ease-out"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
             <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent opacity-80"></div>
          </div>

          <div className="relative z-10 max-w-5xl space-y-10 md:space-y-14 transform md:group-hover:translate-x-12 transition-transform duration-1000 ease-out">
             <div className="flex items-center space-x-6">
                <div className="w-12 md:w-20 h-px bg-[#f59e0b]"></div>
                <span className="text-[#f59e0b] text-[9px] md:text-xs font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Preservación Absoluta</span>
             </div>
             <h2 className="text-6xl sm:text-7xl md:text-[min(12rem,15vw)] font-black uppercase tracking-tighter leading-[0.75] text-[#fcd34d]">
               411 <br />
               <span className="text-[0.45em] tracking-[0.2em] text-[#78350f] block mt-2">HERITAGE</span>
             </h2>
             <p className="max-w-xl text-zinc-500 text-base md:text-3xl font-light italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
               "Los mejores tiempos nunca pasan de moda. Un refugio de nostalgia lujosa para quienes entienden el valor de lo eterno."
             </p>
             <div className="pt-12 md:pt-20">
               <Link href="/collection/411">
                 <CTAButton size="lg" className="bg-[#1a1a1a] text-[#f59e0b] px-12 md:px-24 py-5 md:py-8 border border-[#f59e0b]/50 hover:bg-[#f59e0b] hover:text-black transition-all duration-500 text-xs md:text-lg font-black tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                   ABRIR ARCHIVO
                 </CTAButton>
               </Link>
             </div>
          </div>
        </section>

        {/* 🌹 PORTAL: 143 LADY (Rose/Silk) 🌹 */}
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-32 overflow-hidden group bg-[#1a0f0f] py-32 md:py-32 pt-56 md:pt-64 border-t border-white/5">
          <div className="absolute inset-0 z-0">
             {/* Silk Movement & Bloom */}
             <div className="absolute top-[-30%] left-[-20%] w-[130vw] h-[130vw] bg-[#7A4040]/20 blur-[250px] rounded-full animate-drift-slow"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-[#EDD5D5]/10 blur-[180px] rounded-full animate-drift-slower"></div>
             
             {/* Radial Nácar Bloom */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_90%)] z-10"></div>
          </div>

          <div className="relative z-20 max-w-5xl space-y-10 md:space-y-14 text-right md:ml-auto md:group-hover:-translate-x-12 transition-transform duration-1000 ease-out">
             <div className="flex items-center justify-end space-x-6">
                <span className="text-[#EDD5D5] text-[9px] md:text-xs font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Elegancia Etérea</span>
                <div className="w-12 md:w-20 h-px bg-[#EDD5D5]"></div>
             </div>
             <h2 className="text-6xl sm:text-7xl md:text-[min(12rem,15vw)] font-black uppercase tracking-tighter leading-[0.75] text-[#EDD5D5]">
               1<span className="opacity-40">::</span>43 <br />
               <span className="text-[0.45em] font-light lowercase italic tracking-[0.25em] opacity-80 block mt-2">eterea</span>
             </h2>
             <p className="max-w-xl ml-auto text-[#EDD5D5]/40 text-base md:text-3xl font-light italic leading-relaxed border-r border-[#EDD5D5]/10 pr-6 md:pr-10" style={{ fontFamily: 'var(--font-cormorant)' }}>
               "I Love You. Tres palabras capturadas en la suavidad de un segundo dedicado a quien define su propia luz."
             </p>
             <div className="pt-12 md:pt-20">
               <Link href="/collection/143">
                 <CTAButton size="lg" className="bg-[#EDD5D5] text-black px-12 md:px-24 py-5 md:py-8 font-black tracking-widest text-xs md:text-base hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_60px_rgba(237,213,213,0.3)]">
                   SENTIR
                 </CTAButton>
               </Link>
             </div>
          </div>
        </section>

      </div>

      {/* 📜 THE PHILOSOPHY OF TIME 📜 */}
      <section className="py-32 md:py-56 bg-black relative flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/5 pt-48 md:pt-64 min-h-[80vh] md:min-h-screen">
        {/* Ambient glow behind the quote */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[95vw] md:max-w-7xl px-4 md:px-6 relative z-10 space-y-12 md:space-y-20 flex flex-col items-center">
           <h3 className="font-black uppercase leading-[0.78] mix-blend-difference w-full" style={{ fontFamily: 'var(--font-cinzel)' }}>
             <span className="block text-[15vw] md:text-[min(18vw,16rem)] tracking-[-0.04em] text-white">"EL TIEMPO</span>
             <span className="block text-[10vw] md:text-[min(10vw,8rem)] tracking-[0.15em] md:tracking-[0.25em] text-zinc-800 my-2 md:my-4">ES LA ÚNICA</span>
             <span className="block text-[13vw] md:text-[min(15vw,14rem)] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">VERDADERA</span>
             <span className="block text-[13vw] md:text-[min(15vw,14rem)] tracking-[-0.03em] text-white">POSESIÓN."</span>
           </h3>
           
           <div className="flex items-center gap-6 md:gap-10 w-full max-w-md mx-auto">
             <div className="h-px bg-gradient-to-r from-transparent to-zinc-800 flex-1"></div>
             <div className="w-2 h-2 bg-zinc-800 rotate-45"></div>
             <div className="h-px bg-gradient-to-l from-transparent to-zinc-800 flex-1"></div>
           </div>
           
           <p className="text-lg md:text-4xl font-light text-zinc-500 italic max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
             En Cronos & Co. no contamos minutos. Preservamos instantes de gloria. 
             Curaduría de alta gama para quien ya no tiene nada que demostrar.
           </p>
        </div>
      </section>

      {/* 🏁 FINAL NEXUS: THE CHOICE 🏁 */}
      <section className="py-32 md:py-64 bg-black relative flex flex-col items-center overflow-hidden border-t border-zinc-900 pt-56 md:pt-72">
       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12 md:space-y-20 flex flex-col items-center">
          <Logo variant="full" className="block w-full max-w-[280px] md:max-w-md h-auto filter brightness-0 invert opacity-20 mb-8 md:mb-12 animate-pulse-slow font-black mx-auto" />
           <div className="space-y-6">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] text-zinc-700">Choose Your Frequency</p>
              <h2 className="text-4xl md:text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.75] tracking-tighter">TU LEGADO <br /> <span className="text-zinc-800">EMPIEZA AQUÍ</span></h2>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-14 pt-12 md:pt-20">
              <Link href="#portals">
                 <CTAButton size="lg" className="px-12 md:px-32 py-6 md:py-10 text-xs md:text-sm uppercase font-black bg-white text-black hover:scale-110 hover:shadow-[0_0_100px_rgba(255,255,255,0.2)] transition-all duration-700 tracking-[0.3em] md:tracking-[0.5em]">
                   RECLAMAR MI LUGAR
                 </CTAButton>
              </Link>
           </div>
        </div>
      </section>

      <footer className="py-20 md:py-32 bg-black text-center border-t border-white/5">
         <div className="flex flex-col items-center gap-10 md:gap-14 opacity-20 hover:opacity-100 transition-opacity px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] cursor-pointer hover:text-white transition-colors">Privacidad</span>
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] cursor-pointer hover:text-white transition-colors">Términos</span>
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] cursor-pointer hover:text-white transition-colors">Concierge</span>
            </div>
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] md:tracking-[1em] text-zinc-700">© 2024 Cronos & Company • Prestigio Sin Concesiones</p>
              <div className="w-12 h-[1px] bg-zinc-900 mx-auto"></div>
            </div>
         </div>
      </footer>
    </main>
  );
}
