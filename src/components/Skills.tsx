"use client";

import React from 'react';
import Section from './Section';
import { SKILLS } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-foreground mb-4">Technical <span className="text-metallic">Arsenal</span></h2>
        <p className="text-muted font-light">Tools and technologies I use to build premium digital products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 md:p-6 glass-card transition-all duration-500 group rounded-xl"
          >
            <h3 className="text-lg text-foreground font-serif mb-6 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors border-b border-border-color pb-2">
              {skillGroup.category}
            </h3>
            <div className="space-y-4">
              {skillGroup.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-lg p-1.5 group-hover/item:bg-foreground/10 transition-colors">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className={`w-full h-full object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300 ${
                        ['Express.js', 'GitHub', 'Next.js'].includes(skill.name) ? 'dark:invert' : ''
                      }`}
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-muted font-light text-sm group-hover/item:text-foreground transition-colors">
                      {skill.name}
                    </span>
                    <span className="h-px w-0 bg-gold-500 group-hover/item:w-4 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;