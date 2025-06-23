import bedrockIcon from '@/assets/tech-stack/ai-ml/bedrock.svg';
import amazonQIcon from '@/assets/tech-stack/ai-ml/amazon-q.svg';
import langchainIcon from '@/assets/tech-stack/ai-ml/langchain.png';
import langgraphIcon from '@/assets/tech-stack/ai-ml/langgraph.png';
import langsmithIcon from '@/assets/tech-stack/ai-ml/langsmith.png';
import pandasIcon from '@/assets/tech-stack/ai-ml/pandas.svg';
import numpyIcon from '@/assets/tech-stack/ai-ml/numpy.svg';
import pytorchIcon from '@/assets/tech-stack/ai-ml/pytorch.svg';
import scikitLearnIcon from '@/assets/tech-stack/ai-ml/scikit-learn.svg';
import TechStack from './TechStack';

const technologies = [
    {
        iconPath: bedrockIcon.src,
        name: "Amazon Bedrock"
    },
    {
        iconPath: amazonQIcon.src,
        name: "Amazon Q"
    },
    {
        iconPath: langchainIcon.src,
        name: "LangChain"
    },
    {
        iconPath: langgraphIcon.src,
        name: "LangGraph"
    },
    {
        iconPath: langsmithIcon.src,
        name: "LangSmith"
    },
    {
        iconPath: pandasIcon.src,
        name: "Pandas"
    },
    {
        iconPath: numpyIcon.src,
        name: "NumPy"
    },
    {
        iconPath: pytorchIcon.src,
        name: "PyTorch"
    },
    {
        iconPath: scikitLearnIcon.src,
        name: "scikit-Learn"
    }
];

export default function AIMLTechStack() {
  return (
    <div className="py-4">
      <TechStack 
        technologies={technologies}
        title="AI/ML"
        itemsPerView={{
          mobile: 2,
          tablet: 4,
          desktop: 6
        }}
      />
    </div>
  );
}