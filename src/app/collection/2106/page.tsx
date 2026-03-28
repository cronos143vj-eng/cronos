'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";

const mockProducts = [
  {
    id: 'digital1',
    name: 'Neon Cortex V1',
    slug: 'neon-cortex-v1',
    description: 'Smartwatch neuro-enlazado. Chasis de titanio oscuro con matriz LED interactiva. Sincronización biométrica paramétrica.',
    price: 899.00,
    compareAt: 1200.00,
    images: ['/images/2106/watch1.png'], 
  },
  {
    id: 'digital2',
    name: 'Holo-Sync 21',
    slug: 'holo-sync-21',
    description: 'Proyector holográfico de muñeca con interfase táctil viva. Correa de bio-polímero celular.',
    price: 1150.00,
    compareAt: null,
    images: ['/images/2106/watch2.png'],
  },
  {
    id: 'digital3',
    name: 'Bio-Resonance X',
    slug: 'bio-resonance-x',
    description: 'Reloj inteligente con cristal de zafiro curvo. Integrado con sensores de bio-resonancia para fluir con tu ecosistema.',
    price: 750.00,
    compareAt: 900.00,
    images: ['/images/2106/watch3.png'],
  },
];

export default function Collection2106() {
  const [products] = useState<any[]>(mockProducts);
  const [scrollY, setScrollY] = useState(0);
  
  // Interactive background element tied to scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#021318] text-[#e0f2fe] overflow-x-hidden selection:bg-[#06b6d4] selection:text-black font-sans relative">
      <Navbar />

      {/* ═══════════ FOREGROUND ARCHITECTURE (BALCONY FRAME) ═══════════ */}
      <div className="fixed top-0 left-[-10%] w-[120%] h-[6vh] md:h-[10vh] bg-[#01080a] border-b-4 border-[#0d9488]/80 shadow-[0_20px_50px_rgba(2,19,24,0.95),0_0_30px_rgba(13,148,136,0.2)] z-[60] rounded-b-[100%] pointer-events-none flex items-end justify-center pb-1 md:pb-2 gap-8 md:gap-32">
         {[...Array(8)].map((_, i) => (
             <div key={i} className="w-12 md:w-20 h-2 md:h-3 bg-[#ccfbf1] skew-x-[30deg] shadow-[0_0_15px_#2dd4bf,0_10px_30px_#2dd4bf] opacity-90 rounded-sm"></div>
         ))}
      </div>

      {/* Fake Dark Flora Foreground (Silhouettes) - Moved strictly behind content */}
      <div className="fixed bottom-0 left-[-5%] w-[30vw] max-w-[300px] h-[40vh] pointer-events-none z-[5] flex flex-col items-start justify-end opacity-90 filter drop-shadow-[0_0_20px_black] hidden md:flex">
         {[...Array(5)].map((_, i) => (
           <div key={`l-${i}`} className="w-[150%] h-8 bg-[#01080a] rounded-[100%] transform origin-bottom-left border-t border-[#0f766e]/20" style={{ rotate: `${-30 + (i * 20)}deg`, marginBottom: '-1rem' }}></div>
         ))}
      </div>
      <div className="fixed bottom-[5%] right-[-5%] w-[35vw] max-w-[350px] h-[45vh] pointer-events-none z-[5] flex flex-col items-end justify-end opacity-90 filter drop-shadow-[0_0_20px_black] hidden md:flex">
         {[...Array(6)].map((_, i) => (
           <div key={`r-${i}`} className="w-[150%] h-10 bg-[#010508] rounded-[100%] transform origin-bottom-right border-t border-[#0369a1]/20" style={{ rotate: `${40 - (i * 18)}deg`, marginBottom: '-1rem' }}></div>
         ))}
      </div>

      {/* ═══════════ GLOBAL CSS INJECTIONS ═══════════ */}
      <style>{`
        ::-webkit-scrollbar { width: 8px; background: #010a0c; }
        ::-webkit-scrollbar-thumb { background: #0d9488; border-radius: 4px; box-shadow: 0 0 10px #2dd4bf; }
        
        .retro-grid {
          background-image: 
            linear-gradient(to right, rgba(20, 184, 166, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .neon-heading {
          color: #ccfbf1;
          text-shadow: 0 0 10px rgba(45,212,191,0.5), 0 0 20px rgba(13,148,136,0.8), 0 0 40px rgba(15,118,110,1);
        }

        /* Ambient floating fireflies / cyber-spores */
        @keyframes firefly-float {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.6; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.5); opacity: 0; }
        }

        .spore {
          position: absolute;
          border-radius: 50%;
          background: #2dd4bf;
          box-shadow: 0 0 10px #5eead4, 0 0 20px #14b8a6;
          opacity: 0;
          animation: firefly-float var(--dur) ease-in infinite;
          animation-delay: var(--del);
        }

        @keyframes sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1.5deg); }
        }

        .scanline-overlay {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(20,184,166,0.05) 50%, rgba(20,184,166,0.05));
          background-size: 100% 4px;
          pointer-events: none;
        }

        @keyframes scan-horizontal {
          0% {  background-position: 0 0; }
          100% { background-position: 0 4px; }
        }

        /* ════ NUEVAS ANIMACIONES SAZÓN ════ */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #2dd4bf; }
        }
        .typewriter {
          overflow: hidden;
          border-right: .15em solid #2dd4bf;
          white-space: nowrap;
          letter-spacing: .15em;
          animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
          animation-fill-mode: forwards;
        }
        @keyframes marquee-alert {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>


      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        <div className="absolute inset-0 retro-grid opacity-50" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute inset-0 scanline-overlay" style={{ animation: 'scan-horizontal 0.5s linear infinite' }}></div>

        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#0369a1]/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#0d9488]/15 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-[#059669]/20 blur-[100px] rounded-full"></div>
        
        <div className="absolute top-[60%] left-0 w-full h-[40%] bg-gradient-to-t from-[#022c22]/80 to-transparent"></div>
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent shadow-[0_0_20px_#14b8a6]"></div>

        {/* ════ Miami Retro Sun & Glow ════ */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[800px] h-[60vw] max-h-[800px] rounded-full bg-gradient-to-t from-[#f97316] via-[#ec4899] to-transparent opacity-30 z-0 blur-[50px] shadow-[0_0_100px_#db2777]" style={{ transform: `translateY(${scrollY * 0.08}px)` }}></div>
        {/* The sun core */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[40vw] max-w-[600px] h-[40vw] max-h-[600px] rounded-full bg-gradient-to-b from-[#fdf2f8]/80 to-[#ec4899]/0 opacity-50 z-0 flex flex-col justify-end gap-2 pb-10" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-full bg-[#021318]" style={{ height: `${i * 4 + 2}px` }}></div>
           ))}
        </div>

        {/* ════ Distant City Skyline ════ */}
        <div className="absolute bottom-[20%] left-0 w-full h-[40%] opacity-40 z-0 flex items-end justify-around px-10 gap-4" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
           <div className="w-[15%] h-[90%] bg-[#010e13] border-t-2 border-r-2 border-[#0ea5e9]/40 relative overflow-hidden hidden md:block">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#38bdf8_1px,_transparent_1px)] bg-[size:10px_20px] opacity-40"></div>
           </div>
           <div className="w-[20%] md:w-[10%] h-[110%] bg-[#010a0c] border-t-2 border-l-2 border-[#2dd4bf]/40 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#5eead4_1px,_transparent_1px)] bg-[size:8px_15px] opacity-30"></div>
             <div className="absolute left-1/2 top-0 w-1 h-full bg-[#2dd4bf]/50 shadow-[0_0_10px_#2dd4bf]"></div>
           </div>
           <div className="w-[30%] md:w-[20%] h-[70%] bg-[#021822] border-t-2 border-x-2 border-[#10b981]/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#6ee7b7_1.5px,_transparent_1.5px)] bg-[size:15px_15px] opacity-20"></div>
             <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
           </div>
           <div className="w-[12%] h-[100%] bg-[#010e13] border-t-2 border-r-2 border-[#0ea5e9]/40 relative overflow-hidden hidden md:block">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#38bdf8_1px,_transparent_1px)] bg-[size:12px_24px] opacity-50"></div>
           </div>
        </div>

        {/* ════ Floating Cyber-Stadium (UFO Structure) ════ */}
        <div className="absolute top-[10%] md:top-[12%] right-[-15%] md:right-[-5%] w-[80vw] md:w-[45vw] max-w-[600px] h-[150px] md:h-[250px] bg-[#021318]/90 backdrop-blur-sm rounded-[100%] border-4 border-[#0ea5e9]/40 shadow-[0_50px_100px_rgba(2,19,24,0.9)] z-0 transform rotate-[-3deg] overflow-hidden flex flex-col justify-center items-center" style={{ transform: `translateY(${scrollY * 0.05}px) rotate(-3deg)` }}>
            <div className="absolute top-4 md:top-8 w-[80%] h-1 md:h-2 bg-[#2dd4bf] shadow-[0_0_20px_#2dd4bf,0_0_40px_#2dd4bf] opacity-80"></div>
            
            <div className="w-[110%] h-[20px] md:h-[30px] bg-[#0d9488]/30 border-y-2 border-[#5eead4] shadow-[0_0_30px_#2dd4bf] my-1 md:my-2 relative overflow-hidden">
               <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(45,212,191,0.8)_20px,rgba(45,212,191,0.8)_30px)] animate-[marquee-alert_20s_linear_infinite]"></div>
            </div>
            
            <div className="w-[105%] h-[40px] md:h-[60px] bg-[#450a0a]/60 border-y-4 border-red-500 shadow-[inset_0_0_20px_red,0_0_40px_red] my-1 md:my-2 flex items-center justify-center overflow-hidden">
               <div className="text-red-500 font-black text-2xl md:text-5xl tracking-[0.4em] md:tracking-[0.6em] blur-[0.5px] font-mono animate-pulse whitespace-nowrap">
                  BIO-SYNC // SYSTEM // ONLINE
               </div>
            </div>
            
            {/* GRAFFITI TAG on the hull */}
            <div className="absolute top-[40%] right-[10%] transform rotate-[15deg] md:rotate-[-15deg] font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-[#ec4899] to-[#f472b6] drop-shadow-[0_0_15px_#db2777] z-20 pointer-events-none" style={{ fontFamily: '"Permanent Marker", "Brush Script MT", cursive', textShadow: '2px 2px 0px #831843' }}>
               NO FUTURE
            </div>
            
            <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#0ea5e9]/30 blur-[20px] md:blur-[30px] rounded-full"></div>
            
            <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-[70%] h-2 md:h-4 flex justify-between">
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-3 md:w-6 h-full bg-[#f0fdfa] rounded-sm shadow-[0_0_8px_white]"></div>
                ))}
            </div>
        </div>

        {[...Array(15)].map((_, i) => {
          // Deterministic pseudo-random values to prevent hydration mismatch
          const r1 = (i * 13.579) % 1;
          const r2 = (i * 21.123) % 1;
          const r3 = (i * 37.891) % 1;
          const r4 = (i * 45.678) % 1;
          const r5 = (i * 89.123) % 1;
          const r6 = (i * 12.345) % 1;
          return (
            <div key={i} className="spore" style={{
              '--tx': `${r1 * 200 - 100}px`,
              '--ty': `${r2 * -300 - 100}px`,
              '--dur': `${r3 * 5 + 5}s`,
              '--del': `${r4 * 5}s`,
              width: `${r5 * 4 + 2}px`,
              height: `${r6 * 4 + 2}px`,
              left: `${r1 * 100}%`,
              bottom: `${r2 * 20}%`,
              backgroundColor: (i % 3 === 0) ? '#ec4899' : '#2dd4bf',
              boxShadow: (i % 3 === 0) ? '0 0 10px #db2777, 0 0 20px #ec4899' : '0 0 10px #5eead4, 0 0 20px #14b8a6'
            } as React.CSSProperties}></div>
          );
        })}

        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] max-w-[500px] h-[60vh] opacity-80 z-0 origin-bottom mix-blend-screen" style={{ animation: 'sway 7s ease-in-out infinite' }}>
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.6)_0%,_transparent_70%)] blur-[2px]"></div>
          <div className="absolute bottom-[10%] left-[20%] w-64 h-3 bg-gradient-to-r from-[#0f766e] to-transparent transform -rotate-45 blur-[1px]"></div>
          <div className="absolute bottom-[20%] left-[15%] w-56 h-3 bg-gradient-to-r from-[#0369a1] to-transparent transform -rotate-30 blur-[1px]"></div>
          <div className="absolute bottom-[30%] left-[10%] w-72 h-4 bg-gradient-to-r from-[#059669] to-transparent transform -rotate-60 blur-[1px]"></div>
          <div className="absolute bottom-[5%] left-[5%] w-[100px] h-full border-r-4 border-[#0d9488]/40 blur-[4px]"></div>
        </div>

        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] max-w-[600px] h-[70vh] opacity-80 z-0 origin-bottom mix-blend-screen" style={{ animation: 'sway 9s ease-in-out infinite reverse' }}>
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(3,105,161,0.5)_0%,_transparent_70%)] blur-[4px]"></div>
          <div className="absolute bottom-[10%] right-[20%] w-80 h-3 bg-gradient-to-l from-[#0ea5e9] to-transparent transform rotate-45 blur-[1px]"></div>
          <div className="absolute bottom-[25%] right-[15%] w-64 h-3 bg-gradient-to-l from-[#14b8a6] to-transparent transform rotate-30 blur-[1px]"></div>
          <div className="absolute bottom-[35%] right-[10%] w-96 h-4 bg-gradient-to-l from-[#10b981] to-transparent transform rotate-[55deg] blur-[1px]"></div>
          <div className="absolute bottom-[0%] right-[10%] w-[100px] h-full border-l-4 border-[#0284c7]/40 blur-[4px]"></div>
        </div>
      </div>


      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="relative z-10 w-full min-h-screen pt-48 md:pt-56 pb-24 flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto px-6 relative">
          
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#2dd4bf]/40 bg-[#0d9488]/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5eead4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2dd4bf]"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ccfbf1]">Simbiosis Activa</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] neon-heading relative" style={{ fontFamily: 'Impact, sans-serif' }}>
            ORGANIC <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#2dd4bf]" style={{ textShadow: 'none' }}>CIRCUITRY</span>
            
            {/* Graffiti Tag overlaid on title */}
            <span className="absolute top-[-20px] md:top-[-40px] right-0 md:right-[5%] text-4xl md:text-6xl text-[#10b981] drop-shadow-[0_0_15px_#059669] transform rotate-12 select-none pointer-events-none" style={{ fontFamily: '"Permanent Marker", "Brush Script MT", cursive', textShadow: '3px 3px 0px #064e3b' }}>
               Vice City
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-[#bae6fd] text-base md:text-xl font-light tracking-wide pt-4 drop-shadow-md border-t border-[#0d9488]/30 mt-8 pt-8 mb-16">
            Diseño retro-futurista alimentado por silicio y savia. <br/> La Línea 21/06 te conecta con el pulso vivo de la red.
          </p>
        </div>

        {/* Terminal Boot Sequence Manifesto */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-40 relative z-20">
           <div className="bg-[#010a0c]/80 border border-[#0d9488]/30 backdrop-blur-3xl p-6 md:p-8 font-mono text-[#5eead4] text-xs md:text-sm shadow-[0_30px_60px_rgba(2,19,24,0.9)] rounded-br-[2rem] rounded-tl-[2rem]">
              <div className="flex gap-2 border-b border-[#0d9488]/30 pb-3 mb-6 relative">
                 <div className="w-3 h-3 bg-red-500/80 shadow-[0_0_10px_red]"></div>
                 <div className="w-3 h-3 bg-yellow-500/80 shadow-[0_0_10px_yellow]"></div>
                 <div className="w-3 h-3 bg-[#10b981]/80 shadow-[0_0_10px_#10b981]"></div>
                 <span className="ml-4 opacity-70 tracking-widest text-[10px] md:text-xs text-[#2dd4bf]">CRONOS_OS_v21.06 // BIO-PROTOCOL LINK</span>
                 
                 {/* Decorative scanning line in terminal header */}
                 <div className="absolute bottom-[-1px] left-0 w-1/4 h-[1px] bg-[#2dd4bf] animate-[trace_2s_ease-in-out_infinite_alternate]"></div>
              </div>
              <div className="space-y-3 opacity-90 text-[10px] md:text-xs">
                 <p className="flex items-center gap-2"><span className="text-[#0ea5e9]">{"[SYS]"}</span> INITIALIZING BIO-METRIC PROTOCOLS...</p>
                 <p className="flex items-center gap-2"><span className="text-[#0ea5e9]">{"[NET]"}</span> CONNECTING TO NEURAL NETWORK [ <span className="text-green-400">OK</span> ]</p>
                 <p className="flex items-center gap-2"><span className="text-[#0ea5e9]">{"[BIO]"}</span> SYNCHRONIZING WITH HOST BIORHYTHM...</p>
                 <div className="inline-block mt-4 mb-2">
                    <p className="typewriter text-[#38bdf8] font-bold text-sm md:text-base border-r border-[#2dd4bf]">
                       {">"} ALERTA: LA LÍNEA DE ENSAMBLAJE ESTÁ VIVA.
                    </p>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-[#0d9488]/20 flex flex-col md:flex-row gap-8 bg-[#021822]/40 p-6 rounded-br-[1rem] rounded-tl-[1rem]">
                    <div className="w-full md:w-3/5">
                       <h3 className="text-[#f0fdfa] font-black text-lg md:text-xl mb-3 tracking-widest border-l-2 border-[#2dd4bf] pl-3">MANIFIESTO VÍRICO</h3>
                       <p className="text-[#94a3b8] leading-relaxed font-sans font-light">
                          Nos negamos a crear simple metal inerte. Los dispositivos de la Línea 21/06 son injertos simbióticos. Escuchan tus pulsaciones, leen tu temperatura central y se alimentan del movimiento. No adquieres un reloj; te adhieres a un <strong className="text-[#2dd4bf] font-medium">ecosistema de circuito cerrado</strong>.
                       </p>
                    </div>
                    <div className="w-full md:w-2/5 font-mono text-[10px] text-[#0ea5e9] flex flex-col justify-end gap-2 border-l border-[#0ea5e9]/20 pl-6">
                       <div className="flex justify-between border-b border-[#0ea5e9]/20 pb-1"><span>CORE_TEMP:</span><span className="text-[#bae6fd]">36.8°C</span></div>
                       <div className="flex justify-between border-b border-[#0ea5e9]/20 pb-1"><span>SYS_HUMIDITY:</span><span className="text-[#bae6fd]">42%</span></div>
                       <div className="flex justify-between"><span>PULSE_RATE:</span><span className="animate-pulse text-[#2dd4bf] font-bold drop-shadow-[0_0_5px_#2dd4bf]">72 BPM</span></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Cinematic Retro-Futuristic Exhibition */}
        <div className="w-full max-w-[100vw] mx-auto px-0 md:px-6 flex flex-col gap-40 pb-40">
            {products.map((product: any, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
              <div key={product.id} className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center group overflow-hidden md:overflow-visible">
                
                {/* Massive Background Typography (Watermark) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none overflow-hidden">
                   <h2 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none text-[#0d9488]/5 group-hover:text-[#0ea5e9]/10 group-hover:tracking-[0.05em] transition-all duration-1000 whitespace-nowrap mix-blend-plus-lighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                      {product.name}
                   </h2>
                </div>
                
                {/* Technical Grid / HUD background styling for the section */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                   {/* Scanning crosshairs connecting the watch to the data */}
                   <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2dd4bf]/30 to-transparent"></div>
                   <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#2dd4bf]/30 to-transparent"></div>
                   <div className="absolute top-[20%] right-[10%] w-10 h-10 border-t-2 border-r-2 border-[#5eead4]/50 animate-pulse"></div>
                   <div className="absolute bottom-[20%] left-[10%] w-10 h-10 border-b-2 border-l-2 border-[#5eead4]/50 animate-pulse"></div>
                </div>

                <div className={`relative z-10 w-full max-w-7xl mx-auto flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 px-6`}>
                   
                    {/* Image Container: Explosive Pop, Huge Shadows */}
                    <div className="relative w-full md:w-1/2 flex justify-center items-center h-[300px] sm:h-[400px] md:h-[600px] group/img">
                      
                      {/* Cybernetic Pedestal / Frame */}
                      <div className="absolute inset-4 md:inset-12 border-2 border-transparent group-hover/img:border-[#0d9488]/30 rounded-full md:rounded-none md:skew-x-[-10deg] transition-all duration-700 pointer-events-none overflow-hidden">
                         <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#0ea5e9]/20 to-transparent group-hover/img:animate-[sweep_2s_ease-out_infinite]"></div>
                      </div>

                      {/* Concentric rings behind watch */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[4px] border-dashed border-[#14b8a6]/20 rounded-full animate-[spin_30s_linear_infinite] group-hover/img:border-[#2dd4bf]/50 group-hover/img:scale-[1.2] transition-all duration-1000"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[2px] border-[#0ea5e9]/10 rounded-full animate-[spin_40s_linear_infinite_reverse] group-hover/img:border-[#38bdf8]/30 transition-all duration-1000"></div>

                      <div className="absolute w-[100%] h-[100%] filter saturate-[1.2] drop-shadow-[0_20px_50px_rgba(2,19,24,0.9)] group-hover/img:drop-shadow-[0_0_80px_rgba(45,212,191,0.8)] group-hover/img:scale-[1.25] group-hover/img:-translate-y-10 transition-transform duration-[800ms] cubic-bezier(0.175,0.885,0.32,1.275) z-20 mix-blend-screen pointer-events-none">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      <div className="absolute bottom-10 left-0 text-[#2dd4bf] font-mono text-[10px] uppercase tracking-widest hidden md:flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                         <span>COORD: {(idx * 42) % 90}.{(idx * 17) % 90} N</span>
                         <span>OP_STATUS: ONLINE</span>
                      </div>
                   </div>

                   {/* Data Console HUD (Text & Buy Button) */}
                   <div className="relative w-full md:w-1/2 z-20 flex flex-col justify-center">
                      
                      <div className="relative bg-[#010a0c]/80 backdrop-blur-3xl border border-[#0d9488]/40 p-10 md:p-14 overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] group/console shadow-[0_20px_50px_rgba(2,19,24,0.8)] xl:w-[110%] xl:-ml-10">
                         
                         {/* Console decorative top bar */}
                         <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#2dd4bf]"></div>
                         <div className="absolute top-4 right-8 flex gap-2">
                            <div className="w-1.5 h-6 bg-[#0ea5e9]/50 animate-pulse"></div>
                            <div className="w-1.5 h-6 bg-[#2dd4bf]/80"></div>
                            <div className="w-1.5 h-6 bg-[#10b981]/40 animate-pulse" style={{ animationDelay: '0.5s'}}></div>
                         </div>
                         
                         <div className="inline-block mt-4 mb-6 px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/30 text-[#6ee7b7] text-[10px] font-black uppercase tracking-[0.3em] font-mono">
                           ASSET_ID // {product.id.toUpperCase()}
                         </div>

                         <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-[#f0fdfa] via-[#ccfbf1] to-[#2dd4bf] drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] mb-4 filter contrast-125" style={{ fontFamily: 'Impact, sans-serif' }}>
                            {product.name}
                         </h3>

                         <div className="text-4xl font-black text-[#38bdf8] mb-8 tracking-tighter drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                            {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                         </div>

                         <div className="relative border-l-2 border-[#0ea5e9]/50 pl-6 mb-12">
                            <p className="text-[#94a3b8] text-sm md:text-base font-light leading-relaxed group-hover/console:text-[#bae6fd] transition-colors">
                              {product.description}
                            </p>
                            {/* Blinking cursor effect at end of text */}
                            <span className="inline-block w-2 h-4 bg-[#2dd4bf] ml-2 animate-ping opacity-50"></span>
                         </div>

                         {/* Barcode and terminal action block */}
                         <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-[#0d9488]/20">
                            
                            <Link href={`/checkout?productId=${product.id}`} className="w-full md:w-auto relative group/btn">
                              {/* Extreme sci-fi button */}
                              <button className="w-full md:w-auto px-10 py-5 bg-[#2dd4bf] text-[#022c22] font-black uppercase tracking-[0.3em] text-sm md:text-xs hover:bg-[#5eead4] hover:shadow-[0_0_30px_#2dd4bf] transition-all transform hover:scale-[1.05] flex items-center justify-center gap-4 slanted-button">
                                <span>INICIAR TRANSMISIÓN</span>
                                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                              </button>
                            </Link>

                            {/* Retro Future Barcode (CSS generated) */}
                            <div className="hidden lg:flex gap-[2px] h-10 opacity-70 group-hover/console:opacity-100 transition-opacity">
                               {[2,4,1,3,5,2,1,4,3,2,5,1,3,4,2,1,5,2,3,4].map((width, i) => (
                                 <div key={i} className="bg-[#5eead4]" style={{ width: `${width}px` }}></div>
                               ))}
                            </div>

                         </div>
                      </div>
                   </div>

                </div>
              </div>
            )})}
        </div>
      </div>
      
      {/* Infinite Warning Marquee Spacer */}
      <div className="relative z-10 w-full bg-[#022c22] border-y-2 border-[#10b981]/50 overflow-hidden py-4 flex mt-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
         <div className="flex w-[200%] whitespace-nowrap animate-[marquee-alert_30s_linear_infinite] font-mono text-xs md:text-sm font-bold tracking-[0.4em] text-[#6ee7b7]">
            <span className="mx-8"> <span className="text-red-500 animate-pulse">■</span> CRITICAL ALERT: UNAUTHORIZED BIO-SYNC DETECTED </span>
            <span className="mx-8"> <span className="text-[#38bdf8]">▲</span> CONNECTING TO TERRA_SYS_01_OVERRIDE </span>
            <span className="mx-8"> <span className="text-[#10b981]">●</span> ESTADO DEL ECOSISTEMA: ÓPTIMO </span>
            <span className="mx-8"> <span className="text-red-500 animate-pulse">■</span> CRITICAL ALERT: UNAUTHORIZED BIO-SYNC DETECTED </span>
            <span className="mx-8"> <span className="text-[#38bdf8]">▲</span> CONNECTING TO TERRA_SYS_01_OVERRIDE </span>
            <span className="mx-8"> <span className="text-[#10b981]">●</span> ESTADO DEL ECOSISTEMA: ÓPTIMO </span>
            <span className="mx-8"> <span className="text-red-500 animate-pulse">■</span> CRITICAL ALERT: UNAUTHORIZED BIO-SYNC DETECTED </span>
            <span className="mx-8"> <span className="text-[#38bdf8]">▲</span> CONNECTING TO TERRA_SYS_01_OVERRIDE </span>
            <span className="mx-8"> <span className="text-[#10b981]">●</span> ESTADO DEL ECOSISTEMA: ÓPTIMO </span>
         </div>
         {/* Marquee Glitch overlay */}
         <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(20,184,166,0.05)_10px,rgba(20,184,166,0.05)_20px)] pointer-events-none"></div>
      </div>

      {/* ═══════════ TECHNICAL ARCHITECTURE & LORE SECTION ═══════════ */}
      <section className="relative z-10 py-32 bg-[#010e13]/90 border-t border-[#0d9488]/30 mt-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent shadow-[0_0_15px_#2dd4bf]"></div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Architectural Blueprint Visualizer */}
            <div className="order-2 md:order-1 relative aspect-square w-full max-w-[500px] mx-auto flex items-center justify-center group/lore">
               
               {/* Technical Blueprint Grid Base */}
               <div className="absolute inset-0 bg-[#021318] border border-[#0d9488]/30 rounded-3xl overflow-hidden shadow-[inset_0_0_100px_rgba(13,148,136,0.1)]">
                  <div className="absolute inset-0 retro-grid opacity-20"></div>
                  {/* Grid cells representing micro-components */}
                  <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2 opacity-50">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-[#14b8a6]/20 bg-[#14b8a6]/5 flex items-center justify-center text-[#2dd4bf]/40 text-[8px] font-mono group-hover/lore:border-[#2dd4bf]/40 group-hover/lore:bg-[#14b8a6]/10 transition-colors">
                        {(i * 3.14159).toFixed(2)}
                      </div>
                    ))}
                  </div>
               </div>

               {/* Central Processing Core */}
               <div className="relative z-10 w-56 h-56 border-2 border-[#0ea5e9]/50 bg-[#021822]/90 backdrop-blur-xl rounded-full flex flex-col items-center justify-center p-4 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
                  {/* Spinning loader inside core */}
                  <div className="absolute inset-2 border-2 border-dashed border-[#2dd4bf]/50 rounded-full animate-[spin_20s_linear_infinite] group-hover/lore:border-[#2dd4bf] transition-colors"></div>
                  <div className="text-[10px] text-[#5eead4] font-mono mb-2 uppercase tracking-widest">CPU_CORE: SYNCED</div>
                  <div className="text-6xl text-[#38bdf8] drop-shadow-[0_0_15px_#38bdf8] my-2 group-hover/lore:scale-110 transition-transform">⚡</div>
                  <div className="mt-2 text-[8px] tracking-[0.3em] text-[#bae6fd] animate-pulse">BPM_LINK_ACTIVE</div>
               </div>

               {/* Connection vectors routing across the blueprint */}
               <div className="absolute top-[25%] left-[-5%] w-[35%] h-[1px] bg-gradient-to-r from-transparent to-[#2dd4bf]"></div>
               <div className="absolute bottom-[25%] right-[-5%] w-[35%] h-[1px] bg-gradient-to-l from-transparent to-[#0ea5e9]"></div>
               <div className="absolute top-[-5%] right-[25%] w-[1px] h-[35%] bg-gradient-to-b from-transparent to-[#10b981]"></div>
               
               {/* Floating specification tags */}
               <div className="absolute top-[20%] left-[-10%] bg-[#064e3b]/90 border-l-2 border-[#10b981] px-4 py-2 font-mono text-[9px] text-[#6ee7b7] backdrop-blur-md shadow-[0_10px_20px_rgba(2,19,24,0.8)] filter drop-shadow-lg z-20">
                  <span className="block text-white mb-1">MEMORIA SINTÉTICA</span>
                  <span className="text-[#34d399]">[ 1024_PB CAPACITY ]</span>
               </div>
               
               <div className="absolute bottom-[20%] right-[-10%] bg-[#075985]/90 border-r-2 border-[#0ea5e9] px-4 py-2 font-mono text-[9px] text-[#7dd3fc] backdrop-blur-md shadow-[0_10px_20px_rgba(2,19,24,0.8)] filter drop-shadow-lg z-20 text-right">
                  <span className="block text-white mb-1">FIBRAS FOTOVOLTAICAS</span>
                  <span className="text-[#38bdf8]">AUTO_RECHARGE: ACTIVATED</span>
               </div>

               <div className="absolute top-[5%] right-[5%] bg-[#082f49] border border-[#0ea5e9]/50 px-2 py-1 font-mono text-[8px] text-[#7dd3fc] opacity-80 z-10">SYS_OVERVIEW_v2.0</div>
            </div>

            <div className="order-1 md:order-2 space-y-8 relative">
              <div className="inline-flex py-1 px-3 border border-[#0ea5e9]/50 bg-[#0ea5e9]/10 text-[10px] text-[#7dd3fc] tracking-[0.3em] font-bold uppercase backdrop-blur-sm">REGISTRO HISTÓRICO</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-[#ccfbf1]">
                Naturaleza <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-[#0ea5e9]">Codificada.</span>
              </h2>
              <p className="text-[#94a3b8] text-sm md:text-base font-light leading-relaxed">
                En el pasado destruimos ecosistemas para construir máquinas. 
                <strong className="text-[#5eead4] font-medium"> La Línea 21/06 Retro-Cyber </strong> 
                es nuestra redención: tecnología que cultiva, respira y crece. Utilizando polímeros fotovoltaicos que imitan la fotosíntesis y retro-interfaces inspiradas en los pioneros de la informática.
              </p>
              
              <ul className="space-y-4 pt-4 mt-6 border-t border-[#0d9488]/20 relative">
                {/* Decorative circuit line on ul */}
                <div className="absolute top-0 left-4 w-[1px] h-full bg-gradient-to-b from-[#2dd4bf]/50 to-transparent"></div>

                {[
                  { icon: '◉', title: "Ecosistema Digital 01", detail: "Software bio-neuronal que evoluciona los patrones HUD según tu pulso diario." },
                  { icon: '⎔', title: "Materiales Simbióticos", detail: "Chasis activo de Polímero Celular que purifica partículas de aire colindantes a la muñeca." },
                  { icon: '⭘', title: "Estética Pionera", detail: "Terminales verdes y displays C-Beam que rinden culto arquitectónico al ciberespacio original." },
                  { icon: '⚡', title: "Enlaces Tácticos", detail: "Antenas de grafeno modulares ubicadas en la correa para transmisión encubierta de corto alcance." }
                ].map((feature, i) => (
                  <li key={feature.title} className="flex items-start gap-5 p-5 bg-[#082f49]/30 border border-[#0c4a6e]/50 backdrop-blur-md rounded-br-2xl rounded-tl-2xl group hover:bg-[#082f49]/80 hover:border-[#0ea5e9]/60 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] transition-all ml-4 relative">
                     {/* Connecting node dot */}
                     <div className="absolute top-1/2 left-[-19px] -translate-y-1/2 w-2 h-2 rounded-full bg-[#10b981] border-2 border-[#021318] group-hover:bg-[#2dd4bf] group-hover:shadow-[0_0_10px_#2dd4bf] transition-colors"></div>

                     <div className="text-[#38bdf8] text-2xl mt-1 group-hover:drop-shadow-[0_0_10px_#38bdf8] group-hover:scale-110 transition-transform">{feature.icon}</div>
                     <div>
                       <h4 className="text-[#bae6fd] text-sm font-black uppercase tracking-[0.2em] group-hover:text-[#f0fdfa] transition-colors">{feature.title}</h4>
                       <p className="text-[#64748b] text-xs font-mono tracking-wide mt-2 leading-relaxed group-hover:text-[#94a3b8] transition-colors">{feature.detail}</p>
                     </div>
                  </li>
                ))}
              </ul>
            </div>

        </div>
      </section>
      
    </main>
  );
}
