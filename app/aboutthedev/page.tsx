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
            Meet the team behind
            <br />
            <span className="text-muted-foreground">TRUTHLENS.AI</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            TRUTHLENS.AI is built by developers focused on AI, security,
            and detecting manipulated media using machine learning.
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
            className="p-8 rounded-2xl border border-border bg-card/50"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Atharva Pathak
            </h2>

            <p className="text-sm text-accent mb-4">
              Founder • AI Security Research
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Atharva Pathak is the creator of TRUTHLENS.AI, an AI-powered
              deepfake detection system focused on identifying manipulated
              images. His work focuses on AI safety, security research,
              and building practical tools to detect synthetic media.
            </p>

            <div className="flex gap-4 text-sm">
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
            className="p-8 rounded-2xl border border-border bg-card/50"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Developer 2 Name
            </h2>

            <p className="text-sm text-accent mb-4">
              AI / Backend Developer
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Co-developer of TRUTHLENS.AI responsible for backend
              infrastructure, model integration, and system deployment.
              Focused on building scalable AI pipelines and backend
              systems for machine learning applications.
            </p>

            <div className="flex gap-4 text-sm">
              <a
                href="#"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>

              <a
                href="#"
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
