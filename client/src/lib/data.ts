// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  projectUrl: string;
}

export interface LiveProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "Online Banking System",
    description: "Built a secure and responsive banking platform with features like account management, transactions, and loan services.",
    technologies: ["Java", "Spring Boot", "Angular", "HTML", "CSS", "JavaScript", "MySQL"],
    categories: ["webdev", "fullstack"],
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Othello Game Application",
    description: "Designed and developed a feature-rich Othello board game with a JavaFX-based GUI, integrating multiple AI strategies and robust game management features.",
    technologies: ["Java", "JavaFX", "Design Patterns", "OOP"],
    categories: ["gamedev", "aiml"],
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Coding Practice Platform",
    description: "Developing an interactive web application to enhance coding skills, similar to neetcode.io, with features for learning and problem solving.",
    technologies: ["React.js", "TypeScript", "MySQL", "HTML", "CSS", "JavaScript"],
    categories: ["webdev", "fullstack"],
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React, Tailwind CSS, and shadcn/ui components.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["webdev"],
    projectUrl: "#"
  }
];

// Live Projects Data
export const liveProjects: LiveProject[] = [
  {
    id: 1,
    title: "Online Banking System",
    description: "A secure and responsive banking platform with features like account management, transactions, and loan services using Angular frontend and Spring Boot backend.",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/manjrekAdi"
  },
  {
    id: 2,
    title: "Othello Game Application",
    description: "A feature-rich Othello board game with a JavaFX-based GUI, integrating multiple AI strategies including Random and Greedy algorithms.",
    technologies: ["Java", "JavaFX", "Design Patterns"],
    demoUrl: "#",
    repoUrl: "https://github.com/manjrekAdi"
  },
  {
    id: 3,
    title: "Coding Practice Platform",
    description: "An interactive web application to enhance coding skills, similar to neetcode.io, with structured learning paths and problem-solving exercises.",
    technologies: ["React", "TypeScript", "MySQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/manjrekAdi"
  }
];

// Skills Data
export const programmingSkills: Skill[] = [
  { name: "Java", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "C/C++", percentage: 80 },
  { name: "JavaScript/TypeScript", percentage: 85 },
  { name: "SQL (MySQL)", percentage: 80 },
  { name: "Shell Scripting", percentage: 75 }
];

export const aiMlSkills: Skill[] = [
  { name: "Data Analysis", percentage: 85 },
  { name: "Pandas", percentage: 80 },
  { name: "NumPy", percentage: 80 },
  { name: "Matplotlib", percentage: 75 },
  { name: "Seaborn", percentage: 75 },
  { name: "Tableau", percentage: 70 }
];

export const webDevSkills: Skill[] = [
  { name: "React.js", percentage: 85 },
  { name: "Angular", percentage: 80 },
  { name: "Spring Boot", percentage: 85 },
  { name: "REST API", percentage: 80 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "Tailwind CSS", percentage: 85 }
];

export const otherTechSkills: Skill[] = [
  { name: "Git & GitHub", percentage: 90 },
  { name: "JUnit", percentage: 80 },
  { name: "VS Code", percentage: 90 },
  { name: "IntelliJ", percentage: 85 },
  { name: "Figma", percentage: 75 },
  { name: "Excel", percentage: 80 }
];

// Experience Data
export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Developer (Freelance)",
    company: "Checklick",
    period: "Apr 2025 - Present",
    responsibilities: [
      "Implemented responsive web pages using React.js and Tailwind CSS based on designs from Zeplin.",
      "Collaborated with designers to ensure UI accuracy and cross-browser compatibility.",
      "Maintained clean code and version control using Git and GitHub."
    ]
  },
  {
    title: "Software Developer (Freelance)",
    company: "Draw Dream",
    period: "Feb 2025 - Apr 2025",
    responsibilities: [
      "Developing an interactive web application to enhance coding skills, similar to neetcode.io, using React.js, TypeScript, HTML, CSS, and JavaScript.",
      "Implementing MySQL for backend data management, including user authentication and progress tracking.",
      "Collaborating with a team to integrate front-end and back-end components, focusing on scalability and performance.",
      "Following best practices in UI/UX design to enhance user engagement through structured learning paths and interactive problem-solving."
    ]
  },
  {
    title: "Data Analytics Intern",
    company: "Ededge Groups",
    period: "Jan 2025 - Apr 2025",
    responsibilities: [
      "Collaborated with a data science team to analyze, preprocess, and visualize large datasets.",
      "Applied Python for Exploratory Data Analysis (EDA) to address real-world challenges in business contexts such as risk analytics.",
      "Utilized tools like Tableau to create data visualizations and reports that effectively communicate findings.",
      "Built machine learning pipelines, applied statistical methods, and optimized model performance in multidisciplinary projects."
    ]
  },
  {
    title: "Content Researcher (Remote)",
    company: "Canada's Virtual Assistant",
    period: "Sept 2024 - Oct 2024",
    responsibilities: [
      "Conducted in-depth market research and analyzed industry trends to create engaging and informative blog content.",
      "Optimized content strategy through SEO-driven writing, improving engagement and visibility.",
      "Collaborated with the team to develop data-driven content strategies aligned with branding and marketing goals."
    ]
  }
];

