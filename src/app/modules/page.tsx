import React from 'react';
import ModulesGrid from '@/components/landing/ModulesGrid';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function ModulesPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <ModulesGrid />
      </div>
      <Footer />
    </main>
  );
}
