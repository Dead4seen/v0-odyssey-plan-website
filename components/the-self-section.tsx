"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const traits = [
  { label: "Self-Direction", value: "5.25", description: "Independent thought and action" },
  { label: "Security", value: "5.00", description: "Safety, stability, and order" },
  { label: "Universalism", value: "5.17", description: "Understanding and protecting all" },
]

const strengths = ["Focus Expert", "Deliverer", "Timekeeper", "Thinker", "Commander"]

const characterVirtues = ["Courageous", "Equal", "Temperate", "Integrity"]

export function TheSelfSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="the-self" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">01</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">The Self</h2>
          <div className="w-24 h-px bg-primary mb-12" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Image and quote */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="relative aspect-[4/5] mb-8 overflow-hidden">
              <img
                src="/silhouette-of-person-looking-at-city-lights-from-w.jpg"
                alt="Contemplation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="mb-8 p-6 border border-border">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">The System Architect</p>
              <p className="text-muted-foreground leading-relaxed">
                I am a System Architect who sees the Big Picture and is never satisfied with surface-level approaches.
                As an <span className="text-primary">INTJ-A (the Architect)</span> according to the Myers–Briggs Type
                Indicator, I strive for depth in all aspects of my work. My motivations and fears are influenced by my
                Enneagram types
                <span className="text-primary"> 8w7 (the Challenger, eager to command fate)</span> and
                <span className="text-primary"> 9w1 (the Peacemaker, valuing harmony and understanding)</span>, both of
                which score highly in my personality assessment.
              </p>
            </div>

            <div className="mb-8 p-6 bg-secondary/20 border-l-2 border-primary">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Assessment Frameworks</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Schwartz's value framework and CareerEdge tests have clarified my conscious awareness filter and career
                aspirations, revealing three core themes: Self-Direction (5.25), Security (5), and Universalism (5.17).
                The HIGH5 strengths test emphasises my ability to engage with the world, focusing on achieving my goals
                despite challenges, showcasing attributes of a <span className="text-foreground">Doer</span>
                —specifically, Focus Expert, Deliverer, and Timekeeper—alongside Thinker and Commander qualities.
              </p>
            </div>

            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                "My inner self is a conversation of a Strategic Architect (INTJ-Assertive/Type 8w7), motivated to
                influence my life and challenge socio-economic systems, with a Humanistic Philosopher (Type
                9w1/Universalism) dedicated to uncovering the logic of fulfilment and meaning."
              </p>
            </blockquote>
          </div>

          {/* Right column - Content */}
          <div
            className={cn(
              "space-y-12 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Duality</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-border hover:border-primary/50 transition-colors">
                  <p className="text-primary text-2xl font-serif mb-2">8w7</p>
                  <p className="text-sm text-foreground">The Challenger</p>
                  <p className="text-xs text-muted-foreground/80 mt-2">Eager to command fate</p>
                </div>
                <div className="p-6 border border-border hover:border-primary/50 transition-colors">
                  <p className="text-primary text-2xl font-serif mb-2">9w1</p>
                  <p className="text-sm text-foreground">The Peacemaker</p>
                  <p className="text-xs text-muted-foreground/80 mt-2">Valuing harmony and understanding</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Core Values (Schwartz PVQ)
              </h3>
              <div className="space-y-4">
                {traits.map((trait, index) => (
                  <div key={trait.label} className="group">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-foreground">{trait.label}</span>
                      <span className="text-primary font-mono text-sm">{trait.value}</span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isInView ? `${(Number.parseFloat(trait.value) / 6) * 100}%` : "0%",
                          transitionDelay: `${index * 200 + 500}ms`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground/60 mt-1">{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                HIGH5 Strengths (Doer Archetype)
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1 text-xs border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">VIA Character Strengths</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My VIA character strengths profile indicated that being{" "}
                {characterVirtues.map((virtue, i) => (
                  <span key={virtue}>
                    <span className="text-foreground">{virtue}</span>
                    {i < characterVirtues.length - 2 ? ", " : i === characterVirtues.length - 2 ? ", and having " : ""}
                  </span>
                ))}{" "}
                navigates me through the complexity of circumstances.
              </p>
            </div>

            <div className="p-6 border border-primary/30 bg-primary/5">
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">INTJ-A: The Architect</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As an Assertive Architect, I combine strategic vision with confident execution. This personality type
                drives me to see systems holistically while maintaining unwavering standards for excellence and depth in
                every endeavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
