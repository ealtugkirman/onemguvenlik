"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
    onClick?: () => void
  }
  secondaryAction?: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
    onClick?: () => void
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({ 
  badge, 
  title, 
  description, 
  action, 
  secondaryAction,
  withGlow = true, 
  className 
}: CTAProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: custom * 0.1,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        {badge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <Badge 
              variant="outline" 
              className="bg-opacity-20 text-yellow-400 backdrop-blur-sm px-4 py-2 text-base"
            >
              {badge.text}
            </Badge>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeInUpVariants}
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUpVariants}
            className="mx-auto max-w-2xl text-lg sm:text-xl"
          >
            {description}
          </motion.p>
        )}

        {/* Action Buttons */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeInUpVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button
            variant={action.variant || "default"}
            size="lg"
            className="px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:cursor-pointer hover:-translate-y-1"
            onClick={action.onClick}
            asChild={!action.onClick}
          >
            {action.onClick ? (
              action.text
            ) : (
              <a href={action.href}>{action.text}</a>
            )}
          </Button>

          {secondaryAction && (
            <Button
              variant={secondaryAction.variant || "outline"}
              size="lg"
              className="px-8 py-4 text-lg font-medium transition-all duration-200 hover:cursor-pointer hover:-translate-y-1 hover:shadow-md"
              onClick={secondaryAction.onClick}
              asChild={!secondaryAction.onClick}
            >
              {secondaryAction.onClick ? (
                secondaryAction.text
              ) : (
                <a href={secondaryAction.href}>{secondaryAction.text}</a>
              )}
            </Button>
          )}
        </motion.div>

        {/* Background Glow */}
        {withGlow && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl" />
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
            <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          </>
        )}
      </div>
    </section>
  )
}
