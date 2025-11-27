"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const insights = [
  {
    title: "The Observer",
    content:
      "No matter which path that I choose, there is a coherent theme among all of them, whether building my own defense equipment supply (Path 1), restructuring a family business model while being an investor (Path 2), I will always be an observer, who looks for deciphering, comprehension and optimisation.",
  },
  {
    title: "Society & Sovereignty",
    content:
      "In Path 1, 'Society' encompasses not only the people on the street but also the Social Structure that needs to be protected from external invasion (Sovereignty) and internal corruption.",
  },
  {
    title: "Machines & Data Systems",
    content:
      "In Path 2, Machines encompass not only physical entities but also Data Systems. Hence, mastering ERP/AI is the way to run the business machine most smoothly in the future economy if a business wants to advance.",
  },
  {
    title: "The Balance",
    content:
      "I want to prove that a cool head (Thinker) can completely go hand in hand with a warm heart (Universalism).",
  },
]

export function ReflectionSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="reflection" className="py-32 px-6 bg-card relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/winding-mountain-road-from-above-aerial-view-minim.jpg')`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">04</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">Reflection</h2>
          <div className="w-24 h-px bg-primary mb-12" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - Main reflection */}
          <div
            className={cn(
              "lg:col-span-7 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-12">
              "I often feel <span className="text-primary">burdened</span> by the conflict between the fighting instinct
              of Enneagram 8 and the desire for peace of Enneagram 9."
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-8">
              As an INTJ, I am obsessed with optimising systems. But I have come to realise that the most complex,
              flawed, and uncontrollable systems are Humans and Social Structures. Hence, I am often led to doubt
              whether integrity, honesty, and equality still matter in the current materialistic society.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Without understanding the 'algorithm' of happiness, all achievements in Paths 1 and 2 are meaningless. My
              goal is not to become a hermit monk but to bring the 'data' collected from this real life back to the
              civilised world. Understanding human pain and happiness will serve as the ethical compass that helps me
              make more humane decisions when I become a leader in Paths 1 and 2.
            </p>

            <div className="p-8 border border-border mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Guest Speaker Reflection</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Looking back at the Guest Speaker's session, I do agree that Networking and Opportunity can be very
                coincidentally calculated. But it is the result of deliberate effort that meets the right moment and
                attracts the right people in the right place.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Yet, it would be insufficient if the individual trying to network does not have time to reflect and
                discover their inner self profoundly, to understand what their inner compass is urging them to do or to
                develop their own specialties to bring to the table.
              </p>
            </div>

            <div className="p-8 bg-secondary/20 border-l-2 border-primary">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Looking Outward</p>
              <p className="text-muted-foreground leading-relaxed">
                In contrast, looking outwards is as crucial in figuring out your own abilities as I cannot determine
                what I like without observing how people behave in different job positions and imagining myself in that
                role for one day. This is what "go out and see" applies to me.
              </p>
            </div>
          </div>

          {/* Right - Insight cards */}
          <div
            className={cn(
              "lg:col-span-5 space-y-6 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            {insights.map((insight, index) => (
              <div
                key={insight.title}
                className={cn(
                  "p-6 border border-border hover:border-primary/50 transition-all",
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                )}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <h4 className="text-primary text-sm font-medium mb-3">{insight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{insight.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final statement */}
        <div
          className={cn(
            "mt-24 text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Final Thought</p>
          <p className="font-serif text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Finally, learning agility and developing a mindfulness leadership mindset, being mindful of my attitude,
            communication styles, emotions, and thoughts, are the core aspects that I have developed throughout the
            three versions of my Odyssey plan.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Without it, I would not have been able to integrate all the elements of nearly 10 test results (some outside
            of the requirement but powerfully relevant to me) into this comprehensive yet concise plan for future paths.
          </p>
        </div>
      </div>
    </section>
  )
}
