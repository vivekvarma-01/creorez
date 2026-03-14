"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface TagInputProps {
  tags: string[]
  setTags: (tags: string[]) => void
  placeholder?: string
}

export function TagInput({ tags, setTags, placeholder = "Add a tag..." }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      const newTag = inputValue.trim()
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag])
        setInputValue("")
      }
    }
  }

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-1 text-sm text-secondary-foreground"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="text-muted-foreground hover:text-foreground focus:outline-none"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}
