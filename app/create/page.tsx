"use client"

import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeForm } from "@/components/resume-form"

export default function CreateResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 max-w-4xl min-h-[calc(100vh-4rem)]">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40 pb-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="-ml-3 h-8 w-8 text-muted-foreground">
            <Link href="/templates"><ArrowLeft className="h-5 w-5" /></Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">New Resume Data</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your master resume information below.</p>
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" asChild className="flex-1 md:flex-none">
            <Link href="/optimize">Save & Add JD</Link>
          </Button>
          <Button className="flex-1 md:flex-none" asChild>
            <Link href="/resumes">
              <Save className="mr-2 h-4 w-4" /> Save
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-muted/10 rounded-xl p-1 md:p-6 border border-border/40">
        <ResumeForm />
      </div>
    </div>
  )
}
