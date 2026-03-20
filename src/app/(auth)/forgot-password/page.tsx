import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper>
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Reset password</h1>
        <p className="text-white/70 text-sm leading-relaxed">
          Enter the email associated with your account and we'll send an email with instructions to reset your password.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6">
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email address" 
        />

        <Button variant="primary" type="button" className="w-full mt-2 shadow-lg">
          Send Instructions
        </Button>

        <div className="text-center mt-6">
          <Link href="/login" className="text-[#E6663E] text-sm font-medium hover:underline flex items-center justify-center gap-2">
            Back to Log In
          </Link>
        </div>
      </form>
    </AuthWrapper>
  );
}