import React from 'react';
import { PenTool, ShieldCheck, Mail } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: PenTool,
      title: "1. Capture Your Story",
      desc: "Use our AI-guided prompts to record your life moments, final wishes, and heartfelt messages in various formats."
    },
    {
      icon: ShieldCheck,
      title: "2. Securely Encrypt",
      desc: "Your data is protected with military-grade AES-256 encryption. Only you decide who gets access and when."
    },
    {
      icon: Mail,
      title: "3. Peaceful Delivery",
      desc: "At the designated time, your messages and wishes are gently delivered to your loved ones, exactly as you intended."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Process</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 uppercase tracking-tight">How It Works</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
             A simple, compassionate three-step journey to securing your digital and emotional legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#E6663E]/30 to-transparent -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center text-center group`}>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#E6663E]/10 group-hover:border-[#E6663E]/30 transition-all duration-500 relative">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#E6663E]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#151733] border border-white/10 flex items-center justify-center text-xs font-bold text-white/50">
                   0{i + 1}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 ">{step.title}</h3>
              <p className="text-sm md:text-base text-white/40 leading-relaxed font-light px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
