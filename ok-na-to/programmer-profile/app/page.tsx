'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#0a0d14] text-[#00FF66] font-mono relative min-h-screen selection:bg-[#00FF66] selection:text-[#0a0d14] scroll-smooth">
      {/* Google Fonts Load */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Share+Tech+Mono&display=swap"
      />

      <style jsx global>{`
        .font-pixel { font-family: 'Press Start 2P', monospace; }
        .font-retro { font-family: 'VT323', monospace; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }
        
        .crt-overlay {
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }
        
        .glow-green {
          text-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
        }
        .glow-box-green {
          box-shadow: 0 0 12px rgba(0, 255, 102, 0.3), inset 0 0 6px rgba(0, 255, 102, 0.2);
        }
        .glow-box-cyan {
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.3), inset 0 0 6px rgba(0, 240, 255, 0.2);
        }
      `}</style>

      {/* CRT Overlay Background */}
      <div className="fixed inset-0 crt-overlay z-50 opacity-40"></div>

      {/* Binary Background Graphics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 font-retro text-2xl select-none leading-none z-0">
        <p>01010101 10101010 01100001 01110010 01101001 01100001 01101110 01010101 10101010 01100001 01110010 01101001 01100001 01101110</p>
        <p>10101010 01010101 01001010 01001001 01000100 01001010 01000101 10101010 01010101 01001010 01001001 01000100 01001010 01000101</p>
        <p>01010101 10101010 01001110 01000100 01001101 00100000 00110011 01010101 10101010 01001110 01000100 01001101 00100000 00110011</p>
        <p>10101010 01010101 01110011 01111001 01110011 01110100 01100101 10101010 01010101 01110011 01111001 01110011 01110100 01100101</p>
      </div>

      {/* Top Navigation Bar */}
      <header class="sticky top-0 z-40 bg-[#0a0d14]/90 border-b-2 border-[#00FF66] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-pixel text-sm text-[#00FF66] glow-green flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-[#00FF66] animate-pulse"></span>
            @Jidjeyd
          </div>
          <nav className="flex gap-6 font-pixel text-xs">
            <a href="#home" className="hover:text-[#00F0FF] transition-colors">[ HOME ]</a>
            <a href="#education" className="hover:text-[#00F0FF] transition-colors">[ EDUCATION ]</a>
            <a href="#projects" className="hover:text-[#00F0FF] transition-colors">[ PROJECTS ]</a>
            <a href="#contact" className="hover:text-[#00F0FF] transition-colors">[ CONTACT ]</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 relative z-10">

        {/* 1. HERO SECTION */}
        <section id="home" className="pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10 border-2 border-[#00FF66]/30 bg-[#101522]/80 p-8 rounded-lg glow-box-green">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="font-pixel text-xs text-[#00F0FF] tracking-wider">
              @Jidjeyd
            </div>
            <h1 className="font-pixel text-2xl sm:text-3xl text-white glow-green leading-snug">
              Marian Jade Gorenzo
            </h1>
            <p className="text-[13px] text-gray-300 max-w-md font-mono-tech border-l-2 border-[#00FF66] pl-3 py-1 bg-[#00FF66]/5">
              "I turn coffee into code and bugs into permanent features."
            </p>
          </div>

          <div className="relative shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-md overflow-hidden border-4 border-[#00FF66] bg-[#1a202c] shadow-[0_0_20px_rgba(0,255,102,0.4)]">
              <img 
                src="/profile.jpg" 
                alt="Marian Jade Gorenzo" 
                className="w-full h-full object-cover filter contrast-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300/0a0d14/00FF66?text=Jidjeyd+AVATAR';
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#00F0FF] text-black font-pixel text-[10px] px-2 py-1 uppercase">
              P1: ONLINE
            </div>
          </div>
        </section>

        {/* 2. EDUCATION SECTION */}
        <section id="education" className="space-y-6">
          <h2 className="font-pixel text-xl sm:text-2xl text-[#00F0FF] flex items-center gap-3">
            <span className="text-[#00FF66]">&gt;</span> EDUCATION_
          </h2>

          <div className="border-2 border-[#00F0FF] bg-[#101522]/90 p-6 sm:p-8 rounded-lg glow-box-cyan space-y-4">
            <div className="flex justify-between items-start border-b border-[#00F0FF]/30 pb-4 flex-wrap gap-2">
              <div>
                <span className="font-pixel text-xs text-[#00FF66] bg-[#00FF66]/10 px-2 py-1 rounded">LEVEL 3</span>
                <h3 className="font-pixel text-lg text-white mt-2">3rd Year BSIT</h3>
              </div>
              <span className="font-retro text-xl text-[#00F0FF]">STATUS: IN_PROGRESS</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-200">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-[#00F0FF] font-mono-tech">
                Major in Network Design and Management (NDM)
              </p>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="space-y-6">
          <h2 className="font-
