"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    // { name: 'How it Works', href: '/how-it-works' },
    // { name: 'Features', href: '/features' },
    // { name: 'Modules', href: '/modules' },
    // { name: 'Security', href: '/security' },
    { name: 'Membership', href: '/membership' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    // { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a0c1a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl' 
            : 'bg-[#0a0c1a]/40 backdrop-blur-md border-b border-white/5 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image src="/logo.png" alt="If" fill className="object-contain" priority />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-theme-primary transition-colors leading-none">
              If<span className="text-theme-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm lg:text-base font-semibold transition-all relative group ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <div className={`absolute -bottom-2 left-0 w-full h-0.5 bg-theme-primary transition-all duration-300 origin-left ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  } shadow-[0_0_10px_rgba(230,102,62,0.5)]`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/login" 
              className="text-sm lg:text-base font-semibold text-white/70 hover:text-white transition-all"
            >
              Log In
            </Link>
            <Link 
              href="/register" 
              className="px-3 py-2 bg-theme-primary hover:bg-theme-primary-hover transition-all rounded-xl text-sm lg:text-base font-bold text-white shadow-lg shadow-theme-primary/20 active:scale-95 whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside for better z-index and bg handling */}
      <div 
        className={`md:hidden fixed inset-0 z-[200] bg-[#0a0c1a] flex flex-col transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="If" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold text-white">
              If<span className="text-theme-primary">.</span>
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Links Area */}
        <div className="flex-grow overflow-y-auto pt-4 pb-8">
          <div className="flex flex-col px-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white py-5 border-b border-white/5 flex items-center justify-between group"
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-theme-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Buttons Area */}
        <div className="p-6 border-t border-white/5 bg-[#0d0f1f]/50 backdrop-blur-md">
          <div className="flex flex-col gap-4">
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full py-4.5 text-center font-bold text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              Log In
            </Link>
            <Link 
              href="/register" 
              onClick={() => setIsOpen(false)}
              className="w-full py-4.5 text-center font-bold text-white bg-theme-primary rounded-xl shadow-lg shadow-theme-primary/20 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
