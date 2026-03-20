import React from 'react';
import HowItWorks from '@/components/landing/HowItWorks';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
