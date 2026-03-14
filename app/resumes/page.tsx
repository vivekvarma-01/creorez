import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeCard } from "@/components/resume-card"

export default function SavedResumesPage() {
  const dummyResumes = [
    {
      id: "res-1",
      title: "Software Engineer Resume",
      template: "Resume Style 1",
      lastUpdated: "2 days ago"
    },
    {
      id: "res-2",
      title: "Frontend Developer",
      template: "Resume Style 1",
      lastUpdated: "1 week ago"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 max-w-7xl min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Saved Resumes</h1>
          <p className="text-muted-foreground mt-1">Manage, edit, and optimize your LaTeX resumes.</p>
        </div>
        <Button size="lg" asChild className="shrink-0 w-full md:w-auto">
          <Link href="/templates">
            <PlusCircle className="mr-2 h-5 w-5" />
            New Resume
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 max-w-3xl">
        {dummyResumes.map((resume) => (
          <ResumeCard
            key={resume.id}
            id={resume.id}
            title={resume.title}
            template={resume.template}
            lastUpdated={resume.lastUpdated}
          />
        ))}

        {dummyResumes.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed border-border rounded-xl bg-muted/20">
            <p className="text-muted-foreground">You don't have any saved resumes yet.</p>
            <Button variant="link" asChild className="mt-2 text-primary">
              <Link href="/templates">Create your first resume</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
