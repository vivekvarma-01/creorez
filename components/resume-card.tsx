import Link from "next/link"
import { FileText, Edit, Copy, Download, Trash2 } from "lucide-react"
import { Button } from "./ui/button"

interface ResumeCardProps {
  id: string
  title: string
  template: string
  lastUpdated: string
}

export function ResumeCard({ id, title, template, lastUpdated }: ResumeCardProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">Template: {template}</p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: {lastUpdated}</div>
      </div>
      <div className="bg-muted/50 p-3 flex flex-wrap gap-2 border-t border-border">
        <Button variant="secondary" size="sm" asChild className="flex-1 min-w-[80px]">
          <Link href={`/editor`}>
            <Edit className="mr-2 h-3.5 w-3.5" /> Edit
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild className="flex-1 min-w-[80px]">
          <Link href={`/optimize`}>
            <Copy className="mr-2 h-3.5 w-3.5" /> Optimize JD
          </Link>
        </Button>
        <div className="flex w-full gap-2 mt-1">
          <Button variant="ghost" size="sm" className="flex-1 text-xs" asChild>
             <Link href={`/editor`}>Preview</Link>
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-xs">
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}
