import React from 'react';

interface TechComponentProps {
  iconPath: string;
  name: string;
}

export default function TechComponent({ iconPath, name }: TechComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-w-[120px] group cursor-pointer">
      {/* Icon container with hover effect */}
      <div className="flex items-center justify-center w-16 h-16 mb-3 transition-transform duration-200 group-hover:scale-110">
        <img 
          src={iconPath} 
          alt={`${name} icon`}
          className="w-12 h-12 object-contain"
        />
      </div>
      
      {/* Tech name */}
      <span className="text-[#ABB2BF] text-sm font-medium text-center group-hover:text-white transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}