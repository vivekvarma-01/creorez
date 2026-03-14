"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FormSection } from "@/components/form-section"
import { TagInput } from "@/components/tag-input"
import { Plus } from "lucide-react"

export function ResumeForm() {
  const [openSection, setOpenSection] = useState<string>("personal")
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript", "Next.js"])

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section)
  }

  return (
    <div className="space-y-4">
      <FormSection 
        title="1. Personal Information" 
        isOpen={openSection === "personal"} 
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Full Name</label>
            <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <input type="tel" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">LinkedIn</label>
            <input type="url" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="linkedin.com/in/johndoe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">GitHub</label>
            <input type="url" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="github.com/johndoe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Portfolio/Website</label>
            <input type="url" className="w-full rounded-md border border-input px-3 py-2 text-sm bg-background" placeholder="johndoe.com" />
          </div>
        </div>
      </FormSection>

      <FormSection 
        title="2. Education" 
        isOpen={openSection === "education"} 
        onToggle={() => toggleSection("education")}
      >
        <div className="space-y-4 rounded-md border bg-background p-4 relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">University</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Harvard University" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Degree</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="B.S. Computer Science" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Field of Study</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Computer Science" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Start Date</label>
                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Aug 2018" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">End Date</label>
                <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="May 2022" />
              </div>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4 border-dashed">
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </FormSection>

      <FormSection 
        title="3. Skills" 
        isOpen={openSection === "skills"} 
        onToggle={() => toggleSection("skills")}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Programming Languages</label>
            <TagInput tags={skills.filter(s => ['React', 'TypeScript', 'Next.js'].includes(s))} setTags={() => {}} placeholder="e.g. Python, Java, C++..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Frameworks & Libraries</label>
            <TagInput tags={[]} setTags={() => {}} placeholder="e.g. React, Django, Spring Boot..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tools</label>
            <TagInput tags={[]} setTags={() => {}} placeholder="e.g. Git, Docker, AWS..." />
          </div>
        </div>
      </FormSection>

      <FormSection 
        title="4. Experience" 
        isOpen={openSection === "experience"} 
        onToggle={() => toggleSection("experience")}
      >
        <div className="space-y-4 rounded-md border bg-background p-4 relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Company</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Tech Innovations Inc." />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Role</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Senior Frontend Engineer" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Duration</label>
              <input type="text" className="w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Jan 2022 - Present" />
            </div>
          </div>
          <div className="space-y-1 mt-4">
             <label className="text-sm font-medium">Description (Bullet points)</label>
             <textarea className="w-full min-h-[100px] rounded-md border border-input px-3 py-2 text-sm" placeholder="- Developed scalable web applications using Next.js&#10;- Improved load time by 40%"></textarea>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4 border-dashed">
          <Plus className="mr-2 h-4 w-4" /> Add Experience
        </Button>
      </FormSection>

      <FormSection 
        title="5. Projects" 
        isOpen={openSection === "projects"} 
        onToggle={() => toggleSection("projects")}
      >
        <Button variant="outline" className="w-full mt-2 border-dashed">
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </FormSection>
    </div>
  )
}
