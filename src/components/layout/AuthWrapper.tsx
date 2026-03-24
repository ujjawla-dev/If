import React from "react";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-full flex justify-center text-white overflow-hidden font-inter">
      {/* Background Image */}
      <div className="bg-img absolute inset-0 -z-20 bg-cover bg-left bg-no-repeat" />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content... */}
      <div className="w-full h-full flex items-center justify-center p-4 relative z-10 overflow-y-auto">
        <div className="w-full max-w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl sm:rounded-[2rem] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] my-2">
          <main className="w-full h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
