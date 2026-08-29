import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold">BizMind AI</h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Your AI-powered business assistant.
        </p>
      </div>

      <Link href="/dashboard">
        <Button>Enter Dashboard</Button>
      </Link>
    </main>
  );
}