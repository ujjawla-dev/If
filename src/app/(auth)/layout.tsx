import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-full flex justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="bg-img absolute inset-0 -z-20 bg-cover bg-left bg-no-repeat"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Bottom gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#ff6a3d]/40" />

      {/* Content */}
      <div className="w-full max-w-md h-full flex flex-col p-6 relative z-10">
        <main className="flex-1 flex flex-col justify-center">
          {children}
        </main>
      </div>

    </div>
  );
}