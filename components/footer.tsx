"use client"

import { portfolioConfig } from "@/lib/portfolio-config"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    ...(portfolioConfig.social.github ? [{ icon: Github, href: portfolioConfig.social.github, label: "GitHub" }] : []),
    ...(portfolioConfig.social.linkedin
      ? [{ icon: Linkedin, href: portfolioConfig.social.linkedin, label: "LinkedIn" }]
      : []),
    {
      icon: Mail,
      href: `mailto:${portfolioConfig.personal.email}`,
      label: "Email",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {portfolioConfig.personal.name}
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">{portfolioConfig.personal.tagline}</p>
            <p className="text-muted-foreground text-sm">Building digital experiences with passion and precision.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Certifications", href: "#certifications" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                {portfolioConfig.personal.email}
              </a>
              {portfolioConfig.personal.location && (
                <p className="text-muted-foreground text-sm">{portfolioConfig.personal.location}</p>
              )}
            </div>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>
                © {currentYear} {portfolioConfig.personal.name}. Made with
              </span>
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            <div className="text-muted-foreground text-sm">
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
