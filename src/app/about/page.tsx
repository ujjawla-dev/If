import React from 'react';
import Hero from '@/components/landing/Hero';
import CustomerGoals from '@/components/landing/CustomerGoals';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
        <Hero />
        <CustomerGoals />
     
      <Footer />
    </main>
  );
}
