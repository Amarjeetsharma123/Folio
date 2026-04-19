export interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string[];
  link?: string;
  imagePlaceholder: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  cgpa: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  description?: string[];
}

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer?: string;
}