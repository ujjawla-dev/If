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
      <div className="flex justify-center mb-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold mb-1">Welcome Back!</h1>
        <p className="text-white/70 text-sm">
          Login and start manage your account
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-3 w-full">
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
                className="text-theme-secondary hover:underline"
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
              className="text-theme-primary font-medium hover:underline"
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </AuthWrapper>
  );
}