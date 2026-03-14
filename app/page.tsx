import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Build ATS-Ready LaTeX Resumes <span className="text-primary">with AI</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create a master resume and optimize it instantly for any job description. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <span className="flex-1 w-full sm:w-auto flex justify-end">
                <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground" asChild>
                  <Link href="/templates">New Resume</Link>
                </Button>
              </span>
              <span className="flex-1 w-full sm:w-auto flex justify-start">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base shadow-sm" asChild>
                  <Link href="/resumes">Update Resume</Link>
                </Button>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50 border-t border-border/40 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">ATS Optimized</h3>
              <p className="text-sm text-muted-foreground">Formats that pass applicant tracking systems instantly.</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">LaTeX Quality</h3>
              <p className="text-sm text-muted-foreground">Professional typography and clean layouts standard.</p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI Job Matching</h3>
              <p className="text-sm text-muted-foreground">Tailor your experience to any job description.</p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Multiple Versions</h3>
              <p className="text-sm text-muted-foreground">Manage templates and iterations in one place.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t border-border flex items-center justify-center">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2026 AI LaTeX Builder. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
             <Link href="#" className="hover:underline">About</Link>
             <Link href="#" className="hover:underline">Contact</Link>
             <Link href="#" className="hover:underline">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
