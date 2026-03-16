import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DemoSection } from "@/components/demo-section"
import { TechSection } from "@/components/tech-section"
import { GithubSection } from "@/components/github-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TechSection />
      <GithubSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
