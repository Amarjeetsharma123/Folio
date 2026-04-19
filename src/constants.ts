import { Project, Education, SkillCategory, Certification, Experience } from '@/types';

export const PERSONAL_INFO = {
  name: "Amarjeet Sharma",
  title: "Full Stack Web Developer",
  email: "sharmaamarjeet239@gmail.com",
  phone: "+91 9334849363",
  profilePic: "/jeet.png", // Updated to absolute path to ensure it loads from root
  resume: "/amarjeetsharma.pdf", // Matches the actual file in public folder
  summary: "A dedicated full-stack web developer with strong experience in building scalable, user-centric applications using Java, JavaScript, React.js, Node.js, and Spring Boot. Skilled in developing secure backend architectures, RESTful APIs, and interactive front-end interfaces.",
  socials: {
    linkedin: "https://www.linkedin.com/in/amarjeetsh239/",
    github: "https://github.com/Amarjeetsharma123",
    portfolio: "#",
    facebook: "#"
  }
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Akaame Export PVT. LTD.",
    location: "Ahmedabad",
    position: "Full Stack Developer",
    period: "2 Jan 2026 - Present",
    description: [
      "Leading the development of scalable full-stack web solutions.",
      "Designing and implementing robust RESTful APIs and database architectures.",
      "Collaborating with cross-functional teams to deliver high-quality software products."
    ]
  },
  {
    company: "Concentrix",
    location: "Noida",
    position: "Backend Developer",
    period: "May 2022 - August 2022",
    description: [
      "Managed backend services and optimized database interactions.",
      "Assisted in troubleshooting and resolving technical issues.",
      "Collaborated with the development team to enhance system performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ramdev Furniture",
    category: "E-commerce Platform",
    tech: ["Express.js", "EJS", "MongoDB", "Bootstrap", "Cloudinary"],
    description: [
      "Engineered a full-stack e-commerce platform with complete CRUD operations.",
      "Implemented secure authentication and authorization with OTP-based verification.",
      "Developed admin dashboard, user profiles, and product review functionality."
    ],
    imagePlaceholder: "/ram.png"
  },
  {
    title: "Try Your Luck",
    category: "Gaming Platform",
    tech: ["PHP", "MySQL", "HTML/CSS", "PHPMailer"],
    description: [
      "Built an interactive gaming platform with role-based access control.",
      "Designed ticket purchasing system with automated winner selection algorithm.",
      "Integrated PHPMailer for automated email notifications."
    ],
    imagePlaceholder: "/try.jpg"
  },
  {
    title: "Hotel Management System",
    category: "Desktop Application",
    tech: ["Java", "Swing", "AWT", "MySQL"],
    description: [
      "Created desktop application with intuitive GUI for hotel operations.",
      "Implemented comprehensive CRUD for room management and bookings.",
      "Designed automated billing system with database integration."
    ],
    imagePlaceholder: "/hotel.png"
  },
  {
    title: "Pharmacy Management System",
    category: "Management System",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    description: [
      "Developed a pharmacy management system to handle medicine inventory, billing, and customer records.",
      "Implemented backend functionality using PHP with MySQL for efficient data storage and retrieval."
    ],
    imagePlaceholder: "/pharmacy.png"
  },
  {
    title: "Restaurant Management System",
    category: "Desktop Application",
    tech: ["Java", "Swing", "AWT", "MySQL"],
    description: [
      "Developed a desktop-based system to manage orders, billing, and customer records efficiently.",
      "Integrated MySQL database for secure data storage and smooth data retrieval."
    ],
    imagePlaceholder: "/restaurant.png"
  },
  {
    title: "Flipkart Clone",
    category: "E-commerce Platform",
    tech: ["Node.js", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack e-commerce application with product listing, authentication, and cart functionality.",
      "Built scalable backend APIs and integrated PostgreSQL using Prisma for efficient data management."
    ],
    imagePlaceholder: "/flipkart.png"
  },
  {
    title: "Frozen-Delights",
    category: "E-commerce Platform",
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: [
      "Developed a full-stack application for managing products, orders, and user interactions.",
      "Implemented backend APIs and integrated PostgreSQL using Prisma for efficient data handling."
    ],
    imagePlaceholder: "/frozen.png"
  },
  {
    title: "Library Management System",
    category: "Desktop Application",
    tech: ["Java", "Swing", "AWT", "MySQL"],
    description: [
      "Developed a desktop-based system to manage book records, issue/return operations, and user details.",
      "Integrated MySQL database for efficient data storage and retrieval."
    ],
    imagePlaceholder: "/library.png"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Parul University",
    degree: "Master of Computer Applications (MCA)",
    location: "Vadodara, Gujarat",
    cgpa: "8.23/10"
  },
  {
    institution: "S.V.P College Bhabua",
    degree: "Bachelor of Computer Applications (BCA)",
    location: "Kaimur, Bihar",
    cgpa: "7.5/10"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Mongoose", logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" }
    ]
  },
  {
    category: "Tools & Concepts",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "RESTful APIs", logo: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-api-web-development-flaticons-lineal-color-flat-icons-2.png" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "TCS iON Career Edge - Young Professional" },
  { name: "Database Management Systems (Certificate of Excellence)" },
  { name: "Global Certifications: JavaScript, HTML, CSS" },
  { name: "Java & Data Structures and Algorithms" }
];