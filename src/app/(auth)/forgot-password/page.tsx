import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper>
      <div className="flex flex-col items-center w-full">
        
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold mb-2">Reset password</h1>
            <p className="text-white/80 text-sm leading-relaxed">
              Enter the email associated with your account and we'll send an email with instructions to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <Input 
              label="Email" 
              type="email" 
              placeholder="Enter your email address" 
            />

            <Button variant="primary" type="button" className="w-full mt-4">
              Send
            </Button>
          </form>

        </div>
      </div>
    </AuthWrapper>
  );
}