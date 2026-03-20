import React from 'react';
import SecurityFocus from '@/components/landing/SecurityFocus';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function SecurityPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <SecurityFocus />
      </div>
      <Footer />
    </main>
  );
}
