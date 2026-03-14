import Link from "next/link"
import { Button } from "./ui/button"

interface TemplateCardProps {
  id: string
  title: string
  isAvailable: boolean
  imageUrl?: string
}

export function TemplateCard({ id, title, isAvailable, imageUrl }: TemplateCardProps) {
  return (
    <div className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all ${isAvailable ? 'hover:shadow-md' : 'opacity-70 grayscale'}`}>
      <div className="aspect-[1/1.4] bg-muted/30 border-b border-border p-4 flex items-center justify-center">
        {imageUrl ? (
          <div className="w-full h-full bg-cover bg-center rounded drop-shadow-sm border border-border/50" style={{ backgroundImage: `url(${imageUrl})` }} />
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <div className="w-16 h-20 bg-background border border-border rounded shadow-sm mb-3"></div>
            <span className="text-xs font-medium">Preview Unavailable</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">
             {isAvailable ? "Professional LaTeX Design" : "Coming Soon"}
          </p>
        </div>
        {isAvailable ? (
          <Button className="w-full shadow-sm" asChild>
            <Link href="/create">Use Template</Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Not Available
          </Button>
        )}
      </div>
      {!isAvailable && (
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
          Soon
        </div>
      )}
    </div>
  )
}
