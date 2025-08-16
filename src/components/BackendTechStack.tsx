import springFrameworkIcon from '../assets/tech-stack/backend/spring.svg';
import springbootIcon from '../assets/tech-stack/backend/spring-boot.svg';
import fastAPIIcon from '../assets/tech-stack/backend/fast-api.svg';
import flaskIcon from '../assets/tech-stack/backend/flask.svg';
import djangoIcon from '../assets/tech-stack/backend/django.svg';
import nestjsIcon from '../assets/tech-stack/backend/nestjs.svg';
import expressIcon from '../assets/tech-stack/backend/express.svg';
import graphqlIcon from '../assets/tech-stack/backend/graphql.svg';
import goFiberIcon from '../assets/tech-stack/backend/go-fiber.svg';
import hibernateIcon from '../assets/tech-stack/backend/hibernate.svg';
import sqlalchemyIcon from '../assets/tech-stack/backend/sqlalchemy.svg';
import typeormIcon from '../assets/tech-stack/backend/typeorm.png';
import prismaIcon from '../assets/tech-stack/backend/prisma.svg';
import TechStack from './TechStack';

const technologies = [
  {
    iconPath: springFrameworkIcon.src,
    name: 'Spring'
  },
  {
    iconPath: springbootIcon.src,
    name: 'Spring Boot'
  },
  {
    iconPath: fastAPIIcon.src,
    name: 'FastAPI'
  },
  {
    // iconPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
    iconPath: flaskIcon.src,
    name: 'Flask'
  },
  {
    iconPath: djangoIcon.src,
    name: 'Django'
  },
  {
    iconPath: nestjsIcon.src,
    name: 'NestJS'
  },
  {
    iconPath: expressIcon.src,
    name: 'Express'
  },
  {
    iconPath: graphqlIcon.src,
    name: 'GraphQL'
  },
  {
    iconPath: goFiberIcon.src,
    name: 'Go Fiber'
  },
  {
    iconPath: hibernateIcon.src,
    name: 'Hibernate'
  },
  {
    iconPath: sqlalchemyIcon.src,
    name: 'SQLAlchemy'
  },
  {
    iconPath: typeormIcon.src,
    name: 'TypeORM'
  },
  {
    iconPath: prismaIcon.src,
    name: 'Prisma'
  }
];

export default function BackendTechStack() {
  return (
    <div className="py-2">
      <TechStack 
        technologies={technologies}
        itemsPerView={{
          mobile: 2,
          tablet: 4,
          desktop: 6
        }}
      />
    </div>
  );
}