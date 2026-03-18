import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function RegisterPage() {
  return (
    <AuthWrapper>
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="flex justify-center mb-2">
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
            <h1 className="text-3xl font-bold mb-2">Join with us!</h1>
            <p className="text-white/80 leading-relaxed text-sm">
              Securely store your will and important messages for loved ones.
            </p>
          </div>

          <form className="flex flex-col gap-5">

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />

            <div>
              <Input
                label="Phone No."
                type="tel"
                placeholder="Enter your phone number"
                // className="mb-1"
              />
              <div className="text-right">
                <button
                  type="button"
                  className="text-[#E6663E] text-xs hover:underline mt-1"
                >
                  Verify Phone No.
                </button>
              </div>
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

            <div className="mt-2 text-sm text-white/80">
              By pressing "Register Now" button you agree to our{" "}
              <Link href="/terms" className="text-[#E6663E] hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#E6663E] hover:underline">
                Privacy Policy
              </Link>.
            </div>

            <div className="text-center text-sm">
              <span className="text-white/70">
                Already have an account?{" "}
                <Link href="/login" className="text-[#E6663E] hover:underline">
                  Log In
                </Link>
              </span>
            </div>

            <Button
              variant="primary"
              type="button"
              className="w-full shadow-lg mb-9"
            >
              Create Account
            </Button>
          </form>

        </div>
      </div>
    </AuthWrapper>
  );
}