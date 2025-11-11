"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [pointerX, setPointerX] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // keep active tab in sync with current pathname when it changes
  useEffect(() => {
    if (!pathname) return
    const match = items.find(i => i.url === pathname || pathname.startsWith(i.url))
    if (match) setActiveTab(match.name)
  }, [pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // compute pointer X (center of active link relative to container)
  useEffect(() => {
    const computePointer = () => {
      if (!containerRef.current) return setPointerX(null)
      const activeEl = linkRefs.current[activeTab]
      if (!activeEl) return setPointerX(null)
      const containerRect = containerRef.current.getBoundingClientRect()
      const linkRect = activeEl.getBoundingClientRect()
      const centerX = linkRect.left + linkRect.width / 2 - containerRect.left
      setPointerX(centerX)
    }

    computePointer()
    // recompute on resize to keep pointer aligned
    window.addEventListener('resize', computePointer)
    return () => window.removeEventListener('resize', computePointer)
  }, [activeTab, mounted, items])

  if (!mounted) return null

  return (
    <div className={cn("flex items-center", className)} role="navigation" aria-label="Animated primary navigation">
      <motion.div
          ref={containerRef}
          className={"flex items-center gap-3 bg-white dark:bg-black border border-black/10 dark:border-white/10 py-2 px-2 rounded-full shadow-lg relative"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {/* animated pointer that moves horizontally to the active option (triangle pointing up) */}
          <motion.div
            aria-hidden
            initial={false}
            animate={pointerX !== null ? { left: pointerX } : { left: '50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ transform: 'translateX(-50%)', position: 'absolute', bottom: -6, pointerEvents: 'none', zIndex: 20 }}
          >
            <div style={{
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '8px solid var(--mascot-accent)'
            }} />
          </motion.div>
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <Link key={item.name} href={item.url} legacyBehavior>
                <a
                  ref={(el) => { linkRefs.current[item.name] = el }}
                  onClick={() => setActiveTab(item.name)}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(item.name)
                    }
                  }}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                    "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white",
                    isActive && "text-black dark:text-white"
                  )}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={0}
                  >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    // moved mascot downward (top) and centered; parent controls overflow
                    className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="relative w-10 h-10">
                      <motion.div 
                        // use mascot variables to match site theme
                        className="absolute w-8 h-8 bg-[var(--mascot-bg)] rounded-full left-1/2 -translate-x-1/2"
                        animate={
                          hoveredTab ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 5, 0],
                            transition: {
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          } : {
                            y: [0, -3, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }
                      >
                        <motion.div 
                          className="absolute w-2 h-2 bg-[var(--text-primary)] rounded-full"
                          animate={
                            hoveredTab ? {
                              scaleY: [1, 0.2, 1],
                              transition: {
                                duration: 0.2,
                                times: [0, 0.5, 1]
                              }
                            } : {}
                          }
                          style={{ left: '25%', top: '40%' }}
                        />
                        <motion.div 
                          className="absolute w-2 h-2 bg-[var(--text-primary)] rounded-full"
                          animate={
                            hoveredTab ? {
                              scaleY: [1, 0.2, 1],
                              transition: {
                                duration: 0.2,
                                times: [0, 0.5, 1]
                              }
                            } : {}
                          }
                          style={{ right: '25%', top: '40%' }}
                        />
                        <motion.div 
                          className="absolute w-2 h-1.5 bg-[var(--mascot-accent)] rounded-full"
                          animate={{
                            opacity: hoveredTab ? 0.8 : 0.6
                          }}
                          style={{ left: '15%', top: '55%' }}
                        />
                        <motion.div 
                          className="absolute w-2 h-1.5 bg-[var(--mascot-accent)] rounded-full"
                          animate={{
                            opacity: hoveredTab ? 0.8 : 0.6
                          }}
                          style={{ right: '15%', top: '55%' }}
                        />
                        
                        {/* smile - rendered as an SVG curve for a clearer smile shape */}
                        <motion.div 
                          // smile / mouth - simple rounded bottom border to resemble a smile
                          className="absolute w-4 h-2 border-b-2 rounded-full"
                          style={{ left: '30%', top: '60%', borderColor: 'var(--mascot-accent)' }}
                          animate={
                            hoveredTab ? {
                              scaleY: 1.5,
                              y: -1
                            } : {
                              scaleY: 1,
                              y: 0
                            }
                          }
                        />
                        <AnimatePresence>
                          {hoveredTab && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      {/* decorative diamond removed to avoid conflicting with animated pointer */}
                    </div>
                  </motion.div>
                )}
                </a>
              </Link>
            )
          })}
        </motion.div>
    </div>
  )
}

export default AnimeNavBar
