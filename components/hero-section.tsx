"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { BRAND_NAME } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <Shield className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            AI-Powered Deepfake Detection
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] mb-8">
          <span className="text-foreground">See through</span>
          <br />
          <span className="text-muted-foreground">the deception.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {BRAND_NAME} is an AI-powered system designed to detect manipulated images and deepfakes.
          Using TensorFlow Lite for optimized inference and a FastAPI backend, the platform analyzes
          visual artifacts and inconsistencies to help identify synthetic media quickly and reliably.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
            onClick={() =>
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Try Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
          />
        </div>
      </motion.div>
    </section>
  )
}
