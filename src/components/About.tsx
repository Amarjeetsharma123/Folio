"use client";

import React from 'react';
import Section from './Section';
import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS, EXPERIENCE } from '@/constants';
import { GraduationCap, Award, User, Quote, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="text-center md:text-left mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            About <span className="italic text-dim">Me</span>
          </h2>
        </div>

        {/* Professional Summary Card */}
        <div className="group p-6 md:p-10 glass-card transition-all duration-500 relative overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote size={120} className="text-gold-500 rotate-180" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
                <User size={24} />
              </div>
              <h3 className="font-serif text-2xl text-foreground tracking-wide">Professional Summary</h3>
            </div>

            <div className="prose prose-lg dark:prose-invert text-muted font-light leading-relaxed text-justify max-w-none">
              <p className="mb-6">{PERSONAL_INFO.summary}</p>
              <p>
                I am passionate about writing clean code, solving real-world problems, and contributing to open-source communities. My journey has been defined by a relentless pursuit of technical excellence in both backend architecture and frontend interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="group p-8 md:p-10 glass-card transition-all duration-500 rounded-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
              <GraduationCap size={24} />
            </div>
            <h3 className="font-serif text-2xl text-foreground tracking-wide">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gold-500/20 hover:border-gold-500 transition-colors duration-300">
                <h4 className="text-xl text-foreground font-medium mb-2">{edu.institution}</h4>
                <p className="text-gold-600 dark:text-gold-500 text-sm mb-2 uppercase tracking-wider">{edu.degree}</p>
                <div className="text-dim text-sm font-light space-y-1">
                  <p>{edu.location}</p>
                  <p>CGPA: <span className="text-muted">{edu.cgpa}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div id="experience" className="group p-8 md:p-10 glass-card transition-all duration-500 rounded-xl scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
              <Briefcase size={24} />
            </div>
            <h3 className="font-serif text-2xl text-foreground tracking-wide">Experience</h3>
          </div>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gold-500/20 hover:border-gold-500 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="text-xl text-foreground font-medium">{exp.company}</h4>
                  <span className="text-dim text-xs md:text-sm font-light mt-1 md:mt-0">{exp.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <p className="text-gold-600 dark:text-gold-500 text-sm uppercase tracking-wider">{exp.position}</p>
                  <p className="text-muted text-sm italic">{exp.location}</p>
                </div>

                {exp.description && (
                  <ul className="list-disc list-outside ml-4 text-muted font-light text-sm space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="group p-8 md:p-10 glass-card transition-all duration-500 rounded-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gold-500/10 rounded-full text-gold-500">
              <Award size={24} />
            </div>
            <h3 className="font-serif text-2xl text-foreground tracking-wide">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-foreground/5 shadow-sm hover:bg-foreground/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                <span className="text-muted font-light">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default About;