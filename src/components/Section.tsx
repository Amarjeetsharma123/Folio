"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-24 bg-background text-foreground transition-colors duration-500 relative overflow-hidden ${className}`}>
      {/* Dynamic Background Glows for Glassmorphism */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-[10%] w-[35%] h-[35%] bg-slate-300/10 dark:bg-slate-700/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-1/3 w-[30%] h-[30%] bg-gold-200/5 dark:bg-slate-900/40 rounded-full blur-[110px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;