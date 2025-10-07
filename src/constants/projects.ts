import smartOutreachHubImg from '@/assets/projects/smart-outreach-hub.jpg';
import joinSocietyImg from '@/assets/projects/join-society.jpg';
import verseVibeImg from '@/assets/projects/verse-vibe.jpg';

export const projects: Project[] = [
  {
    id: 'smart-outreach-hub',
    title: 'Smart Outreach Hub',
    description: 'Outreach automation tool',
    image: smartOutreachHubImg,
    techStack: ['Pydantic AI', 'Bedrock', 'SQS', 'SNS', 'GraphQL', 'React'],
    githubUrl: 'https://github.com/pitt-cic/smart-outreach-hub',
    learnMoreUrl: 'https://www.digital.pitt.edu/news/success-stories/pitt-athletics-leverages-aws-ai-supercharge-fan-and-alumni-engagement'
  },
  {
    id: 'join-society',
    title: 'JOIN Society',
    description: 'Fashion e-commerce website',
    image: joinSocietyImg,
    techStack: ['Spring Boot', 'MySQL', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mohd-Misran/join-society',
  },
  {
    id: 'verse-vibe',
    title: 'Verse Vibe',
    description: 'Lyrics search engine',
    image: verseVibeImg,
    techStack: ['Spring Boot', 'Elasticsearch', 'Next.js', 'Material UI'],
    githubUrl: 'https://github.com/Mohd-Misran/verse-vibe',
  }
];
