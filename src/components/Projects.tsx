import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '@/constants';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <Section id="projects" className="">
      <div className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div className="text-center md:text-left">
          <span className="text-gold-600 dark:text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 block">Featured Projects</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Selected <span className="text-dim">Works</span>
          </h2>
        </div>
        <div className="md:max-w-xs text-center md:text-right">
          <p className="text-muted text-sm leading-relaxed">
            A showcase of technical proficiency and product engineering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative glass-card transition-all duration-500 overflow-hidden rounded-xl"
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <Image
                  src={project.imagePlaceholder}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-gold-600 dark:text-gold-500 uppercase tracking-wider font-semibold mb-1 block">{project.category}</span>
                    <h3 className="text-xl text-foreground font-serif">{project.title}</h3>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <a href="#" className="p-2 bg-foreground/5 dark:bg-white/5 hover:bg-gold-500 hover:text-white dark:hover:text-black text-foreground dark:text-white rounded-full transition-colors"><Github size={16} /></a>
                    <a href="#" className="p-2 bg-foreground/5 dark:bg-white/5 hover:bg-gold-500 hover:text-white dark:hover:text-black text-foreground dark:text-white rounded-full transition-colors"><ExternalLink size={16} /></a>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <li key={i} className="text-sm text-muted font-light flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-color">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider text-dim border border-border-color px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {PROJECTS.length > 3 && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-10 py-4 glass-card hover:border-gold-500/50 text-foreground font-medium uppercase text-xs tracking-[0.2em] transition-all duration-300 rounded-full group"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                View Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                View More Projects
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;