"use client"

import React from "react"
import { FooterProvider } from "./footer-context"
import { CleanFooter } from "./clean-footer"
import { useFooter } from "./footer-context"
import { FooterVariantController } from "./footer-variant-controller"

// Main content wrapper with footer
export function FooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <FooterProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <FooterWithContext />
        <FooterVariantController />
      </div>
    </FooterProvider>
  )
}

// This component accesses the footer context
function FooterWithContext() {
  const { variant } = useFooter()
  
  return <CleanFooter variant={variant} />
}