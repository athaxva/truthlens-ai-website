"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold mb-10"
        >
          Privacy Policy
        </motion.h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">

          <p>
            TRUTHLENS.AI respects your privacy. This privacy policy explains
            how information is collected, used, and protected when using the
            TRUTHLENS.AI platform.
          </p>

          <h2 className="text-xl text-foreground font-semibold">
            Information We Collect
          </h2>

          <p>
            We may collect limited information such as email addresses
            submitted through the contact form and uploaded images for
            analysis.
          </p>

          <h2 className="text-xl text-foreground font-semibold">
            Use of Information
          </h2>

          <p>
            Information submitted through the platform is used solely for
            improving deepfake detection research and responding to user
            inquiries.
          </p>

          <h2 className="text-xl text-foreground font-semibold">
            Data Security
          </h2>

          <p>
            We take reasonable measures to protect user data and ensure secure
            processing of uploaded media.
          </p>

        </div>

      </div>
    </main>
  )
}
