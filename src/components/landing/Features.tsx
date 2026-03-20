import React from 'react';
import { Shield, Lock, Eye, Zap, Heart, Cloud } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Your data is encrypted using AES-256 standards, ensuring that only you and your chosen recipients can ever access it."
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Privacy",
    description: "We never have access to your private keys or the content of your messages. Your privacy is absolute and mathematically guaranteed."
  },
  {
    icon: Eye,
    title: "The Heartbeat System",
    description: "Our proprietary check-in system ensures your legacy is delivered only when it's truly time, with multiple layers of verification."
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Fast, reliable processing of your check-ins and legacy triggers, handled by our globally distributed secure network."
  },
  {
    icon: Heart,
    title: "Compassionate Support",
    description: "Designed with empathy to help your loved ones navigate difficult moments with clear guidance and your personal touch."
  },
  {
    icon: Cloud,
    title: "Perpetual Storage",
    description: "Your memories are stored across redundant, secure cloud nodes, ensuring they stay safe and accessible for decades to come."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 relative bg-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Core Principles</span>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6">Designed for Trust</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
             The foundation of 'If' is built on unshakeable security and deep human empathy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#E6663E]/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#E6663E]/10 flex items-center justify-center text-[#E6663E] mb-6 group-hover:bg-[#E6663E] group-hover:text-white transition-all duration-500 shadow-lg">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 ">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
