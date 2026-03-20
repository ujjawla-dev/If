import React from 'react';
import Link from 'next/link';
import { ChevronRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-center lg:text-left">
          <div className="order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-semibold text-[#E6663E] mb-6 animate-pulse">
              <Sparkles className="w-3 h-3" />
              <span>AI-Guided Legacy Preservation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter mb-4 md:mb-6 leading-[1.05] md:leading-[1] text-white">
              Your Story, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6663E] to-[#ff9e7d]">Their Legacy.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/50 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              Preserve your life moments, final wishes, and heartfelt messages in a secure digital space designed for the people you love.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start">
              <Link 
                href="/register" 
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#E6663E] hover:bg-[#ff7b52] transition-all rounded-2xl text-lg md:text-xl font-bold text-white shadow-2xl shadow-[#E6663E]/30 flex items-center justify-center gap-2 group active:scale-95"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-2xl text-lg md:text-xl font-bold text-white flex items-center justify-center gap-2 active:scale-95 backdrop-blur-md">
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-current text-[#E6663E]" />
                Video Demo
              </button>
            </div>
          </div>
          <div className="relative group perspective-1000 order-2 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E6663E]/20 to-[#273279]/40 rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-1000" />
            <div className="relative rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl transform lg:group-hover:rotate-y-[-5deg] transition-transform duration-700 bg-[#151733]/40 backdrop-blur-sm">
                <img 
                  src="/hero_legacy.png" 
                  alt="Legacy Illustration" 
                  className="w-full h-auto object-cover lg:group-hover:scale-110 transition-transform duration-1000"
                />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E6663E]/20 blur-[120px] -z-10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#273279]/30 blur-[120px] -z-10 rounded-full animate-pulse" />
    </section>
  );
};

export default Hero;
