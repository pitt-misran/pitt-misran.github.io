import kickdrumLogo from '@/assets/companies/kickdrum.jpg';
import pittCICLogo from '@/assets/companies/pitt-cic.jpg';
import pittDigitalLogo from '@/assets/companies/pitt-digital.jpg';

export const workExperiences: WorkExperience[] = [
    {
        id: 'pitt-cic',
        company: 'AWS Cloud Innovation Center at University of Pittsburgh',
        role: 'Backend Developer',
        period: 'Apr 2025 - Present',
        description: 'Lead developer on Smart Outreach Hub — an AI-driven SMS engagement platform automating sales outreach to 30K+ prospects.',
        logo: pittCICLogo,
        achievements: [
            'Built the backend event-driven architecture using Lambda, Bedrock, Pydantic AI, and GraphQL to process real-time SMS interactions',
            'Prompt-engineered an agentic workflow using Claude Sonnet 4 to engage with users and figure out when to hand off to humans',
            'Created a custom test framework to validate LLM responses by simulating 16 realistic sales conversations',
        ],
    },
    {
        id: 'pitt-digital',
        company: 'Pitt Digital',
        role: 'Data Engineering Intern',
        period: 'Oct 2024 - Apr 2025',
        description: 'Worked on data pipeline optimization and reliability improvements for survey data processing systems.',
        logo: pittDigitalLogo,
        achievements: [
            'Refactored a Lambda service to fetch, transform, and output survey data asynchronously within 90 seconds',
            'Added isolated error handling with 96% test coverage to prevent single-point failures in the pipeline',
        ],
    },
    {
        id: 'kickdrum-sde-2',
        company: 'Kickdrum',
        role: 'Software Engineer',
        period: 'Jan 2023 - Jul 2024',
        description: 'Worked on identity management integrations and AWS infrastructure modernization. Drummer Award winner for delivering multiple high-stakes projects with architect-level contributions.',
        logo: kickdrumLogo,
        achievements: [
            'Led a small team to deliver a SCIM integration that auto-provisions thousands of users from Okta to business apps',
            'Migrated Auth0 authorization rules to actions for thousands of users across multiple apps with zero downtime',
            'Rebuilt AWS infrastructure across 3 regions by migrating from drifted CDK to modular Terraform — cut deployment time from hours to minutes',
        ],
    },
    {
        id: 'kickdrum-sde-1',
        company: 'Kickdrum',
        role: 'Software Developer',
        period: 'Jul 2022 - Dec 2022',
        description: 'Focused on database performance testing and internal tooling. Drummer Award winner for leading performance testing on a 7TB database migration.',
        logo: kickdrumLogo,
        achievements: [
            'Built automated replay tests on RDS Aurora and EC2 databases using Bash scripts, running across 16 worker machines to support a 7TB database migration to AWS',
            'Developed a React app to automate onboarding/offboarding for 100+ employees and project management workflows',
        ],
    },
    {
        id: 'kickdrum-sde-intern',
        company: 'Kickdrum',
        role: 'Software Development Intern',
        period: 'Jan 2022 - Jun 2022',
        description: 'Went through Kickdrum University — an intensive 6-month training program where I tackled real product challenges alongside elite engineers.',
        logo: kickdrumLogo,
        achievements: [
            'Built production-grade applications including a full-stack hotel booking system with Spring Boot, React, GraphQL, and MySQL on AWS',
            'Trained across the full stack — AI, backend, frontend, and cloud — learning from Kickdrum\'s best engineers rather than typical onboarding exercises',
            'Developed the engineering habits and ownership mindset that Kickdrum is known for, going far beyond standard industry training',
        ],
    },
];
