"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { portfolioConfig } from "@/lib/portfolio-config"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioConfig.personal.email,
      href: `mailto:${portfolioConfig.personal.email}`,
    },
    ...(portfolioConfig.personal.phone
      ? [
          {
            icon: Phone,
            label: "Phone",
            value: portfolioConfig.personal.phone,
            href: `tel:${portfolioConfig.personal.phone}`,
          },
        ]
      : []),
    ...(portfolioConfig.personal.location
      ? [
          {
            icon: MapPin,
            label: "Location",
            value: portfolioConfig.personal.location,
            href: undefined,
          },
        ]
      : []),
  ]

  const socialLinks = [
    ...(portfolioConfig.social.github ? [{ icon: Github, href: portfolioConfig.social.github, label: "GitHub" }] : []),
    ...(portfolioConfig.social.linkedin
      ? [{ icon: Linkedin, href: portfolioConfig.social.linkedin, label: "LinkedIn" }]
      : []),
    ...(portfolioConfig.social.twitter
      ? [{ icon: Twitter, href: portfolioConfig.social.twitter, label: "Twitter" }]
      : []),
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif">
              {portfolioConfig.contact.title}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{portfolioConfig.contact.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-muted/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      {portfolioConfig.contact.formFields.name.label}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={portfolioConfig.contact.formFields.name.placeholder}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`mt-2 bg-input border-border focus:border-primary ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      {portfolioConfig.contact.formFields.email.label}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={portfolioConfig.contact.formFields.email.placeholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`mt-2 bg-input border-border focus:border-primary ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {portfolioConfig.contact.formFields.message.label}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={portfolioConfig.contact.formFields.message.placeholder}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      className={`mt-2 bg-input border-border focus:border-primary resize-none ${
                        errors.message ? "border-destructive" : ""
                      }`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center text-green-500 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Something went wrong. Please try again or contact me directly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
