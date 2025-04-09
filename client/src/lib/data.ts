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
    title: "XR Data Collection System",
    description: "Developed a system for real-time data stream collection using VR/XR technologies integrated with embedded systems for experimental research.",
    technologies: ["Python", "C#", "Unity", "XR/VR", "Data Analysis"],
    categories: ["aiml", "hardware", "research"],
    projectUrl: "#"
  },
  {
    id: 2,
    title: "LLM Fine-tuning Framework",
    description: "Fine-tuned various ML models using Hugging Face, TensorFlow, and PyTorch, focusing on LLaMA 2, Mixtral, and LLAVA models.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain"],
    categories: ["aiml"],
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Neuroscience Data Analysis Platform",
    description: "Platform for processing and analyzing complex datasets from neuroscientific studies using advanced statistical and computational methods.",
    technologies: ["Python", "R", "MATLAB", "Data Analysis", "Visualization"],
    categories: ["research", "aiml"],
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    categories: ["webdev"],
    projectUrl: "#"
  },
  {
    id: 5,
    title: "Embedded System for Sensor Integration",
    description: "Utilized sensor technologies and embedded systems for real-time data collection and analysis.",
    technologies: ["C", "C++", "Embedded Systems", "Hardware"],
    categories: ["hardware"],
    projectUrl: "#"
  },
  {
    id: 6,
    title: "Machine Learning Visualization Tool",
    description: "Interactive tool for visualizing machine learning models and data, helping researchers understand complex patterns.",
    technologies: ["Python", "JavaScript", "D3.js", "Machine Learning"],
    categories: ["aiml", "webdev"],
    projectUrl: "#"
  }
];

// Live Projects Data
export const liveProjects: LiveProject[] = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    description: "An interactive tool that visualizes the inner workings of neural networks in real-time, helping researchers and students understand how neural networks process information.",
    technologies: ["TensorFlow.js", "React", "Three.js"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "XR Learning Environment",
    description: "A virtual reality environment designed for educational purposes, allowing students to explore and interact with complex scientific concepts in an immersive 3D space.",
    technologies: ["Unity", "C#", "WebXR"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "NeuroTech Dashboard",
    description: "A comprehensive dashboard for neuroscience researchers to monitor, analyze, and visualize brain activity data in real-time with advanced filtering and annotation capabilities.",
    technologies: ["Python", "Django", "D3.js", "WebSockets"],
    demoUrl: "#",
    repoUrl: "#"
  }
];

// Skills Data
export const programmingSkills: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "C/C++", percentage: 85 },
  { name: "JavaScript/TypeScript", percentage: 90 },
  { name: "R", percentage: 80 },
  { name: "MATLAB", percentage: 85 },
  { name: "C#", percentage: 80 },
  { name: "Java", percentage: 75 }
];

export const aiMlSkills: Skill[] = [
  { name: "TensorFlow", percentage: 90 },
  { name: "PyTorch", percentage: 85 },
  { name: "Scikit-learn", percentage: 95 },
  { name: "Hugging Face", percentage: 85 },
  { name: "OpenCV", percentage: 80 },
  { name: "LangChain", percentage: 75 }
];

export const webDevSkills: Skill[] = [
  { name: "React", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Django", percentage: 80 },
  { name: "Node.js", percentage: 85 },
  { name: "Express.js", percentage: 80 }
];

export const otherTechSkills: Skill[] = [
  { name: "Unity", percentage: 85 },
  { name: "Git & GitHub", percentage: 95 },
  { name: "Docker", percentage: 80 },
  { name: "Kubernetes", percentage: 70 },
  { name: "AWS", percentage: 75 },
  { name: "Arduino/Raspberry Pi", percentage: 85 }
];

// Experience Data
export const experienceItems: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Defence Research and Development Canada",
    period: "May 2023 - Aug 2024",
    responsibilities: [
      "Developed software solutions for defense research applications.",
      "Implemented machine learning algorithms for data analysis and pattern recognition.",
      "Collaborated with cross-functional teams on research projects."
    ]
  },
  {
    title: "Research Assistant",
    company: "York University Centre for Vision Research - Visuomotor Neuroscience Lab",
    period: "September 2024 - Present",
    responsibilities: [
      "Conducting research on visuomotor neuroscience applications.",
      "Developing data analysis tools for neuroscientific studies.",
      "Publishing research findings in academic journals and conferences."
    ]
  },
  {
    title: "Volunteer",
    company: "Various Organizations",
    period: "2021 - Present",
    responsibilities: [
      "Lumiate - Contributed to educational initiatives and workshops focused on technology and innovation.",
      "NeuroCollege - Assisted in organizing neuroscience-related events and educational programs.",
      "UNICEF at YorkU - Participated in humanitarian initiatives and awareness campaigns."
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
