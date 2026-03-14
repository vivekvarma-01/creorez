import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div className="flex flex-col space-y-2 text-center p-6 pb-4">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                <Link href="#" className="ml-auto inline-block text-sm underline text-muted-foreground hover:text-primary">
                  Forgot your password?
                </Link>
              </div>
              <input 
                id="password" 
                type="password" 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <Button className="w-full" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
          </div>
          
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline hover:text-primary">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
