import { HeroSection } from "@/components/hero-section"
import { NavigationBar } from "@/components/navigation-bar"
import { TheSelfSection } from "@/components/the-self-section"
import { ThePragmatistSection } from "@/components/the-pragmatist-section"
import { PathsSection } from "@/components/paths-section"
import { ReflectionSection } from "@/components/reflection-section"
import { Footer } from "@/components/footer"

export default function OdysseyPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <TheSelfSection />
      <ThePragmatistSection />
      <PathsSection />
      <ReflectionSection />
      <Footer />
    </main>
  )
}
