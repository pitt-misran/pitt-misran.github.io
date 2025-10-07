import icons from '@/icons';

export const technologies: Technologies = {
  languages: ['Java', 'Python', 'JavaScript & TypeScript', 'Go', 'Scala', 'SQL'],
  backend: ['Spring', 'Spring Boot', 'FastAPI', 'NestJS', 'GraphQL', 'Go Fiber'],
  'ai-ml': ['Amazon Bedrock', 'Pydantic AI', 'LangChain', 'LangGraph', 'Pandas', 'NumPy'],
  tools: ['Claude Code', 'Amazon Q', 'Cursor'],
  'big-data': ['Apache Spark', 'Apache Kafka', 'Apache Samza', 'Databricks'],
  frontend: ['Next.js', 'React', 'Astro', 'Redux', 'Tailwind CSS', 'Material UI'],
};

export const techLabels: Record<keyof Technologies, string> = {
  languages: 'Languages',
  backend: 'Backend',
  'ai-ml': 'AI/ML',
  tools: 'Tools',
  'big-data': 'Big Data',
  frontend: 'Frontend',
};

export const recentTechnologies = [
  ['Amazon Bedrock', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon S3 Vectors'],
  ['Pydantic AI', 'GraphQL', 'Next.js', 'Tailwind CSS'],
  ['Spring Boot', 'PostgreSQL', 'Kubernetes', 'Docker'],
];
