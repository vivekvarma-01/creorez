import Link from "next/link"
import { ArrowLeft, Sparkles, Wand2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OptimizePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 max-w-4xl min-h-[calc(100vh-4rem)] flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4 -ml-3 text-muted-foreground hover:text-foreground">
            <Link href="/resumes">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resumes
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Optimize Resume
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Paste the job description below. Our AI will align your master resume with the role requirements.
          </p>
        </div>

        <div className="flex-1 rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-medium">Job Description</h3>
          </div>
          <div className="flex-1 p-4">
            <textarea 
              className="w-full h-full min-h-[300px] resize-y rounded-md border border-input bg-background px-4 py-3 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/60"
              placeholder="e.g. We are looking for a Senior Software Engineer with experience in Next.js, React, and building highly scalable user interfaces..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-end">
        {/* Mock Changes and Recommendations Section */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 shadow-sm overflow-hidden mb-6 hidden md:block">
           <div className="p-4 border-b border-primary/10 bg-background/50">
             <h3 className="font-medium text-primary">Changes & Recommendations</h3>
           </div>
           <div className="p-5 space-y-4">
             <div className="flex gap-3">
               <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
               <div>
                 <p className="text-sm font-medium">Highlight Next.js Experience</p>
                 <p className="text-xs text-muted-foreground mt-1">Moved Tech Innovations Inc. Next.js bullet point to the top of experience lists.</p>
               </div>
             </div>
             <div className="flex gap-3">
               <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
               <div>
                 <p className="text-sm font-medium">Keywords Match: 85%</p>
                 <p className="text-xs text-muted-foreground mt-1">Added missing keywords: TypeScript, Scalability, React Hooks.</p>
               </div>
             </div>
           </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="ghost" className="flex-1 md:flex-none" asChild>
            <Link href="/resumes">Cancel</Link>
          </Button>
          <Button size="lg" className="flex-1 md:flex-none px-8 shadow-md group" asChild>
            <Link href="/editor">
              <Wand2 className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Generate Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
