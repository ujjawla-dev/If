import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CreateNewPasswordPage() {
  return (
    <div className="flex flex-col flex-1 h-full pt-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Create new password</h1>
        <p className="text-white/80 leading-relaxed text-sm">
          Your new password must be different from previous used passwords.
        </p>
      </div>

      <form className="flex flex-col gap-6 flex-1 h-full">
        <div>
          <Input 
            label="Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-xs text-white/50 mt-2 ml-1">Must be at least 8 characters</p>
        </div>

        <div>
          <Input 
            label="Confirm Password" 
            type="password" 
            placeholder="Type your password" 
          />
          <p className="text-xs text-white/50 mt-2 ml-1">Both password must match</p>
        </div>
        
        <div className="mt-auto pb-4">
          <Button variant="primary" type="button" className="w-full">
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
