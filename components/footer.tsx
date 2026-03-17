import { Github, Linkedin, ExternalLink } from "lucide-react"
import { BRAND_NAME_PARTS, BRAND_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + Info */}
          <div>
            <p className="text-xl font-semibold tracking-tight mb-2">
              {BRAND_NAME_PARTS.main}
              <span className="text-accent">{BRAND_NAME_PARTS.accent}</span>
            </p>

            <p className="text-sm text-muted-foreground">
              Protecting truth in the age of synthetic media.
            </p>

            <p className="text-xs text-muted-foreground mt-2">
              Built by Atharva Pathak & Harsh Dharnidharka
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/athaxva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/atharvappathak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Atharva LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-dharnidharka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Harsh LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://atharvapathak.in/projects/truthlensaiapk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Application Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-of-service"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>

          </div>
        </div>
      </div>
    </footer>
  )
}
