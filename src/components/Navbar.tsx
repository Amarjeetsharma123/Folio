"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      if (href === '#' || href === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl py-4 border-b border-[var(--border-color)]' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo - Left Aligned */}
        <a href="#" className="font-serif text-2xl tracking-tighter text-foreground font-bold group shrink-0" onClick={(e) => handleNavClick(e, '#')}>
          A<span className="text-gold-500">.</span>S
        </a>

        {/* Desktop Menu - Absolutely Centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 font-medium text-[11px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side Actions: Theme + Hire Me + Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <ThemeToggle />
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:block px-6 py-2 border border-gold-500/50 text-gold-600 dark:text-gold-400 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--nav-bg)] border-b border-[var(--border-color)] overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-gold-600 dark:hover:text-gold-400 font-serif text-lg italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;