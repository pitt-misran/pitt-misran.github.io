import smartOutreachHubImg from '@/assets/projects/smart-outreach-hub.jpg';
import joinSocietyImg from '@/assets/projects/join-society.jpg';
import nycScoutImg from '@/assets/projects/nyc-scout.jpg';
import portfolioImg from '@/assets/projects/portfolio.png';
import twitterSocialNetworkAnalysisImg from '@/assets/projects/twitter-social-network-analysis.jpg';
import verseVibeImg from '@/assets/projects/verse-vibe.jpg';

export const projects: Project[] = [
  {
    id: 'smart-outreach-hub',
    title: 'Smart Outreach Hub',
    description: 'AI-powered platform enhancing customer engagement by automating outreach processes.',
    image: smartOutreachHubImg,
    techStack: ['Pydantic AI', 'Bedrock', 'Lambda', 'SQS', 'SNS', 'DynamoDB', 'GraphQL', 'React'],
    githubUrl: 'https://github.com/pitt-cic/smart-outreach-hub',
    learnMoreUrl: 'https://www.digital.pitt.edu/news/success-stories/pitt-athletics-leverages-aws-ai-supercharge-fan-and-alumni-engagement'
  },
  {
    id: 'nyc-scout',
    title: 'NYC Scout',
    description: 'End-to-end AI/ML system for NYC taxi fare prediction with multi-modal capabilities.',
    image: nycScoutImg,
    techStack: ['Google Vertex AI', 'Google App Engine', 'Flask', 'LangGraph', 'LangChain'],
    githubUrl: 'https://github.com/misran3/nyc-scout',
  },
  {
    id: 'twitter-social-network-analysis',
    title: 'Social Network Analysis',
    description: 'Graph-based analysis of Twitter users to identify influential users and recommend new connections based on shared interests.',
    image: twitterSocialNetworkAnalysisImg,
    techStack: ['Scala', 'Apache Spark', 'Amazon Elastic Map Reduce (EMR)', 'Amazon S3'],
    githubUrl: 'https://github.com/misran3/twitter-social-network-analysis',
  },
  {
    id: 'join-society',
    title: 'JOIN Society',
    description: 'End-to-end full stack fashion e-commerce web application.',
    image: joinSocietyImg,
    techStack: ['Spring Boot', 'MySQL', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/misran3/join-society',
  },
  {
    id: 'verse-vibe',
    title: 'Verse Vibe',
    description: 'Lyrics-based song recommendation web application with search engine optimization.',
    image: verseVibeImg,
    techStack: ['Spring Boot', 'Elasticsearch', 'Next.js', 'Material UI'],
    githubUrl: 'https://github.com/misran3/verse-vibe',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills.',
    image: portfolioImg,
    techStack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/pitt-misran/pitt-misran.github.io',
  }
];
