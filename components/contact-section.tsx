"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Send, Mail, Linkedin } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("https://formspree.io/f/mzdjkpge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setIsSubmitted(true)
        e.currentTarget.reset() // ✅ clears form
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
    }

    setIsLoading(false)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">
            Get in touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about TRUTHLENS.AI or want to collaborate?
              Feel free to contact us.
            </p>

            <div className="space-y-6">

              {/* Atharva Email */}
              <a
                href="mailto:atharva@atharvapathak.in"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-card/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Atharva Email</p>
                  <p className="text-sm text-muted-foreground">
                    atharva@atharvapathak.in
                  </p>
                </div>
              </a>

              {/* Harsh Email */}
              <a
                href="mailto:harshdd@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-card/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Harsh Email</p>
                  <p className="text-sm text-muted-foreground">
                    harshdd@gmail.com
                  </p>
                </div>
              </a>

              {/* Atharva */}
              <a
                href="https://www.linkedin.com/in/atharvapathak"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-card/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Atharva Pathak</p>
                  <p className="text-sm text-muted-foreground">
                    Developer 1
                  </p>
                </div>
              </a>

              {/* Harsh */}
              <a
                href="https://www.linkedin.com/in/harsh-dharnidharka/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-card/50"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Harsh Dharnidharka</p>
                  <p className="text-sm text-muted-foreground">
                    Developer 2
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                </div>

                <Input name="subject" placeholder="Subject" required />

                <Textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <Send className="ml-2 w-4 h-4" />}
                </Button>

              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <p className="text-lg">Message sent successfully.</p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
