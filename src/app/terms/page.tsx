"use client";

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Scale, UserCheck, CreditCard, ShieldCheck, HelpCircle, FileCheck, Layers } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      title: "Membership & Subscriptions",
      icon: CreditCard,
      content: "We offer tiered membership options including Free, Yearly, and Lifetime plans. Subscriptions are handled securely via Stripe integration. By selecting a plan, you agree to the recurring billing cycles or one-time fees as described during the checkout process."
    },
    {
      title: "User Onboarding & Authentication",
      icon: UserCheck,
      content: "Users must create an account and complete email/phone verification for security. You are responsible for maintaining the confidentiality of your login credentials, including Multi-Factor Authentication (MFA) and biometric face recognition data if enabled."
    },
    {
      title: "Content Ownership & Usage",
      icon: Layers,
      content: "You retain full ownership of the personal information, messages, and media (photos, audio, video) you upload to the platform. We provide a structured space for preservation, and you grant us the necessary license for secure cloud storage (AWS S3) and processing (AI Speech-to-Text) required to deliver these services."
    },
    {
      title: "Legacy Contact Permissions",
      icon: ShieldCheck,
      content: "You may assign 'Legacy Contacts' who are authorized to access designated content after your passing. It is your responsibility to manage these permissions and ensure your nominated contacts are aware of their eventual role and the authentication requirements involved."
    },
    {
      title: "Acceptable Use Policy",
      icon: FileCheck,
      content: "The platform is designed for personal storytelling and end-of-life planning. Users are prohibited from uploading illegal, harmful, or offensive content. We reserve the right to suspend accounts that violate these core principles of compassionate and structured space preservation."
    },
    {
      title: "Support & Termination",
      icon: HelpCircle,
      content: "Users can create support tickets for any assistance. You may terminate your account at any time. Upon termination, we will handle your data in accordance with our Privacy Policy, ensuring a secure and respectful conclusion to your digital legacy journey."
    }
  ];

  return (
    <div className="min-h-screen  text-white font-sans selection:bg-[#E6663E]/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(circle_at_50%_0%,rgba(230,102,62,0.1),transparent_50%)]" />
      {/* <div className="fixed inset-0 -z-50 bg-[url('/bg.png')] opacity-20 bg-cover bg-fixed" /> */}
      
      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E6663E] text-xs font-bold tracking-widest uppercase mb-4">
              <Scale className="w-3 h-3" />
              Legal Framework
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Terms of <span className="text-[#E6663E]">Service</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              These terms outline the agreement between you and the platform for the preservation and management of your digital legacy.
            </p>
          </div>

          {/* Project Context Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-12 backdrop-blur-xl border-l-[#E6663E] border-l-4">
             <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
               "This digital solution seeks to gently address sensitive moments by providing a compassionate and structured space for individuals to preserve their memories, communicate their values, and thoughtfully express their final wishes."
             </p>
             <div className="mt-4 flex items-center gap-2">
               <div className="w-6 h-px bg-white/20" />
               <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Project Vision (Release 1.1)</span>
             </div>
          </div>

          {/* Terms Sections */}
          <div className="grid grid-cols-1 gap-8">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E6663E]/10 group-hover:border-[#E6663E]/20 transition-all duration-500">
                    <section.icon className="w-6 h-6 text-[#E6663E]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
