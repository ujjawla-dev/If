"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How do you know when I am gone?",
    answer: "We use a 'Heartbeat' system where you periodically check in. If we don't hear from you after a pre-set duration and multiple attempts, your designated trustees are contacted for verification."
  },
  {
    question: "Can I change my messages after I record them?",
    answer: "Absolutely. You have full control and can edit, update, or delete your content at any time. Think of it as a living legacy that grows with you."
  },
  {
    question: "Who can access my data if I'm not here?",
    answer: "Only the individuals you specifically designate (Trustees) can initiate the access process. Even then, they only see what you have explicitly shared with them."
  },
  {
    question: "Is my data safe from hackers?",
    answer: "Yes. We use industry-standard AES-256 encryption. Your data is encrypted locally before being stored in our distributed secure cloud, making it unreadable without your private key."
  },
  {
    question: "What happens if 'If' goes out of business?",
    answer: "We have a 'Perpetual Archive' trust designed to keep the service running and data accessible for at least 50 years, regardless of our corporate status."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 relative text-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#E6663E] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Information</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-6  uppercase tracking-tight">Questions & Answers</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
             Finding peace of mind starts with clear answers to sensitive questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i ? 'bg-white/10 border-[#E6663E]/30 shadow-2xl' : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 md:py-8 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-bold ">{faq.question}</span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                   {openIndex === i ? <Minus className="w-5 h-5 text-[#E6663E]" /> : <Plus className="w-5 h-5 text-white/40" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-8 text-white/50 leading-relaxed font-light text-base md:text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
