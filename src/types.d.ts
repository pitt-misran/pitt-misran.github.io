declare global {
  interface TechItem {
    icon: ImageMetadata;
    name: string;
  }

  interface Technologies {
    'languages': TechItem[];
    'backend': TechItem[];
    'ai-ml': TechItem[];
    'vibe-coding': TechItem[];
    'big-data': TechItem[];
    'frontend': TechItem[];
  }

  interface Project {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    techStack: string[];
    githubUrl?: string;
    learnMoreUrl?: string;
  }
}

export {};
