import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function CreateNewPasswordPage() {
  return (
    <AuthWrapper>
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/logo.png"  
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold mb-1">Create new password</h1>
        <p className="text-white/70 leading-relaxed text-sm">
          Your new password must be different from previous used passwords.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <div>
          <Input 
            label="Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-[10px] text-white/40 mt-1.5 ml-1">
            Must be at least 8 characters
          </p>
        </div>

        <div>
          <Input 
            label="Confirm Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-[10px] text-white/40 mt-1.5 ml-1">
            Both Passwords must match
          </p>
        </div>
        
        <Button variant="primary" type="button" className="w-full shadow-lg mt-2">
          Reset Password
        </Button>
      </form>
    </AuthWrapper>
  );
}