"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function AboutTheDeveloper() {
  return (
    <>
      {/* ✅ Navbar added */}
      <Navbar />

      <main className="min-h-screen px-6 py-32">
        <div className="max-w-5xl mx-auto">

          {/* ✅ Back Button */}
          <div className="mb-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4">
              About the Developers
            </p>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6">
              Meet the developers behind
              <br />
              <span className="text-muted-foreground">TRUTHLENS.AI</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              TRUTHLENS.AI is a deepfake detection project built using artificial
              intelligence techniques to identify manipulated images and synthetic
              media.
            </p>
          </motion.div>

          {/* Developers */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Developer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card/50 text-center hover:bg-card/70 transition"
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/atharva.jpg"
                  alt="Atharva Pathak"
                  className="w-28 h-28 rounded-full object-cover border border-border"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Atharva Pathak
              </h2>

              <p className="text-sm text-accent mb-4">
                Developer 1 • TRUTHLENS.AI
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Worked on designing and building the AI-powered deepfake detection
                system, including model development, system architecture, and deployment.
              </p>

              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="https://github.com/athaxva"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/atharvappathak/"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Developer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-card/50 text-center hover:bg-card/70 transition"
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/harsh.jpg"
                  alt="Harsh Dharnidharka"
                  className="w-28 h-28 rounded-full object-cover border border-border"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Harsh Dharnidharka
              </h2>

              <p className="text-sm text-accent mb-4">
                Developer 2 • TRUTHLENS.AI
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Collaborated on the design and implementation of the deepfake detection
                system, contributing to backend development, AI model integration,
                and deployment.
              </p>

              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="https://github.com/Harsh251005/"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/harsh-dharnidharka/"
                  target="_blank"
                  className="underline hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </main>
    </>
  )
}
