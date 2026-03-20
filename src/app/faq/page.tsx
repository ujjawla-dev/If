import React from 'react';
import FAQSection from '@/components/landing/FAQSection';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function FAQPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
