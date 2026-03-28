import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  color?: string;
}

export default function Logo({ 
  className = '', 
  variant = 'full',
  color = '#C9A84C' 
}: LogoProps) {
  const brandColors: any = {
    classic: '#C9A84C',
    lady: '#7A4040',
    white: '#FFFFFF',
    black: '#000000'
  };

  const finalColor = brandColors[color] || color;

  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 512 512" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <polyline 
          points="30,400 30,170 112,230 186,70 256,158 326,46 396,158 440,70 490,170 490,400" 
          stroke={finalColor} 
          strokeWidth="12" 
          strokeLinejoin="round"
        />
        <line x1="30" y1="400" x2="490" y2="400" stroke={finalColor} strokeWidth="12"/>
        <text 
          x="256" 
          y="314" 
          textAnchor="middle" 
          fontSize="72" 
          fontFamily="'Cormorant Garamond', serif" 
          fontWeight="700" 
          fill={finalColor} 
          letterSpacing="10"
        >
          XII
        </text>
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 700 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="40" y1="12" x2="660" y2="12" stroke={finalColor} strokeWidth="0.5"/>
      <polyline 
        points="40,36 40,14 88,24 120,6 152,24 175,14 198,24 221,8 244,24 267,14 290,24 320,6 352,24 375,14 398,24 421,8 444,24 467,14 490,24 520,6 552,24 572,14 584,14 584,36" 
        fill="none" 
        stroke={finalColor} 
        strokeWidth="1.8" 
        strokeLinejoin="round"
      />
      <line x1="40" y1="36" x2="660" y2="36" stroke={finalColor} strokeWidth="1.8"/>
      <text 
        x="352" 
        y="58" 
        textAnchor="middle" 
        fontSize="22" 
        fontFamily="'Cormorant Garamond', serif" 
        fontWeight="700" 
        fill={finalColor} 
        letterSpacing="18"
      >
        CRONOS
      </text>
      <line x1="240" y1="64" x2="464" y2="64" stroke={finalColor} strokeWidth="0.3" opacity="0.6"/>
      <text 
        x="352" 
        y="74" 
        textAnchor="middle" 
        fontSize="7" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="300" 
        fill={finalColor} 
        opacity="0.8" 
        letterSpacing="12"
      >
        &amp; COMPANY
      </text>
    </svg>
  );
}
