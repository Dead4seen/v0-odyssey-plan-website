"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Shield, TrendingUp } from "lucide-react"

const pathA = {
  title: "Defence Contractor & Strategist",
  challenge: "Protect Society From Crime and Solve New Challenges Through Entrepreneurship",
  icon: Shield,
  image: "/military-technology-defense-equipment-dark-minimal.jpg",
  intro:
    "From an INTJ/Thinker perspective, it's fascinating to analyse the power dynamics in the chess game of national security, especially regarding military strength and its influence on various entities. Simultaneously, my Universalist side seeks to enhance the country's sovereignty through military modernisation while ensuring that public sector employees earn better wages to support their families, thereby indirectly reducing corruption in the socio-political system.",
  recognition:
    "I recognise that Path A, while intriguing, poses significant challenges due to my lack of preparation in metallurgy and engineering when pursuing a degree in Business Administration.",
  questions: [
    {
      q: "Competence",
      a: "How can a business graduate effectively find, build, and lead a cross-functional team to realise this vision?",
    },
    {
      q: "Penetration",
      a: "How can an outsider enter the closed networks of this sensitive industry?",
    },
    {
      q: "Ethical",
      a: "How can I reconcile commercial profitability with universalism's focus on preserving lives and ethical standards?",
    },
  ],
  timeline: [
    {
      year: "Year 1",
      title: "Foundation Building",
      goal: "Complete my internship and secure a technical role in a larger organisation, targeting positions like Procurement/Supply Chain Specialist at firms known for precision, such as Viettel High Tech. I will also participate in online courses in systems engineering to establish a solid foundation of knowledge.",
    },
    {
      year: "Year 2",
      title: "Technical Leadership",
      goal: "Aim for a Team Leader role in the importation of dual-use equipment, with an emphasis on the safe handling of delicate products. To prepare for upcoming research and development opportunities, studying foundational metallurgy and materials science is a must.",
    },
    {
      year: "Year 3",
      title: "R&D Project Management",
      goal: "Transition into a project manager role, spearheading a dual-use research project. This phase will emphasise resource allocation from R&D to prototype testing. I will also increase my participation in Defence exhibitions and conferences to forge connections with potential mentors and sponsors.",
    },
    {
      year: "Year 4",
      title: "Consultancy & Impact",
      goal: "Undertake consultancy projects to help public units achieve their logistics goals efficiently. Concurrently, I will explore opportunities to increase employee wages by 20-30% while maintaining business profitability in the defence sector.",
    },
    {
      year: "Year 5",
      title: "Founder & Entrepreneur",
      goal: "Become the Founder of a Defence Contractor, focusing on Human Augmentation Logistics projects to enhance soldier survivability in future warfare, to secure initial contracts to supply proven-combat-effective personal protection equipment to both military and civilian markets.",
    },
  ],
}

const pathB = {
  title: "Business Reformer & Investor",
  challenge: "Solve New Challenges Through Entrepreneurship and Master Tools And Machines",
  icon: TrendingUp,
  image: "/modern-office-data-analytics-screens-dark-minimal-.jpg",
  intro:
    "Path B emerges as a more secure option, allowing me to inherit my family's business and engage in intrapreneurship to revitalise operations, providing a sense of stability and control.",
  recognition:
    "Consequently, Path B emerges as a more secure option, allowing me to inherit my family's business and engage in intrapreneurship to revitalise operations, providing a sense of stability and control.",
  questions: [
    {
      q: "Change Management",
      a: "How can I integrate digital technology (ERP/AI Agent) into family businesses without clashing with existing management culture?",
    },
    {
      q: "Capital Efficiency",
      a: "How can I leverage my personal investment knowledge to grow investment capital exponentially?",
    },
    {
      q: "Personal Fulfilment",
      a: "Is financial security sufficient to satisfy my intellectual curiosity (Thinker/INTJ) and adventurous spirit (Enneagram type 8)?",
    },
  ],
  timeline: [
    {
      year: "Year 1",
      title: "Foundation & Immersion",
      goal: "Complete my current internship and pursue a technical role in a larger organisation before diving into my family's business operations, even in labour-intensive roles, to identify system pain points.",
    },
    {
      year: "Year 2",
      title: "Network Building",
      goal: "Network with the family's partners and suppliers to establish a legacy presence and begin small-scale optimisation initiatives to generate early results.",
    },
    {
      year: "Year 3-4",
      title: "Digital Transformation",
      goal: "With increasing insights and capital gained, I can now explore investment opportunities to enhance operational efficiency while migrating data digitally, leading to the creation of our first Standard Operating Procedure (SOP).",
    },
    {
      year: "Year 5",
      title: "Autonomous Operations",
      goal: "The business will function more autonomously, enabling me to reinvest profits and explore new ventures, such as pursuing Angel Investment opportunities.",
    },
  ],
}

export function PathsSection() {
  const [activePath, setActivePath] = useState<"A" | "B">("A")
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const currentPath = activePath === "A" ? pathA : pathB
  const Icon = currentPath.icon

  return (
    <section id="paths" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">03</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">The Paths</h2>
          <div className="w-24 h-px bg-primary mb-12" />
        </div>

        {/* Path Selector */}
        <div
          className={cn(
            "flex gap-4 mb-12 transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <button
            onClick={() => setActivePath("A")}
            className={cn(
              "flex-1 p-6 border transition-all text-left",
              activePath === "A" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground",
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield className={cn("w-5 h-5", activePath === "A" ? "text-primary" : "text-muted-foreground")} />
              <span
                className={cn(
                  "text-xs tracking-[0.2em] uppercase",
                  activePath === "A" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Path A
              </span>
            </div>
            <p className={cn("text-lg", activePath === "A" ? "text-foreground" : "text-muted-foreground")}>
              Defence Contractor & Strategist
            </p>
          </button>

          <button
            onClick={() => setActivePath("B")}
            className={cn(
              "flex-1 p-6 border transition-all text-left",
              activePath === "B" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground",
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className={cn("w-5 h-5", activePath === "B" ? "text-primary" : "text-muted-foreground")} />
              <span
                className={cn(
                  "text-xs tracking-[0.2em] uppercase",
                  activePath === "B" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Path B
              </span>
            </div>
            <p className={cn("text-lg", activePath === "B" ? "text-foreground" : "text-muted-foreground")}>
              Business Reformer & Investor
            </p>
          </button>
        </div>

        {/* Path Content */}
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 transition-all duration-500",
            isInView ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Left - Image and Challenge */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden mb-8">
              <img
                src={currentPath.image || "/placeholder.svg"}
                alt={currentPath.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{currentPath.title}</h3>
              </div>
            </div>

            <div className="p-6 border border-border mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">The Challenge</p>
              <p className="text-foreground leading-relaxed">{currentPath.challenge}</p>
            </div>

            <div className="p-6 bg-secondary/20 border-l-2 border-primary">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Perspective</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{currentPath.intro}</p>
            </div>
          </div>

          {/* Right - Questions and Timeline */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Critical Questions</h4>
              <div className="space-y-4">
                {currentPath.questions.map((item) => (
                  <div key={item.q} className="p-4 bg-secondary/20 border-l-2 border-primary/50">
                    <p className="text-primary text-sm font-medium mb-2">{item.q}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Five-Year Roadmap</h4>
              <div className="space-y-6">
                {currentPath.timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                      {index < currentPath.timeline.length - 1 && (
                        <div className="w-px h-full bg-border min-h-[80px]" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <p className="text-primary text-sm font-medium">{item.year}</p>
                        <p className="text-foreground text-sm">{item.title}</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
