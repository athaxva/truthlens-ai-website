"use client"

import { motion } from "framer-motion"
import { Eye, Zap, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Frame-by-Frame Analysis",
    description: "Our AI examines every frame for micro-expressions, lighting inconsistencies, and artifacts invisible to the human eye."
  },
  {
    icon: Zap,
    title: "Real-Time Detection",
    description: "Get instant results with our optimized inference engine. Analyze videos in seconds, not minutes."
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "All processing happens locally or in encrypted environments. Your data never leaves your control."
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Receive comprehensive analysis with confidence scores, highlighted anomalies, and forensic evidence."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Detect deepfakes with
            <br />
            <span className="text-muted-foreground">surgical precision.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
