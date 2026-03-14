"use client"

import Link from "next/link"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Download, FileText, Code } from "lucide-react"
import { useState } from "react"

export default function LatexEditorPage() {
  const [latexCode, setLatexCode] = useState(`\\documentclass[a4paper,10pt]{article}
\\usepackage{geometry}
\\geometry{a4paper, margin=1in}

\\begin{document}
\\centerline{\\Huge \\bf John Doe}
\\vspace{0.2em}
\\centerline{john@example.com $\\cdot$ +1 (555) 000-0000}

\\section*{Skills}
React, TypeScript, Next.js, Tailwind CSS

\\section*{Experience}
\\textbf{Senior Frontend Engineer} \\hfill \\textbf{2022 - Present} \\\\
Tech Corp \\\\
Developed scalable web applications...
\\end{document}
`)

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
      {/* Top Toolbar */}
      <div className="h-14 border-b border-border bg-card flex justify-between items-center px-4 shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/resumes"><ArrowLeft className="mr-2 h-4 w-4" /> Back</Link>
          </Button>
          <div className="h-4 w-px bg-border hidden sm:block"></div>
          <h2 className="font-medium flex items-center gap-2 text-sm sm:text-base">
            <FileText className="h-4 w-4 text-primary" />
            <span className="hidden sm:inline">Software Engineer Resume</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
             <Link href="/resumes">
               <Save className="mr-2 h-4 w-4" /> Save
             </Link>
          </Button>
          <Button size="sm" className="shadow-md">
             <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>

      {/* Split Panels */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        {/* Left Panel - Monaco LaTeX Code Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-border flex flex-col bg-[#1E1E1E]">
          <div className="h-10 bg-[#252526] flex items-center px-4 border-b border-[#3c3c3c] shrink-0">
            <span className="text-[#cccccc] text-xs font-mono flex items-center gap-2">
              <Code className="h-3.5 w-3.5" /> resume.tex
            </span>
          </div>
          <div className="flex-1 custom-scrollbar">
            <Editor
              height="100%"
              defaultLanguage="latex"
              theme="vs-dark"
              value={latexCode}
              onChange={(value) => setLatexCode(value || "")}
              options={{
                minimap: { enabled: false },
                wordWrap: "on",
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                padding: { top: 16 }
              }}
            />
          </div>
        </div>

        {/* Right Panel - Rendered PDF Preview */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-zinc-800 flex flex-col relative">
          <div className="h-10 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-4 shrink-0">
            <span className="text-zinc-400 text-xs font-medium">Resume Preview</span>
            <span className="flex h-5 items-center rounded bg-zinc-800 px-2 text-[10px] font-medium text-zinc-300 border border-zinc-700">
              Live Rendering
            </span>
          </div>
          
          <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center custom-scrollbar">
            {/* Mock A4 Paper PDF Preview */}
            <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-10 flex flex-col shrink-0">
              <header className="text-center border-b pb-4 mb-4">
                <h1 className="text-3xl font-bold font-serif text-black uppercase tracking-tight">John Doe</h1>
                <div className="text-sm mt-2 text-gray-600 flex justify-center gap-3">
                  <span>john@example.com</span>
                  <span>•</span>
                  <span>+1 (555) 000-0000</span>
                </div>
              </header>
              <section className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wider text-black">Skills</h2>
                <div className="text-sm text-gray-800">
                  <span className="font-semibold text-black">Technical:</span> React, TypeScript, Next.js, Tailwind CSS
                </div>
              </section>
              <section className="mb-4 mt-6">
                 <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase tracking-wider text-black">Experience</h2>
                 <div className="flex justify-between items-baseline mb-1">
                   <h3 className="font-bold text-gray-900">Senior Frontend Engineer</h3>
                   <span className="text-sm font-semibold text-gray-700">2022 - Present</span>
                 </div>
                 <div className="text-sm text-gray-800 mb-2 font-medium">Tech Corp</div>
                 <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                   <li>Developed scalable web applications...</li>
                   <li className="invisible h-3 bg-gray-200 rounded w-5/6"></li>
                 </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