// Books Data
export const technicalBooks: Book[] = [
  {
    id: 1,
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    rating: 5.0,
    description: "The definitive textbook on deep learning, covering mathematical and conceptual background, deep learning techniques, and research perspectives."
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.5,
    description: "A handbook of best practices for writing clean, maintainable code that helps software developers create elegant, effective code."
  },
  {
    id: 3,
    title: "Hands-On Machine Learning",
    author: "Aurélien Géron",
    rating: 5.0,
    description: "A practical guide to machine learning with scikit-learn, Keras, and TensorFlow, demonstrating concepts with concrete examples."
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Gang of Four",
    rating: 4.5,
    description: "The classic reference for object-oriented design patterns, offering solutions to common problems in software design."
  }
];

export const neuroscienceBooks: Book[] = [
  {
    id: 5,
    title: "Principles of Neural Science",
    author: "Eric Kandel, et al.",
    rating: 5.0,
    description: "A comprehensive textbook on neuroscience covering neural mechanisms, perception, movement, and cognitive functions."
  },
  {
    id: 6,
    title: "The Brain That Changes Itself",
    author: "Norman Doidge",
    rating: 4.5,
    description: "Explores neuroplasticity and how the brain can reorganize itself in response to experience, injury, or learning."
  },
  {
    id: 7,
    title: "Cognitive Neuroscience",
    author: "Michael S. Gazzaniga",
    rating: 4.0,
    description: "A foundational text examining the neural basis of cognition, perception, attention, and memory."
  },
  {
    id: 8,
    title: "Neuroscience: Exploring the Brain",
    author: "Mark F. Bear, et al.",
    rating: 4.5,
    description: "An introductory text on neuroscience that bridges cellular and molecular neuroscience with cognitive neuroscience."
  }
];

export const philosophyBooks: Book[] = [
  {
    id: 9,
    title: "Consciousness Explained",
    author: "Daniel C. Dennett",
    rating: 4.0,
    description: "A philosophical exploration of consciousness from a materialist perspective, challenging dualistic notions of mind."
  },
  {
    id: 10,
    title: "The Mind's I",
    author: "Douglas Hofstadter, Daniel C. Dennett",
    rating: 4.5,
    description: "A collection of essays and reflections on consciousness, personal identity, and the nature of self."
  },
  {
    id: 11,
    title: "The Embodied Mind",
    author: "Francisco Varela, et al.",
    rating: 4.0,
    description: "Explores embodied cognition, arguing that the mind is not only connected to the body but that the body influences how we think."
  },
  {
    id: 12,
    title: "Mind and Cosmos",
    author: "Thomas Nagel",
    rating: 3.5,
    description: "Challenges reductive materialism and argues for a more comprehensive understanding of consciousness in natural order."
  }
];

export const productivityBooks: Book[] = [
  {
    id: 13,
    title: "Deep Work",
    author: "Cal Newport",
    rating: 5.0,
    description: "Argues for the value of focused, distraction-free work and provides strategies for developing this skill in a distracted world."
  },
  {
    id: 14,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.5,
    description: "A practical guide to building good habits and breaking bad ones through small, incremental changes."
  },
  {
    id: 15,
    title: "Getting Things Done",
    author: "David Allen",
    rating: 4.0,
    description: "A methodology for personal productivity and stress-free performance in a complex world."
  },
  {
    id: 16,
    title: "Mindset",
    author: "Carol S. Dweck",
    rating: 4.5,
    description: "Explores the difference between fixed and growth mindsets and how our beliefs about abilities affect learning and success."
  }
];
