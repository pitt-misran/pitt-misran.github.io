import pythonIcon from '../assets/3d-icons/python.png';
import javaIcon from '../assets/3d-icons/java.png';
import nodejsIcon from '../assets/3d-icons/nodejs.png';
import javascriptIcon from '../assets/3d-icons/javascript.png';
import typescriptIcon from '../assets/3d-icons/typescript.png';
import goLangIcon from '../assets/3d-icons/golang.png';
import scalaIcon from '../assets/3d-icons/scala.png';
import sqlIcon from '../assets/3d-icons/sql.png';
import htmlIcon from '../assets/3d-icons/html.png';
import cssIcon from '../assets/3d-icons/css.png';
import TechStack from './TechStack';

// Example tech stack with PNG icon paths
// Replace these paths with your actual PNG icon files
const technologies = [
  {
    iconPath: pythonIcon.src,
    name: 'Python'
  },
  {
    iconPath: javaIcon.src,
    name: 'Java'
  },
  {
    iconPath: nodejsIcon.src,
    name: 'Node.js'
  },
  {
    iconPath: javascriptIcon.src,
    name: 'JavaScript'
  },
  {
    iconPath: typescriptIcon.src,
    name: 'TypeScript'
  },
  {
    iconPath: goLangIcon.src,
    name: 'Go'
  },
  {
    iconPath: scalaIcon.src,
    name: 'Scala'
  },
  {
    iconPath: sqlIcon.src,
    name: 'SQL'
  },
  {
    iconPath: htmlIcon.src,
    name: 'HTML'
  },
  {
    iconPath: cssIcon.src,
    name: 'CSS'
  }
];

export default function LanguageTechStack() {
  return (
    <div className="py-4">
      <TechStack 
        technologies={technologies}
        title="Programming Languages"
        itemsPerView={{
          mobile: 2,
          tablet: 4,
          desktop: 6
        }}
      />
    </div>
  );
}