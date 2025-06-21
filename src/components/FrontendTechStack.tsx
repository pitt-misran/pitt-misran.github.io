import nextjsIcon from '../assets/tech-stack/frontend/nextjs.svg';
import reactIcon from '../assets/tech-stack/frontend/react.svg';
import astroIcon from '../assets/tech-stack/frontend/astro.svg';
import reduxIcon from '../assets/tech-stack/frontend/redux.svg';
import reactRouterIcon from '../assets/tech-stack/frontend/react-router.svg';
import apolloGraphqlIcon from '../assets/tech-stack/frontend/apollo-graphql.svg';
import tailwindcssIcon from '../assets/tech-stack/frontend/tailwindcss.svg';
import muiIcon from '../assets/tech-stack/frontend/mui.svg';
import sassIcon from '../assets/tech-stack/frontend/sass.png';
import TechStack from './TechStack';

const technologies = [
    {
        iconPath: nextjsIcon.src,
        name: 'Next.js',
    },
    {
        iconPath: reactIcon.src,
        name: 'React',
    },
    {
        iconPath: astroIcon.src,
        name: 'Astro',
    },
    {
        iconPath: reduxIcon.src,
        name: 'Redux',
    },
    {
        iconPath: reactRouterIcon.src,
        name: 'React Router',
    },
    {
        iconPath: apolloGraphqlIcon.src,
        name: 'Apollo GraphQL',
    },
    {
        iconPath: tailwindcssIcon.src,
        name: 'Tailwind CSS',
    },
    {
        iconPath: muiIcon.src,
        name: 'Material UI',
    },
    {
        iconPath: sassIcon.src,
        name: 'Sass',
    }
];

export default function FrontendTechStack() {
  return (
    <div className="py-4">
      <TechStack 
        technologies={technologies}
        title="Frontend Development"
        itemsPerView={{
          mobile: 2,
          tablet: 4,
          desktop: 6
        }}
      />
    </div>
  );
}