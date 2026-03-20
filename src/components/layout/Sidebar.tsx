"use client"
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Home, ClipboardList, User,LayoutGrid, LayoutList,MessageSquare, UserPlus, Settings, LogOut, HelpCircle, Bell } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/user-dashboard' },
    { name: 'Questionnaire', icon: ClipboardList, href: '/questionnaire' },
    { name: 'Profile', icon: User, href: '/user-dashboard/profile', badge: 2 },
    { name: 'Subscription', icon: LayoutGrid, href: '/user-dashboard/subscription' },
    { name: 'Category', icon: LayoutList, href: '/category' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Invites', icon: UserPlus, href: '/invites' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 w-64 h-full flex flex-col border-r border-white/10 backdrop-blur-md z-40 transition-transform duration-300 transform lg:relative lg:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Mobile Close Button */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-6 right-4 p-2 text-white/60 hover:text-white transition-colors"
      >
        <LogOut className="w-6 h-6 rotate-180" />
      </button>

      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-xl leading-none">
           <Image
            src="/logo.png"   
            alt="logo"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <span className="text-xl font-semibold tracking-wide text-white">If</span>
      </div>

      {/* User Profile Snippet */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
          alt="Jesica Lambor"
          className="w-12 h-12 rounded-full border border-white/20 object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm text-white">Jesica Lambor</h3>
          <p className="text-xs text-white/50">jesica@email.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                isActive 
                  ? 'text-[#FF8B66] font-medium bg-white/5' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`flex items-center gap-3 ${isActive ? 'border-l-2 border-[#FF8B66] -ml-4 pl-[14px]' : ''}`}>
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-[#FF4545] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-1 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 w-full rounded-xl transition-colors">
          <UserPlus className="w-5 h-5" />
          <span>Invite Family & Friends</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 w-full rounded-xl transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>Help</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-[#FF4545] hover:bg-white/5 w-full rounded-xl transition-colors mt-4">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
