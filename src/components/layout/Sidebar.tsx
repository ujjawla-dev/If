import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Home, ClipboardList, User, LayoutGrid,MessageSquare, UserPlus, Settings, LogOut, HelpCircle, Bell } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/dashboard', active: true },
    { name: 'Questionnaire', icon: ClipboardList, href: '/questionnaire' },
    { name: 'Profile', icon: User, href: '/profile', badge: 2 },
    { name: 'Category', icon:LayoutGrid , href: '/category' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Invites', icon: UserPlus, href: '/invites' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="w-64 h-full flex flex-col border-r border-white/10  backdrop-blur-md relative z-20">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-white to-gray-400 flex items-center justify-center text-black font-bold text-xl leading-none">
           <Image
      src="/logo.png"   
      alt="logo"
      width={32}
      height={32}
      className="object-cover"
    />
        </div>
        <span className="text-xl font-semibold tracking-wide">If</span>
      </div>

      {/* User Profile Snippet */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
          alt="Jesica Lambor"
          className="w-12 h-12 rounded-full border border-white/20 object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm">Jesica Lambor</h3>
          <p className="text-xs text-white/50">jesica@email.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
              item.active 
                ? 'text-[#FF8B66] font-medium' 
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className={`flex items-center gap-3 ${item.active ? 'border-l-2 border-[#FF8B66] -ml-4 pl-[14px]' : ''}`}>
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
            {item.badge && (
              <span className="bg-[#FF4545] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
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
