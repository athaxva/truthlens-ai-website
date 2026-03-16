"use client"

import { motion } from "framer-motion"

export default function AboutTheDeveloper() {
  return (
    <main className="min-h-screen px-6 py-32">
      <div className="max-w-5xl mx-auto">

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
            className="p-8 rounded-2xl border border-border bg-card/50 text-center"
          >

            {/* Photo */}
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
              Developer • TRUTHLENS.AI
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Developer of TRUTHLENS.AI who worked on designing and building the
              AI-powered deepfake detection system. Contributed to model
              development, system architecture, and deployment of the platform
              for detecting manipulated media.
            </p>

            <div className="flex justify-center gap-4 text-sm">
              <a
                href="https://github.com/athaxva"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/atharvappathak/"
                target="_blank"
                className="underline"
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
            className="p-8 rounded-2xl border border-border bg-card/50 text-center"
          >

            {/* Photo */}
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
              Developer • TRUTHLENS.AI
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Developer of TRUTHLENS.AI who collaborated on the design and
              implementation of the deepfake detection system, contributing to
              backend development, AI model integration, and deployment of the
              platform.
            </p>

            <div className="flex justify-center gap-4 text-sm">
              <a
                href="https://github.com/Harsh251005/"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/harsh-dharnidharka/"
                target="_blank"
                className="underline"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  )
}
