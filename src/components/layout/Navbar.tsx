'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLadyCollection = pathname?.includes('/collection/143');
  const isRetroCollection = pathname?.includes('/collection/411');
  const isDigitalCollection = pathname?.includes('/collection/2106');
  const isLuxuryCollection = pathname?.includes('/collection/1203');
  
  const logoColor = isDigitalCollection ? '#2dd4bf' : (isRetroCollection ? '#D4A055' : (isLadyCollection ? 'lady' : (isLuxuryCollection ? '#C5A059' : 'white')));
  const textColor = isDigitalCollection ? 'text-[#2dd4bf]' : (isRetroCollection ? 'text-[#D4A055]' : (isLadyCollection ? 'text-[#7A4040]' : (isLuxuryCollection ? 'text-[#C5A059]' : 'text-zinc-400')));
  const hoverColor = isDigitalCollection ? 'hover:text-[#ccfbf1] drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]' : (isRetroCollection ? 'hover:text-[#E8C97A]' : (isLadyCollection ? 'hover:text-[#5a2f2f]' : (isLuxuryCollection ? 'hover:text-[#E8D09B]' : 'hover:text-white')));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: '143', href: '/collection/143' },
    { name: '411', href: '/collection/411' },
    { name: '21/06', href: '/collection/2106' },
    { name: '12/03', href: '/collection/1203' },
  ];

  return (
    <>
      {/* 🛸 FLOATING PILL NAVBAR 🛸 */}
      <nav className={`fixed ${isDigitalCollection ? 'top-[8vh] md:top-[12vh]' : 'top-6'} inset-x-0 mx-auto z-[70] transition-all duration-700 w-fit max-w-[95vw] ${scrolled ? 'translate-y-[-10px] scale-95' : 'translate-y-0 scale-100'}`}>
        <div className={`glass px-4 md:px-10 py-3 rounded-full border border-white/10 flex items-center gap-6 md:gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl`}>
          
          <Link href="/" className="group flex items-center transition-transform hover:scale-110 active:scale-95">
             <Logo color={logoColor} className="h-5 md:h-7 w-auto max-w-full" />
          </Link>

          {/* Vertical Separator */}
          <div className="w-px h-6 bg-white/10 hidden md:block"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-[9px] uppercase font-black tracking-[0.3em] transition-all hover:translate-y-[-1px] ${textColor} ${hoverColor} ${pathname === item.href ? 'text-white border-b border-white/20' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-white/5 mx-4"></div>
            <Link href="/admin/orders" className={`text-[8px] uppercase font-bold transition-colors ${textColor} opacity-40 hover:opacity-100`}>Admin</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-1 hover:text-[#C5A059] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>

        {/* Floating Mobile Overlay (Pill Compatible) */}
        <div className={`absolute top-full left-0 right-0 mt-4 glass rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center space-y-6 transition-all duration-500 overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'}`}>
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl uppercase font-black tracking-[0.4em] text-zinc-400 hover:text-white transition-all transform hover:scale-110"
            >
              {item.name}
            </Link>
          ))}
          <div className="w-full h-px bg-white/5 my-4"></div>
          <Link 
            href="/admin/orders" 
            onClick={() => setIsOpen(false)}
            className="text-[10px] uppercase font-bold text-zinc-700 hover:text-white transition-colors"
          >
            Admin
          </Link>
        </div>
      </nav>
    </>
  );
}
