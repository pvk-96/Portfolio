"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioConfig } from "@/lib/portfolio-config"
import { Award, ExternalLink } from "lucide-react"

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif">
              {portfolioConfig.certifications.title}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioConfig.certifications.items.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-6 relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon ? (
                      <span className="text-2xl">{cert.icon}</span>
                    ) : (
                      <Award className="h-8 w-8 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>

                    {cert.date && (
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        {cert.date}
                      </Badge>
                    )}

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mt-2"
                      >
                        View Certificate
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full group-hover:bg-secondary group-hover:scale-150 transition-all duration-300" />
                </CardContent>

                {/* Card Border Animation */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Stats or Info */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-flex items-center space-x-8 bg-card/30 backdrop-blur-sm rounded-full px-8 py-4 border border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{portfolioConfig.certifications.items.length}+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">2024</div>
              <div className="text-sm text-muted-foreground">Latest</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
