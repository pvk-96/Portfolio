import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Praneeth Varma Kopperla - Portfolio",
  description: "Software Developer Portfolio - Modern, Professional, Innovative",
  generator: "v0.app",
  keywords: ["portfolio", "software developer", "web development", "react", "next.js"],
  authors: [{ name: "Praneeth Varma Kopperla" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
