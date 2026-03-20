"use client";
import React from 'react';
import { Search, Bell, RotateCcw, LayoutDashboard, LayoutTemplate, CopyPlus, Menu } from 'lucide-react';
import Image from 'next/image';

interface TopNavProps {
  onMenuClick: () => void;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="w-full flex items-center justify-between py-4 px-4 md:py-6 md:px-8 relative z-20">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Search - Hidden on mobile, or smaller */}
        <div className="relative hidden md:block w-64 lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#1c1a24]/80 backdrop-blur-md border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Mobile Search Icon only */}
        <button className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
          <Search className="w-6 h-6" />
        </button>

        {/* Notifications */}
        <button className="relative text-white/70 hover:text-white transition-colors p-1">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#FF4545] text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#151733]">
            2
          </span>
        </button>

        {/* Invite Button - Simplified on mobile */}
        <button className="flex items-center gap-2 bg-[#1e1c2a]/80 backdrop-blur-md border border-white/10 p-1 md:px-4 md:py-1.5 rounded-full hover:bg-white/10 transition-colors">
          <span className="hidden lg:block text-sm font-medium">+ Invite Family & Friend</span>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
            alt="Jesica"
            className="w-8 h-8 rounded-full border border-white/20 object-cover"
          />
        </button>
        
        {/* Helper icon - hidden on small mobile */}
        <button className="hidden sm:flex w-10 h-10 rounded-full bg-[#1e1c2a]/80 backdrop-blur-md border border-white/10 items-center justify-center text-white/70 hover:text-white transition-colors">
          <CopyPlus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
