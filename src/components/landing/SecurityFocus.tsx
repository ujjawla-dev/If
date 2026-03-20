import React from 'react';
import { Lock, Key, EyeOff, ShieldAlert } from 'lucide-react';

const SecurityFocus = () => {
  const features = [
    {
      icon: Lock,
      title: "AES-256 Encryption",
      desc: "The same encryption standard used by banks and governments globally to protect sensitive data."
    },
    {
      icon: Key,
      title: "Private Key Ownership",
      desc: "You are the sole holder of access. Not even our team can view your private messages without authorization."
    },
    {
      icon: EyeOff,
      title: "Zero-Knowledge Architecture",
      desc: "We prioritize your privacy by ensuring your data is encrypted before it even leaves your device."
    },
    {
      icon: ShieldAlert,
      title: "Redundancy & Backups",
      desc: "Distributed storage ensures your legacy is never lost to hardware failure or localized disasters."
    }
  ];

  return (
    <section id="security" className="py-12 md:py-16 bg-white/[0.02] border-y border-white/5 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6663E]/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 block">Safe & Sound</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-6  leading-tight uppercase tracking-tight">Your Legacy Deserves <br />Military-Grade Security</h2>
            <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light">
              Trust is the foundation of our platform. We combine cutting-edge technology with rigorous security protocols to ensure your story remains yours alone until the right moment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#E6663E]/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#E6663E]" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white/90">{feature.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-[3rem] border border-white/10 overflow-hidden aspect-square shadow-2xl bg-[#0a0c1a]/80 backdrop-blur-xl p-8 md:p-16 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-[#E6663E] to-[#273279] p-1 mb-8 animate-pulse shadow-[0_0_50px_rgba(230,102,62,0.3)]">
                  <div className="w-full h-full rounded-full bg-[#151733] flex items-center justify-center">
                    <Lock className="w-12 h-12 md:w-20 md:h-20 text-white" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 ">Encrypted by Default</h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed">
                  Every byte of data you upload is immediately processed through our zero-knowledge encryption pipeline.
                </p>
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 px-6 py-3 rounded-2xl bg-[#E6663E] text-white font-bold text-xs shadow-xl rotate-12">
               AES-256
            </div>
            <div className="absolute -bottom-4 -left-4 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white font-bold text-xs shadow-xl -rotate-6 border border-white/10">
               ZERO-KNOWLEDGE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFocus;
