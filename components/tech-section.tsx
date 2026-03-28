"use client"

import { motion } from "framer-motion"

export function TechSection() {
  return (
    <section id="technology" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            Technology
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Built on proven
            <br />
            <span className="text-muted-foreground">AI technology.</span>
          </h2>
        </motion.div>

        {/* Top Highlights */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">AI Model</h3>
            <p className="text-muted-foreground text-sm">
              Deepfake Detection Engine
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Real-Time</h3>
            <p className="text-muted-foreground text-sm">
              Media Analysis Pipeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Research</h3>
            <p className="text-muted-foreground text-sm">
              Prototype System
            </p>
          </motion.div>

        </div>

        {/* Technology Stack */}
        <div className="grid sm:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-border bg-card/50 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">TensorFlow</h4>
            <p className="text-sm text-muted-foreground">
              ML infrastructure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card/50 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">CUDA</h4>
            <p className="text-sm text-muted-foreground">
              GPU acceleration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl border border-border bg-card/50 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">FastAPI</h4>
            <p className="text-sm text-muted-foreground">
              API framework
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
