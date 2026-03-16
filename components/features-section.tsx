"use client"

import { motion } from "framer-motion"
import { Eye, Zap, Lock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Frame-Level Analysis",
    description:
      "The detection model analyzes individual frames to identify visual artifacts, abnormal facial patterns, and inconsistencies commonly produced by deepfake generation models."
  },
  {
    icon: Zap,
    title: "Fast AI Inference",
    description:
      "Optimized inference allows media to be analyzed quickly, making the system suitable for real-time or near real-time deepfake detection workflows."
  },
  {
    icon: Lock,
    title: "Privacy Aware Design",
    description:
      "The system is designed so that media analysis can run locally on-device or in controlled environments, minimizing unnecessary data exposure."
  },
  {
    icon: BarChart3,
    title: "Confidence-Based Results",
    description:
      "Detection results include confidence scores and analysis indicators to help users understand the likelihood of manipulated media."
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
          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            System Capabilities
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            AI-powered media
            <br />
            <span className="text-muted-foreground">
              deepfake detection.
            </span>
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

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
