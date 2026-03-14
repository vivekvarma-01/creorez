import { TemplateCard } from "@/components/template-card"

export default function TemplatesPage() {
  const dummyTemplates = [
    {
      id: "tpl-1",
      title: "Resume Style 1",
      isAvailable: true,
    },
    {
      id: "tpl-2",
      title: "Clean Minimal",
      isAvailable: false,
    },
    {
      id: "tpl-3",
      title: "Executive Modern",
      isAvailable: false,
    },
    {
      id: "tpl-4",
      title: "Creative Tech",
      isAvailable: false,
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 max-w-screen-xl min-h-[calc(100vh-4rem)]">
      <div className="mb-8 border-b border-border/40 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Choose a Template</h1>
        <p className="text-muted-foreground mt-2">Select a LaTeX design as the foundation for your new resume.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            title={template.title}
            isAvailable={template.isAvailable}
          />
        ))}
      </div>
    </div>
  )
}
