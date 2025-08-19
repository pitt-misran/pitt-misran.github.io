import icons from '@/icons';

export const technologies: Technologies = {
  'languages': [
    {
      icon: icons.java,
      name: 'Java',
    },
    {
      icon: icons.python,
      name: 'Python',
    },
    {
      icon: icons.nodejs,
      name: 'Node.js',
    },
    {
      icon: icons.javascript,
      name: 'JavaScript',
    },
    {
      icon: icons.typescript,
      name: 'TypeScript',
    },
    {
      icon: icons.go,
      name: 'Go',
    },
    {
      icon: icons.scala,
      name: 'Scala',
    },
    {
      icon: icons.sql,
      name: 'SQL',
    },
  ],
  'backend': [
    {
      icon: icons.spring,
      name: 'Spring',
    },
    {
      icon: icons.springboot,
      name: 'Spring Boot',
    },
    {
      icon: icons.fastAPI,
      name: 'FastAPI',
    },
    {
      icon: icons.nestjs,
      name: 'NestJS',
    },
    {
      icon: icons.graphql,
      name: 'GraphQL',
    },
    {
      icon: icons.goFiber,
      name: 'Go Fiber',
    },
  ],
  'ai-ml': [
    {
      icon: icons.bedrock,
      name: 'Amazon Bedrock',
    },
    {
      icon: icons.langchain,
      name: 'LangChain',
    },
    {
      icon: icons.langgraph,
      name: 'LangGraph',
    },
    {
      icon: icons.pytorch,
      name: 'PyTorch',
    },
    {
      icon: icons.pandas,
      name: 'Pandas',
    },
    {
      icon: icons.numpy,
      name: 'NumPy',
    },
  ],
  'vibe-coding': [
    {
      icon: icons.claudeCode,
      name: 'Claude Code',
    },
    {
      icon: icons.amazonQ,
      name: 'Amazon Q',
    },
    {
      icon: icons.cursor,
      name: 'Cursor',
    },
  ],
  'big-data': [
    {
      icon: icons.spark,
      name: 'Apache Spark',
    },
    {
      icon: icons.kafka,
      name: 'Apache Kafka',
    },
    {
      icon: icons.samza,
      name: 'Apache Samza',
    },
    {
      icon: icons.databricks,
      name: 'Databricks',
    },
  ],
  'frontend': [
    {
      icon: icons.nextjs,
      name: 'Next.js',
    },
    {
      icon: icons.react,
      name: 'React',
    },
    {
      icon: icons.astro,
      name: 'Astro',
    },
    {
      icon: icons.redux,
      name: 'Redux',
    },
    {
      icon: icons.tailwindcss,
      name: 'Tailwind CSS',
    },
    {
      icon: icons.mui,
      name: 'Material UI',
    },
  ],
};

export const techLabels: Record<keyof Technologies, string> = {
  'languages': 'Languages',
  'backend': 'Backend',
  'ai-ml': 'AI/ML',
  'vibe-coding': 'Vibe Coding',
  'big-data': 'Big Data',
  'frontend': 'Frontend',
}

export const recentTechnologies = [
  [
    'Amazon Bedrock',
    'AWS Lambda',
    'Amazon DynamoDB',
    'Amazon S3 Vectors',
  ],
  [
    'Pydantic AI',
    'GraphQL',
    'Next.js',
    'Tailwind CSS'
  ],
  [
    'Spring Boot',
    'PostgreSQL',
    'Kubernetes',
    'Docker'
  ]
];
