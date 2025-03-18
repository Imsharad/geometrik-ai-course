"use client"

import React, { createContext, useContext, useState } from "react"
import { FooterVariant } from "./clean-footer"

interface FooterContextType {
  variant: FooterVariant
  setVariant: (variant: FooterVariant) => void
  toggleNextVariant: () => void
}

const FooterContext = createContext<FooterContextType | undefined>(undefined)

export function useFooter() {
  const context = useContext(FooterContext)
  if (!context) {
    throw new Error("useFooter must be used within a FooterProvider")
  }
  return context
}

export function FooterProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<FooterVariant>(FooterVariant.Base)

  const toggleNextVariant = () => {
    const variants = Object.values(FooterVariant)
    const currentIndex = variants.indexOf(variant)
    const nextIndex = (currentIndex + 1) % variants.length
    setVariant(variants[nextIndex] as FooterVariant)
  }

  return (
    <FooterContext.Provider value={{ variant, setVariant, toggleNextVariant }}>
      {children}
    </FooterContext.Provider>
  )
}