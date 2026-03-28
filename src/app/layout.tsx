import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cronos & Company | Curaduría de Relojería de Prestigio",
  description: "Boutique exclusiva de alta relojería. Piezas de prestigio, materiales premium y elegancia atemporal. Curada para el hombre que valora su tiempo.",
  keywords: ["relojes de lujo", "alta relojería", "cronos company", "relojes prestigiosos", "curaduría de relojes"],
  authors: [{ name: "Cronos & Company" }],
  icons: {
    icon: "/favicon.png",
    apple: "/images/logo/logo_mark_square.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorant.variable} antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
