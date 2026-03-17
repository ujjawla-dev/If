import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-white/80">
          Login and start manage your account
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6 w-full max-w-sm">
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
        <Button variant="primary" type="button" className="mt-2">
          Log In
        </Button>

        {/* Register */}
        <div className="pt-6 text-center">
          <span className="text-white/70 text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#E6663E] hover:underline"
            >
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}