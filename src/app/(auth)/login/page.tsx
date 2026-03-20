import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function LoginPage() {
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
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-white/70 text-sm">
          Login and start manage your account
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5 w-full">
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email address" 
        />
        
        <Input 
          label="Password" 
          type="password" 
          placeholder="Type your password" 
        />
        
         {/* Forgot password */}
          <div className="text-center -mt-2 mb-2">
            <span className="text-white/70 text-sm">
              Forget your password?{" "}
              <Link
                href="/forgot-password"
                className="text-[#273279] hover:underline"
              >
                Reset Password
              </Link>
            </span>
          </div>

        {/* Login button */}
        <Button variant="primary" type="button" className="mt-2 w-full shadow-lg">
          Log In
        </Button>

        {/* Register */}
        <div className="pt-6 text-center">
          <span className="text-white/60 text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#E6663E] font-medium hover:underline"
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </AuthWrapper>
  );
}