import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SIC/XE Assembler",
  description: "SIC/XE assembly code converter and assembler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased dark bg-[#07070e]`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <header className="sticky top-0 z-10 border-b border-violet-950/50 bg-black/60 backdrop-blur-md">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-sm font-semibold text-neutral-300 tracking-widest uppercase">
                SIC/XE Assembler
              </span>
            </div>
            <span className="text-xs text-neutral-600" style={{ fontFamily: "var(--font-space-mono)" }}>
              Systems Programming
            </span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

