"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-6">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dark-moody-ocean-waves-at-night-with-moonlight-ref.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">A Digital Journey Map</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-balance">
          The Odyssey of a
          <br />
          <span className="italic text-primary">System Architect</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Navigating the tension between strategic precision and human meaning.
          <br className="hidden md:block" />A young mind searching for its path.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs tracking-widest text-muted-foreground/60">
          <span>INTJ-A</span>
          <span className="text-primary">•</span>
          <span>ENNEAGRAM 8w7 / 9w1</span>
          <span className="text-primary">•</span>
          <span>THE ARCHITECT</span>
        </div>
      </div>

      <a
        href="#the-self"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}
