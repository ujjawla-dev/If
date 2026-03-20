import React from 'react';
import { Camera, Mic, Video, Play } from 'lucide-react';

const MultimediaSupport = () => {

  return (
    <section className="py-12 md:py-16 bg-[#E6663E]/5 relative overflow-hidden text-white border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E6663E]/10 blur-[150px] -z-10 rounded-full animate-pulse" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Legacy Media</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 leading-tight uppercase tracking-tight">Beyond Written <br />Words</h2>
            <p className="text-lg md:text-xl text-white/40 mb-8 md:mb-12 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Capture your voice, your expressions, and your smiles. We support high-fidelity media storage so your presence remains palpable.
            </p>
            <ul className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Camera, title: "Photo Galleries", text: "High-resolution storage for every milestone." },
                { icon: Mic, title: "Voice Notes", text: "Personal audio reflections that carry your voice." },
                { icon: Video, title: "Video Messages", text: "Heartfelt messages for future milestones." }
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-4 md:gap-6 group text-left`}>
                  <div className="p-3 md:p-4 rounded-[1.25rem] bg-[#E6663E]/10 text-[#E6663E] group-hover:bg-[#E6663E] group-hover:text-white transition-all shadow-lg group-hover:shadow-[#E6663E]/20 shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-sm md:text-base text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-tight font-medium">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group w-full lg:pl-10">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E6663E]/30 to-[#273279]/50 rounded-[2.5rem] md:rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] bg-black/40 overflow-hidden border border-white/10 backdrop-blur-xl flex items-center justify-center group cursor-pointer shadow-[0_0_100px_rgba(230,102,62,0.1)] hover:shadow-[0_0_150px_rgba(230,102,62,0.2)] transition-all duration-700">
                <img 
                  src="/multimedia_collage.png" 
                  alt="Multimedia Collage" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" 
                />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151733]/20 to-[#151733]/60 group-hover:opacity-40 transition-opacity" />
              
              <div className="flex flex-col items-center gap-6 text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:bg-[#E6663E] group-hover:border-[#E6663E] group-hover:shadow-[0_0_80px_rgba(230,102,62,0.4)] transition-all duration-500">
                    <Play className="w-8 h-8 md:w-14 md:h-14 fill-current ml-2" />
                </div>
                <span className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-black text-white/60 group-hover:text-white transition-colors">Play Preview</span>
              </div>

              {/* Enhanced Quote Overlay */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 p-4 md:p-6 rounded-[2rem] bg-[#151733]/90 backdrop-blur-2xl border border-white/10 max-w-[200px] md:max-w-[280px] shadow-3xl hidden sm:block transform hover:-rotate-1 transition-transform">
                 <div className="w-8 h-8 rounded-full bg-[#E6663E]/20 flex items-center justify-center mb-3">
                   <Video className="w-4 h-4 text-[#E6663E]" />
                 </div>
                 <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light font-serif">
                   "The video my grandfather left for my 18th birthday changed everything for me."
                 </p>
                 <div className="mt-3 text-[8px] md:text-[10px] uppercase font-bold text-[#E6663E] tracking-widest">Customer Story</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaSupport;
