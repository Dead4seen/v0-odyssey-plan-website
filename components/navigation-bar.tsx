"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "The Self", href: "#the-self" },
  { label: "The Pragmatist", href: "#pragmatist" },
  { label: "The Paths", href: "#paths" },
  { label: "Reflection", href: "#reflection" },
]

export function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          ODYSSEY
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors relative",
                activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
