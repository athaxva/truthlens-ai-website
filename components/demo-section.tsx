"use client"

import { motion } from "framer-motion"
import { Upload, Download } from "lucide-react"

export function DemoSection() {
  return (
    <section id="demo" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            Android Beta
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Upload. Analyze.
            <br />
            <span className="text-muted-foreground">Know the truth.</span>
          </h2>
        </motion.div>

        {/* Upload placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl border-2 border-dashed border-border p-16 text-center">

            <div className="flex flex-col items-center justify-center">

              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-muted-foreground" />
              </div>

              <p className="text-xl font-medium mb-2">
                Web demo currently unavailable
              </p>

              <p className="text-muted-foreground mb-8 max-w-md">
                The browser version of TRUTHLENS.AI is still under development.
                You can try the Android beta application instead.
              </p>

              {/* Download Android button */}
              <a
                href="https://atharvapathak.in/projects/truthlensaiapk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-base font-medium"
              >
                <Download className="w-5 h-5" />
                Download Android Beta
              </a>

              <p className="text-xs text-muted-foreground mt-6">
                Compatible with Android devices. Install the APK to try the beta version.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}