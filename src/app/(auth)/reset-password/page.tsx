import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import AuthWrapper from "@/components/layout/AuthWrapper";

export default function CreateNewPasswordPage() {
  return (
    <AuthWrapper>
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Reset password</h1>
        <p className="text-white/70 leading-relaxed text-sm">
          Your new password must be different from previous used passwords.
        </p>
      </div>

      <form className="flex flex-col gap-6 w-full">
        <div>
          <Input 
            label="Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-[10px] text-white/40 mt-1.5 ml-1">Must be at least 8 characters</p>
        </div>

        <div>
          <Input 
            label="Confirm Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-[10px] text-white/40 mt-1.5 ml-1">Passwords must match</p>
        </div>
        
        <Button variant="primary" type="button" className="w-full shadow-lg mt-4">
          Reset Password
        </Button>
      </form>
    </AuthWrapper>
  );
}
