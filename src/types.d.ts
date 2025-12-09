declare global {
  interface Technologies {
    'languages': string[];
    'backend': string[];
    'ai-ml': string[];
    'tools': string[];
    'big-data': string[];
    'frontend': string[];
  }

  type TechLabels = Record<keyof Technologies, string>;

  interface Project {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    techStack: string[];
    githubUrl?: string;
    learnMoreUrl?: string;
  }

  interface WorkExperience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    logo: ImageMetadata;
    achievements?: string[];
  }
}

export {};
