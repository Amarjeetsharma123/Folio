"use client";

import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '@/constants';
import { Mail, Phone, Linkedin, Github, Facebook, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-background to-background/80 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-8">
          Let's Work <span className="text-muted dark:text-neutral-800">Together</span>
        </h2>
        <p className="text-xl text-muted font-light mb-16 max-w-2xl mx-auto">
          I am currently available for freelance projects and full-time opportunities.
          Looking for a robust backend or a sleek frontend? Let's connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex flex-col items-center justify-center p-6 md:p-8 glass-card transition-all duration-500 group rounded-lg"
          >
            <Mail className="w-8 h-8 text-dim group-hover:text-gold-600 dark:group-hover:text-gold-400 mb-4 transition-colors" />
            <span className="text-xs uppercase tracking-widest text-dim mb-2">Email Me</span>
            <span className="text-foreground text-sm md:text-base font-serif break-all px-2">{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex flex-col items-center justify-center p-6 md:p-8 glass-card transition-all duration-500 group rounded-lg"
          >
            <Phone className="w-8 h-8 text-dim group-hover:text-gold-600 dark:group-hover:text-gold-400 mb-4 transition-colors" />
            <span className="text-xs uppercase tracking-widest text-dim mb-2">Call Me</span>
            <span className="text-foreground text-sm md:text-base font-serif">{PERSONAL_INFO.phone}</span>
          </a>

          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 md:p-8 glass-card transition-all duration-500 group rounded-lg"
          >
            <FileText className="w-8 h-8 text-dim group-hover:text-gold-600 dark:group-hover:text-gold-400 mb-4 transition-colors" />
            <span className="text-xs uppercase tracking-widest text-dim mb-2">Resume</span>
            <span className="text-foreground text-sm md:text-base font-serif">Download PDF</span>
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href={PERSONAL_INFO.socials.linkedin} className="text-dim hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={PERSONAL_INFO.socials.github} className="text-dim hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={PERSONAL_INFO.socials.facebook} className="text-dim hover:text-foreground transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <footer className="mt-24 pt-8 border-t border-card-border text-dim text-sm">
          <p>&copy; {new Date().getFullYear()} Amarjeet Sharma. All Rights Reserved.</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;