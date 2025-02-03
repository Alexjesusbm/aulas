import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Home Page</h1>
      <p>
        <Button>
          <Link href="/authh/sign-in">Go to SignIn</Link>
        </Button>
      </p>
      <Toaster />
    </div>
    
  );
}
