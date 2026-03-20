import React from 'react';
import Features from '@/components/landing/Features';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
