
'use client';
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
}

export default function Reveal({ children, delay = 0, stagger = false }: RevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  const parentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger ? 0.15 : 0,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={stagger ? parentVariants : childVariants}>
      {stagger ? (
        <>
          {React.Children.map(children, (child) => (
            <motion.div variants={childVariants}>{child as React.ReactNode}</motion.div>
          ))}
        </>
      ) : (
        children
      )}
    </motion.div>
  );
}
