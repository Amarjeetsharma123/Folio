"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '@/constants';
import { ArrowDown, Eye, X } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const titles = [
    "Software Developer",
    "Backend Developer",
    "Full Stack Web Developer"
  ];

  const [index, setIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.profilePic);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Reset image source when personal info changes to retry loading
    setImgSrc(PERSONAL_INFO.profilePic);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background pt-20 pb-24 transition-colors duration-500">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 dark:bg-gold-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-200/20 dark:bg-slate-900/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-2xl group-hover:bg-gold-500/20 transition-all duration-500"></div>
          <div className="relative p-1 rounded-full border border-gold-500/30">
            <Image
              src={imgSrc}
              alt={PERSONAL_INFO.name}
              width={192}
              height={192}
              priority
              onError={() => {
                if (imgSrc !== "https://ui-avatars.com/api/?name=Amarjeet+Sharma&background=D4AF37&color=000&size=256") {
                  setImgSrc("https://ui-avatars.com/api/?name=Amarjeet+Sharma&background=D4AF37&color=000&size=256");
                }
              }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl transition-all duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-foreground font-medium tracking-tight mb-4 leading-tight whitespace-normal sm:whitespace-nowrap"
        >
          {PERSONAL_INFO.name.split(" ")[0]}
          {" "}
          <span className="text-dim italic font-light">{PERSONAL_INFO.name.split(" ")[1]}</span>
        </motion.h1>

        <div className="h-8 mb-8 overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={titles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gold-600 dark:text-gold-500 text-sm md:text-base uppercase tracking-[0.2em] font-medium absolute left-0 right-0"
            >
              {titles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          Crafting scalable, user-centric digital architectures with a focus on security and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center w-full"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gold-600 dark:bg-gold-500 text-white dark:text-obsidian hover:bg-foreground hover:text-background font-bold uppercase text-xs tracking-widest transition-all duration-300 w-full md:w-auto shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center"
          >
            View Projects
          </a>
          <button
            onClick={() => setShowResume(true)}
            className="px-8 py-3 border border-foreground/20 text-foreground hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 font-semibold uppercase text-xs tracking-widest transition-all duration-300 w-full md:w-auto flex items-center justify-center gap-2 group"
          >
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-dim"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-background border border-gold-500/30 rounded-lg overflow-hidden flex flex-col shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-color bg-background/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                    <Eye className="w-4 h-4 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-sm md:text-base">Resume Preview</h3>
                    <p className="text-dim text-[10px] uppercase tracking-widest">amarjeetsharma.pdf</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-2 rounded-full hover:bg-card-bg text-dim hover:text-foreground transition-colors border border-transparent hover:border-border-color"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Container */}
              <div className="flex-1 w-full bg-card-bg">
                <iframe
                  src="/amarjeetsharma.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Resume Viewer"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border-color bg-background/50 flex justify-end gap-4">
                <a
                  href="/amarjeetsharma.pdf"
                  download
                  className="text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-500 hover:text-foreground transition-colors"
                >
                  Download Instead
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;