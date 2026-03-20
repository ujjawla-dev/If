import React from 'react';
import Link from 'next/link';

const CTASection = () => {

  return (
    <section className="py-12 md:py-16 relative text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden p-8 md:p-16 text-center border border-[#E6663E]/30 bg-[#1e1c2a]/80 backdrop-blur-2xl shadow-2xl">
          <div className="absolute inset-0 bg-img opacity-10 grayscale -z-10" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#E6663E]/10 blur-[150px] -z-20 rounded-full" />
          
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight  uppercase tracking-tight">Start Building <br className="hidden md:block" />Your Legacy Today</h2>
          <p className="text-base md:text-xl text-white/50 mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of individuals who are securing their life stories and providing peace for their families with "If".
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
            <Link 
              href="/register" 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-[#E6663E] hover:bg-[#ff7b52] transition-all rounded-2xl md:rounded-[1.75rem] text-lg md:text-2xl font-black text-white shadow-2xl shadow-[#E6663E]/40 active:scale-95 duration-300"
            >
              Create Free Account
            </Link>
            <Link 
              href="/login" 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white/5 hover:bg-white/10 border border-white/20 transition-all rounded-2xl md:rounded-[1.75rem] text-lg md:text-2xl font-black text-white active:scale-95 backdrop-blur-md"
            >
              Access My Portal
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 md:gap-12 text-white/40">
             <div className="flex flex-col gap-1 items-center">
                <span className="text-xl md:text-2xl font-bold text-white tracking-widest">10k+</span>
                <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em]">Active Users</span>
             </div>
             <div className="w-px h-8 md:h-10 bg-white/10" />
             <div className="flex flex-col gap-1 items-center">
                <span className="text-xl md:text-2xl font-bold text-white tracking-widest">AES-256</span>
                <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em]">Encrypted</span>
             </div>
             <div className="w-px h-8 md:h-10 bg-white/10" />
             <div className="flex flex-col gap-1 items-center">
                <span className="text-xl md:text-2xl font-bold text-white tracking-widest">18+</span>
                <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em]">Categories</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
