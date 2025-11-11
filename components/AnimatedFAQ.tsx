
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function AnimatedFAQ({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-5">
      <button
        onClick={() => setOpen((p) => !p)}
        className="type-body font-semibold flex w-full items-center justify-between text-left focus-visible:ring-2 focus-visible:ring-brand-ring rounded-lg px-1"
        aria-expanded={open}
      >
        <span>{question}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="ml-2 text-text-secondary flex items-center">
          <ChevronDown size={18} strokeWidth={2.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="type-body mt-3 text-text-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
