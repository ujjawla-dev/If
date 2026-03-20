import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#0a0c1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-img opacity-5 grayscale pointer-events-none -z-10" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <Image src="/logo.png" alt="If" width={40} height={40} className="object-contain" />
              <span className="text-2xl font-bold tracking-tight text-white">If</span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
               A structured yet compassionate space for individuals to preserve memories, communicate values, and thoughtfully express final wishes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/how-it-works" className="hover:text-[#E6663E] transition-colors">How it Works</Link></li>
              <li><Link href="/features" className="hover:text-[#E6663E] transition-colors">Features</Link></li>
              <li><Link href="/modules" className="hover:text-[#E6663E] transition-colors">Modules</Link></li>
              <li><Link href="/membership" className="hover:text-[#E6663E] transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Help & Support</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-[#E6663E] transition-colors">Contact Support</a></li>
              <li><Link href="/terms" className="hover:text-[#E6663E] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#E6663E] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-[#E6663E] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">From Techwagger</h4>
             <p className="text-[11px] text-white/20 uppercase font-black leading-loose tracking-[0.2em] max-w-xs mx-auto md:mx-0">
                Created by Praveen Sharma <br/>
                For Christy Perdue <br/>
                Version 1.1 - 2025
             </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
          <p className="text-[10px] text-white tracking-[0.4em] uppercase font-bold">
            &copy; 2025 Techwagger Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest">
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
