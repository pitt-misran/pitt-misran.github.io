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
}

export {};
