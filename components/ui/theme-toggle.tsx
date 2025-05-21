"use client"

import { Sun, Moon, ArrowUp } from "lucide-react"

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}

const ThemeToggle = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted">
        <button className="bg-blue-700 mr-3 rounded-full p-2 text-white" aria-label="Light mode">
          <Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Light mode</span>
        </button>

        <button type="button" onClick={handleScrollTop} aria-label="Scroll to top">
          <ArrowUp className="h-3 w-3" />
          <span className="sr-only">Scroll to top</span>
        </button>

        <button className="bg-gray-200 ml-3 rounded-full p-2 text-gray-700" aria-label="Dark mode">
          <Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Dark mode</span>
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
