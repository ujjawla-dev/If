import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import React from "react";

export default function CheckEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">

      <div className="w-full max-w-sm">

        {/* Envelope Illustration */}
        <div className="mb-10 w-full flex justify-center">
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

        {/* Heading */}
        <div className="text-center mb-8 px-2">
          <h1 className="text-3xl font-semibold mb-4 tracking-tight">Check your email</h1>
          <p className="text-white/80 leading-relaxed text-[15px]">
            Please check your inbox and click the received link<br />to reset your password.
          </p>
        </div>

        {/* Retry / Note */}
        <div className="mb-6 text-center text-[13px] px-4 font-light">
          <p className="text-white/80">
            Did not receive the email? Check your spam folder,<br />
            or <button type="button" className="text-[#E6663E] hover:underline font-normal">try another email address.</button>
          </p>
        </div>

        {/* Done Button */}
        <div className="w-full">
          <Button variant="outline" type="button" className="w-full">
            Done
          </Button>
        </div>

      </div>
    </div>
  );
}