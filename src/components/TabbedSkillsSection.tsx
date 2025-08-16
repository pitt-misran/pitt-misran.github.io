import React, { useState } from 'react';
import LanguageTechStack from './LanguageTechStack';
import BackendTechStack from './BackendTechStack';
import AIMLTechStack from './AIMLTechStack';
import BigDataTechStack from './BigDataTechStack';
import FrontendTechStack from './FrontendTechStack';

interface TabConfig {
  id: string;
  label: string;
  component: React.ComponentType;
}

const tabs: TabConfig[] = [
  { id: 'languages', label: 'Languages', component: LanguageTechStack },
  { id: 'backend', label: 'Backend', component: BackendTechStack },
  { id: 'ai-ml', label: 'AI/ML', component: AIMLTechStack },
  { id: 'big-data', label: 'Big Data', component: BigDataTechStack },
  { id: 'frontend', label: 'Frontend', component: FrontendTechStack },
];

export default function TabbedSkillsSection() {
  const [activeTab, setActiveTab] = useState('languages');

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || LanguageTechStack;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Tab Navigation */}
      {/* Center aligned tabs */}
      <div className="flex justify-center items-center mt-2 mb-2">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#C778DD] text-white shadow-lg transform scale-105'
                  : 'bg-transparent border border-[#ABB2BF] text-[#ABB2BF] hover:border-[#C778DD] hover:text-[#C778DD]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area with Fade Transition */}
      <div className="relative">
        <div
          key={activeTab}
          className="animate-fadeIn"
        >
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}
