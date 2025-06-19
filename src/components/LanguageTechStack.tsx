import pythonIcon from '../assets/3d-icons/python.png';
import javaIcon from '../assets/3d-icons/java.png';
import javascriptIcon from '../assets/3d-icons/javascript.png';
import typescriptIcon from '../assets/3d-icons/typescript.png';
import goLangIcon from '../assets/3d-icons/golang.png';
import scalaIcon from '../assets/3d-icons/scala.png';
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