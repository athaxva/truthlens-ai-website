"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    name: "TensorFlow",
    description: "ML infrastructure"
  },
  {
    name: "OpenCV",
    description: "Computer vision"
  },
  {
    name: "CUDA",
    description: "GPU acceleration"
  },
  {
    name: "FastAPI",
    description: "API framework"
  }
]

const stats = [
  { value: "AI Model", label: "Deepfake Detection Engine" },
  { value: "Mobile AI", label: "TensorFlow Lite Deployment" },
  { value: "Real-Time", label: "Media Analysis Pipeline" },
  { value: "Research", label: "Prototype System" }
]

export function TechSection() {
  return (
    <section id="technology" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Technology</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Built on proven
            <br />
            <span className="text-muted-foreground">AI technology.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-6">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-4xl sm:text-5xl font-semibold text-foreground mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card/80 transition-colors duration-300 text-center"
            >
              <p className="font-semibold mb-1">{tech.name}</p>
              <p className="text-xs text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
