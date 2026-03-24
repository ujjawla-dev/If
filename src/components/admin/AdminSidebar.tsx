"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Layers, MessageSquareQuote, HelpCircle, FileText, ChevronRight, LogOut, UserPlus, Bell } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/admin-dashboard' },
  { name: 'User Management', icon: Users, href: '/admin-dashboard/users' },
  { name: 'Category Management', icon: Layers, href: '/admin-dashboard/categories' },
  { name: 'Question/ Answers', icon: MessageSquareQuote, href: '/admin-dashboard/qa' },
  { name: 'Customer Support', icon: HelpCircle, href: '/admin-dashboard/support' },
  { name: 'Reports', icon: FileText, href: '/admin-dashboard/reports' },
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`
      fixed inset-y-0 left-0 w-60 h-full flex flex-col border-r border-white/10 backdrop-blur-md z-40 transition-transform duration-300 transform lg:relative lg:translate-x-0
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
      <div className="p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-xl leading-none">
           <img src="/logo.png" alt="logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-xl font-semibold tracking-wide text-white">If</span>
      </div>

      {/* User Profile Snippet */}
      <div className="px-6 mb-4 flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
          alt="Admin"
          className="w-12 h-12 rounded-full border border-white/20 object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm text-white">Admin User</h3>
          <p className="text-xs text-white/50">admin@email.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto sidebar-scroll">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin-dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors text-sm ${
                isActive 
                  ? 'text-theme-primary-light font-medium bg-white/5' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`flex items-center gap-3 ${isActive ? 'border-l-2 border-theme-primary-light -ml-4 pl-[14px]' : ''}`}>
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-1 border-t border-white/10">
        <button className="flex items-center gap-3 px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 w-full rounded-xl transition-colors text-sm text-left">
          <UserPlus className="w-5 h-5" />
          <span>Invite Team</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 text-white/70 hover:text-theme-danger hover:bg-white/5 w-full rounded-xl transition-colors mt-2 text-sm text-left">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
