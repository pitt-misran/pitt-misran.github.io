import pythonIcon from '../assets/tech-stack/languages/python.png';
import javaIcon from '../assets/tech-stack/languages/java.png';
import nodejsIcon from '../assets/tech-stack/languages/nodejs.png';
import javascriptIcon from '../assets/tech-stack/languages/javascript.png';
import typescriptIcon from '../assets/tech-stack/languages/typescript.png';
import goLangIcon from '../assets/tech-stack/languages/golang.png';
import scalaIcon from '../assets/tech-stack/languages/scala.png';
import sqlIcon from '../assets/tech-stack/languages/sql.png';
import htmlIcon from '../assets/tech-stack/languages/html.png';
import cssIcon from '../assets/tech-stack/languages/css.png';
import TechStack from './TechStack';

const technologies = [
  {
    iconPath: javaIcon.src,
    name: 'Java'
  },
  {
    iconPath: pythonIcon.src,
    name: 'Python'
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