"use client"

import { motion } from "@/app/fix-framer-motion"
import { useFooter } from "./footer-context"
import { FooterVariant } from "./clean-footer"
import { LayoutDashboard, Minimize, Minus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FooterVariantController() {
  const { variant, setVariant } = useFooter()

  const variants = [
    { value: FooterVariant.Base, label: "Standard", icon: LayoutDashboard },
    { value: FooterVariant.Clean, label: "Clean", icon: Minus },
    { value: FooterVariant.Minimal, label: "Minimal", icon: Minimize },
    { value: FooterVariant.Ultra, label: "Ultra", icon: X },
  ]

  return (
    <motion.div 
      className="fixed bottom-24 right-4 z-50 bg-background/95 border border-border rounded-lg shadow-lg backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="p-3">
        <h5 className="text-xs font-medium mb-2">Footer Variant</h5>
        <div className="flex flex-col gap-1.5">
          {variants.map((v) => (
            <Button
              key={v.value}
              size="sm"
              variant={variant === v.value ? "default" : "ghost"}
              className={cn(
                "h-8 justify-start text-xs gap-2",
                variant === v.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              )}
              onClick={() => setVariant(v.value)}
            >
              <v.icon className="h-3.5 w-3.5" />
              {v.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}