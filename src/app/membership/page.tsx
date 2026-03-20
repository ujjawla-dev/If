import React from 'react';
import MembershipPlans from '@/components/landing/MembershipPlans';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function MembershipPage() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="pt-32 ">
        <MembershipPlans />
      </div>
      <Footer />
    </main>
  );
}
