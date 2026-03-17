import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-full flex text-white overflow-hidden bg-[#151733]">
      {/* Background Image */}
      <div className="bg-img absolute inset-0 -z-30 bg-cover bg-left bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-black/40" />

      {/* Bottom gradient glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent via-transparent to-[#ff6a3d]/20" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 w-full overflow-y-auto">
        <TopNav />
        <main className="flex-1 p-6 md:px-8 md:pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}
