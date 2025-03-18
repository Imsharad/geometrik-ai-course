"use client"

import { motion } from "@/app/fix-framer-motion"
import { FooterLayout } from "@/components/layout/main-layout"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterDemoPage() {
  return (
    <FooterLayout>
      <div className="container max-w-4xl mx-auto py-20 px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-4xl tracking-tight">Clean Footer Implementation</h1>
          <p className="text-lg text-muted-foreground">
            This page demonstrates progressively cleaner footer designs. Use the controller on the right to toggle between different variants.
          </p>
          
          <div className="bg-muted/40 border border-border/50 rounded-lg p-6 space-y-4">
            <h2 className="font-semibold text-xl">Available Variants</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Base</h3>
                <p className="text-sm text-muted-foreground">Complete footer with full information, links and layout.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Clean</h3>
                <p className="text-sm text-muted-foreground">Simplified version with reduced visual weight while maintaining functionality.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Minimal</h3>
                <p className="text-sm text-muted-foreground">Significantly reduced content with only essential links.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Ultra</h3>
                <p className="text-sm text-muted-foreground">Extremely minimal with almost no visual clutter.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/40 border border-border/50 rounded-lg p-6 space-y-4">
            <h2 className="font-semibold text-xl">Implementation Details</h2>
            <p className="text-sm text-muted-foreground">
              The footer implementation uses React Context to manage the active variant, allowing for easy switching between different designs. The controller uses Framer Motion for smooth animations when appearing on the screen.
            </p>
            <p className="text-sm text-muted-foreground">
              Each variant progressively removes content and visual elements to achieve a cleaner and more spacious design.
            </p>
          </div>
          
          {/* Spacer to ensure the page has enough content to demonstrate footer */}
          <div className="h-[300px]"></div>
        </motion.div>
      </div>
    </FooterLayout>
  )
}