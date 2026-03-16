"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function GithubSection() {
  return (
    <section id="github" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8">
            <Github className="w-10 h-10" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Open Source
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
            TRUTHLENS.AI is an open-source deepfake detection project. 
            Explore the code, contribute improvements, or build your own deployment using the AI model and backend infrastructure.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="text-left">
              <p className="font-mono text-sm text-muted-foreground mb-1">AtharvaPathak/TRUTHLENS.AI</p>
              <p className="font-semibold text-lg">TRUTHLENS Deepfake Detection Engine</p>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="https://github.com/AtharvaPathak/TRUTHLENS.AI" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5" />
                View Repository
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base rounded-full border-border hover:bg-card"
              asChild
            >
              <a href="https://github.com/AtharvaPathak/TRUTHLENS.AI#readme" target="_blank" rel="noopener noreferrer">
                Documentation
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}