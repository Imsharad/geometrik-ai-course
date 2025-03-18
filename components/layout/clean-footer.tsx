"use client"

import React from "react"
import Link from "next/link"
import { motion } from "@/app/fix-framer-motion"
import { GraduationCap, Heart, Twitter, Github, Linkedin, Mail } from "lucide-react"

// Footer variants with increasing cleanliness levels
export enum FooterVariant {
  Base = "base",
  Clean = "clean",
  Minimal = "minimal",
  Ultra = "ultra"
}

interface CleanFooterProps {
  variant?: FooterVariant
}

export function CleanFooter({ variant = FooterVariant.Base }: CleanFooterProps) {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "Courses", href: "#courses" },
        { label: "Resources", href: "#resources" },
        { label: "Community", href: "#community" },
        { label: "Pricing", href: "#pricing" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "#terms" },
        { label: "Privacy", href: "#privacy" },
        { label: "Cookies", href: "#cookies" },
      ]
    }
  ]
  
  // Base variant - Full featured footer
  if (variant === FooterVariant.Base) {
    return (
      <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Logo and description */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8" />
                <span className="text-xl font-bold">Geometrik AI</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Transform your career with our AI course. Master cutting-edge techniques and join a thriving community of innovators.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Geometrik AI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              <span className="flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> by Geometrik Team
              </span>
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  // Clean variant - Simplified but still comprehensive
  if (variant === FooterVariant.Clean) {
    return (
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <GraduationCap className="h-7 w-7" />
                <span className="text-lg font-bold">Geometrik AI</span>
              </Link>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium">{group.title}</h3>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Geometrik AI
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  // Minimal variant - Very clean with minimal content
  if (variant === FooterVariant.Minimal) {
    return (
      <footer className="border-t border-border/30 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-1.5">
              <GraduationCap className="h-5 w-5" />
              <span className="text-base font-semibold">Geometrik AI</span>
            </Link>
            
            <nav className="mt-6 md:mt-0">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  { label: "Courses", href: "#courses" },
                  { label: "About", href: "#about" },
                  { label: "Terms", href: "#terms" },
                  { label: "Privacy", href: "#privacy" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Geometrik AI
            </p>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  // Ultra variant - Extremely minimal and clean
  return (
    <footer className="border-t border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-medium">Geometrik</span>
            </Link>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear}
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <nav className="mr-6">
              <ul className="flex space-x-4">
                {[
                  { label: "Terms", href: "#terms" },
                  { label: "Privacy", href: "#privacy" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}