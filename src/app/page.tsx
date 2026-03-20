"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import CustomerGoals from "@/components/landing/CustomerGoals";
import ModulesGrid from "@/components/landing/ModulesGrid";
import SecurityFocus from "@/components/landing/SecurityFocus";
import MultimediaSupport from "@/components/landing/MultimediaSupport";
import MembershipPlans from "@/components/landing/MembershipPlans";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#151733] text-white selection:bg-[#E6663E]/30 overflow-x-hidden relative font-sans">
      {/* Import Premium Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        :root {
          --font-outfit: 'Outfit', sans-serif;
        }
        body {
          font-family: var(--font-outfit);
        }
      `}</style>

      {/* Global Background Image - Highlighted */}
      <div className="bg-img absolute inset-0 -z-50 opacity-60 brightness-110" />
      
      {/* Dynamic Gradient Overlays */}
      <div className="fixed inset-0 -z-40 bg-gradient-to-b from-[#151733]/40 via-transparent to-[#151733]/90" />
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_50%_0%,rgba(230,102,62,0.15),transparent_50%)]" />
      
      {/* The Landing Page Content */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <HowItWorks />

        {/* Animated Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <CustomerGoals />
        
        <Features />
        
        <ModulesGrid />
        
        <SecurityFocus />

        <MultimediaSupport />
        
        <MembershipPlans />
        
        <FAQSection />

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}