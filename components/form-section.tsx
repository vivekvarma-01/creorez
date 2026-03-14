import { PropsWithChildren } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FormSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
}

export function FormSection({
  title,
  isOpen,
  onToggle,
  children,
}: PropsWithChildren<FormSectionProps>) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
      </button>

      {isOpen && <div className="p-4 border-t border-border bg-background/50">{children}</div>}
    </div>
  )
}
