import { useState } from 'react';
import TechStack from './TechStack';
import { technologies, techLabels } from '@/constants';

export default function TabbedSkillsSection() {
  const [currentTech, setCurrentTech] = useState<keyof Technologies>('languages');

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Tab Navigation */}
      {/* Center aligned tabs */}
      <div className="flex justify-center items-center mt-2 mb-2">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(technologies).map((techId) => (
            <button
              key={techId}
              onClick={() => setCurrentTech(techId as keyof Technologies)}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                currentTech === techId
                  ? 'bg-[#C778DD] text-white shadow-lg transform scale-105'
                  : 'bg-transparent border border-[#ABB2BF] text-[#ABB2BF] hover:border-[#C778DD] hover:text-[#C778DD]'
              }`}
            >
              {techLabels[techId as keyof Technologies]}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area with Fade Transition */}
      <div className="relative">
        <div key={currentTech} className="animate-fadeIn">
          <div className="py-2">
            <TechStack technologies={technologies[currentTech as keyof Technologies]} />
          </div>
        </div>
      </div>
    </div>
  );
}
