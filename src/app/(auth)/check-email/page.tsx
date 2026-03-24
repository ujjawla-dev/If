import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function CheckEmailPage() {
  return (
    <AuthWrapper>
      {/* Envelope Illustration */}
      <div className="mb-6 w-full flex justify-center scale-90">
        <div className="relative w-48 h-36">
          {/* Back interior */}
          <div className="absolute inset-0 bg-[#e6dbbd] rounded-xl shadow-lg" />
          
          {/* Letter / Paper sticking out */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-8 w-32 h-28 bg-[#fffaf0] rounded-lg shadow-sm z-10 flex items-center justify-center pt-2">
            <div className="w-16 h-16 bg-[#00ba00] rounded-full flex items-center justify-center text-white shadow-md">
              <Check strokeWidth={5} size={36} />
            </div>
          </div>
          
          <div className="absolute bottom-0 w-full h-full z-20">
            <svg viewBox="0 0 160 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              {/* Left flap */}
              <path d="M0 128V20C0 12 8 6 15 10L80 55L0 128Z" fill="#fca800" />
              
              {/* Right flap */}
              <path d="M160 128V20C160 12 152 6 145 10L80 55L160 128Z" fill="#ffb703" />
              
              {/* Bottom flap */}
              <path d="M0 128L80 65L160 128H0Z" fill="#ffc300" />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-center mb-6 px-2">
        <h1 className="text-2xl font-bold mb-2 tracking-tight">Check your email</h1>
        <p className="text-white/70 leading-relaxed text-[13px]">
          Please check your inbox and click the received link to reset your password.
        </p>
      </div>

      {/* Retry / Note */}
      <div className="mb-6 text-center text-xs px-4">
        <p className="text-white/50 leading-loose">
          Did not receive the email? Check your spam folder,<br />
          or <button type="button" className="text-theme-primary font-semibold hover:underline">try another email address.</button>
        </p>
      </div>

      {/* Done Button */}
      <div className="w-full">
        <Button variant="outline" type="button" className="w-full border-white/20 hover:bg-white/10 text-white">
          Done
        </Button>
      </div>
    </AuthWrapper>
  );
}