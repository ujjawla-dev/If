import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const MembershipPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["Basic storytelling prompts", "Up to 500MB storage", "1 Legacy Contact", "Standard encryption"],
      highlight: false
    },
    {
      name: "Yearly",
      price: "$49",
      period: "per year",
      features: ["Advanced AI recommendations", "10GB Secure storage", "5 Legacy Contacts", "Speech-to-Text conversion", "Multimedia support"],
      highlight: true
    },
    {
      name: "Lifetime",
      price: "$199",
      period: "one-time",
      features: ["Everything in Yearly", "Unlimited storage", "Unlimited Legacy Contacts", "High-fidelity video storage", "Priority support"],
      highlight: false
    }
  ];

  return (
    <section id="membership" className="py-12 md:py-16 relative text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Membership</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4  leading-tight uppercase tracking-tight">Choose Your Legacy</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
             Select the plan that best fits the depth of the story you wish to preserve for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 flex flex-col h-full bg-[#1e1c2a]/40 backdrop-blur-xl group hover:shadow-2xl ${
                plan.highlight 
                  ? 'border-[#E6663E] shadow-2xl shadow-[#E6663E]/20 md:scale-105 z-10' 
                  : 'border-white/10 hover:border-[#E6663E]/30 bg-white/5'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-white/40 font-medium">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 transition-colors ${plan.highlight ? 'text-[#E6663E]' : 'text-white/20 group-hover/item:text-[#E6663E]'}`} />
                    <span className="text-white/60 group-hover/item:text-white transition-colors text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/register" 
                className={`w-full py-5 rounded-2xl text-center font-bold text-lg transition-all active:scale-95 ${
                  plan.highlight 
                    ? 'bg-[#E6663E] text-white hover:bg-[#ff7e59] shadow-lg shadow-[#E6663E]/20' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#E6663E]/5 to-transparent -z-10" />
    </section>
  );
};

export default MembershipPlans;
