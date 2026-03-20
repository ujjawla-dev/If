"use client";
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex text-white overflow-hidden">
      {/* Background Image */}
      <div className="bg-img absolute inset-0 -z-30 bg-cover bg-left bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-black/10" />

      {/* Bottom gradient glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent via-transparent to-[#ff6a3d]/20" />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 w-full overflow-y-auto font-inter bg-white/10 backdrop-blur-xl">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
