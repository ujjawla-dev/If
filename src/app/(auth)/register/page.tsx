import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function RegisterPage() {
  return (
    <AuthWrapper>
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Join with us!</h1>
        <p className="text-white/70 leading-relaxed text-sm">
          Securely store your will and important messages for loved ones.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email address"
        />

        <div className="relative">
          <Input
            label="Phone No."
            type="tel"
            placeholder="Enter your phone number"
          />
          <button
            type="button"
            className="absolute right-0 top-0 text-[#E6663E] text-[10px] font-semibold hover:underline"
          >
            Verify
          </button>
        </div>

        <Input
          label="Password"
          type="password"
          placeholder="Type your password"
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Type your password"
        />

        <div className="mt-2 text-[11px] text-white/60 leading-normal">
          By pressing "Register Now" button you agree to our{" "}
          <Link href="/terms" className="text-[#E6663E] hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#E6663E] hover:underline">
            Privacy Policy
          </Link>.
        </div>

        <Button
          variant="primary"
          type="button"
          className="w-full shadow-lg mt-2"
        >
          Create Account
        </Button>

        <div className="text-center text-sm pt-4">
          <span className="text-white/60">
            Already have an account?{" "}
            <Link href="/login" className="text-[#E6663E] font-medium hover:underline">
              Log In
            </Link>
          </span>
        </div>
      </form>
    </AuthWrapper>
  );
}