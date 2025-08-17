import { useState, useEffect } from 'react';
import TechComponent from './TechComponent';

interface TechStackProps {
  technologies: TechItem[];
  title?: string;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const TechStack = ({ technologies, title, itemsPerView = { mobile: 2, tablet: 4, desktop: 6 } }: TechStackProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Force re-render on window resize to update navigation state
  useEffect(() => {
    const handleResize = () => {
      // Reset to valid index if current index is out of bounds
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Calculate max index based on current screen size
  const getMaxIndex = () => {
    // Check screen size to determine items per view
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) { // lg breakpoint
        return Math.max(0, technologies.length - itemsPerView.desktop);
      } else if (width >= 640) { // sm breakpoint  
        return Math.max(0, technologies.length - itemsPerView.tablet);
      }
    }
    return Math.max(0, technologies.length - itemsPerView.mobile);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    const maxIndex = getMaxIndex();
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < getMaxIndex();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Subsection Title */}
      {title && (
        <div className="flex justify-center items-center mb-8">
          <h3 className="text-white text-xl font-semibold mr-4">{title}</h3>
          {/* <div className="flex-1 h-px bg-[#ABB2BF] opacity-30"></div> */}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#ABB2BF] flex items-center justify-center transition-all duration-200 ${
            canGoPrevious 
              ? 'text-white hover:bg-[#C778DD] hover:border-[#C778DD] cursor-pointer' 
              : 'text-[#ABB2BF] opacity-50 cursor-not-allowed'
          }`}
          aria-label="Previous technologies"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#ABB2BF] flex items-center justify-center transition-all duration-200 ${
            canGoNext 
              ? 'text-white hover:bg-[#C778DD] hover:border-[#C778DD] cursor-pointer' 
              : 'text-[#ABB2BF] opacity-50 cursor-not-allowed'
          }`}
          aria-label="Next technologies"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Tech Items Container */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView.mobile)}%)` 
            }}
          >
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-1/2 sm:w-1/4 lg:w-1/6"
              >
                <TechComponent 
                  iconPath={tech.iconPath} 
                  name={tech.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
