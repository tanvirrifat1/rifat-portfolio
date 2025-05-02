"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button onClick={onClick} variant={variant} size={size} className={className}>
        {children}
      </Button>
    </motion.div>
  )
}
