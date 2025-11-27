"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Briefcase, Users, TrendingUp, Globe } from "lucide-react"

const experiences = [
  { role: "Event Coordinator", icon: Briefcase, context: "Event & Tourism Industry" },
  { role: "Logistics Team Leader", icon: Users, context: "Event & Tourism Industry" },
  { role: "Event Manager", icon: TrendingUp, context: "Current Internship" },
]

const volunteerWork = [{ role: "NGO Volunteer", location: "Denmark", context: "Exchange Program" }]

export function ThePragmatistSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="pragmatist" className="py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">02</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">The Pragmatist</h2>
          <div className="w-24 h-px bg-primary mb-12" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left column */}
          <div
            className={cn(
              "lg:col-span-5 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Having worked as a <span className="text-primary">part-time employee</span>, a{" "}
              <span className="text-primary">volunteer</span>, and a{" "}
              <span className="text-primary">full-time intern</span>, I consider myself a principled pragmatist.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              My introverted intuition enables me to think deeply, identify patterns and risks early, and plan
              meticulously. This foundation helps me "Focus" and address problems swiftly, akin to sharpening a saw
              before cutting wood. While I respect established rules, I am open to flexible approaches as long as they
              align with the core values of the organisation and my personal ethics.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              This mindset has been instrumental during my current internship in the event and tourism industry, where I
              have taken on roles such as Event Coordinator, Logistics Team Leader, and Event Manager. Similarly, my
              volunteer work at different NGO positions in Denmark during my exchange program reinforced this approach.
            </p>

            <div className="relative aspect-video overflow-hidden mb-8">
              <img
                src="/chess-pieces-on-board-strategic-thinking-minimal-d.jpg"
                alt="Strategic thinking"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 border border-border mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">The Challenge</p>
              <p className="text-muted-foreground leading-relaxed">
                I find cumbersome processes that fail to resolve issues promptly particularly challenging, and I strive
                to be the <span className="text-foreground">Order and Deliverer</span> in any workplace.
              </p>
            </div>

            <div className="p-6 border border-border">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Philosophy</p>
              <p className="text-foreground italic">"I strive to be the Order and Deliverer in any workplace."</p>
            </div>
          </div>

          {/* Right column */}
          <div
            className={cn(
              "lg:col-span-7 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="relative">
              <img
                src="/person-working-at-desk-with-multiple-screens-at-ni.jpg"
                alt="Professional work"
                className="w-full aspect-[4/3] object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
            </div>

            <div className="mt-8">
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Professional Experience</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon
                  return (
                    <div
                      key={exp.role}
                      className={cn(
                        "p-6 border border-border hover:border-primary/50 transition-all",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                      )}
                      style={{ transitionDelay: `${index * 100 + 500}ms` }}
                    >
                      <Icon className="w-5 h-5 text-primary mb-4" />
                      <p className="text-sm text-foreground">{exp.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.context}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-6">
              <div className="p-6 border border-border hover:border-primary/50 transition-all">
                <Globe className="w-5 h-5 text-primary mb-4" />
                <p className="text-sm text-foreground">NGO Volunteer Positions</p>
                <p className="text-xs text-muted-foreground mt-1">Denmark Exchange Program</p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  Reinforced principled pragmatist approach through cross-cultural experience
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/30 border-l-2 border-primary">
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Financial Foundation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Additionally, I have created a small portfolio that enhances my financial, budgeting, and risk
                management skills, while also preparing me for potential unemployment.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These abilities, which represent a{" "}
                <span className="text-foreground">self-directed and secure plan</span> for creating a solid financial
                foundation, are, in my opinion, essential for navigating the uncertain yet opportune market patterns
                that lie ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
