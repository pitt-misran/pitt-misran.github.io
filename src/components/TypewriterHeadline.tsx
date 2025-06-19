import { useState, useEffect } from 'react';

interface TextPart {
  text: string;
  highlight?: boolean;
}

interface TypewriterHeadlineProps {
  isMobile?: boolean;
}

export default function TypewriterHeadline({ isMobile = false }: TypewriterHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledText, setScrambledText] = useState('');
  
  const textParts: TextPart[] = [
    { text: 'Misran is an ' },
    { text: 'AWS expert', highlight: true },
    { text: ' and a ' },
    { text: 'back-end developer', highlight: true }
  ];
  
  const fullText = textParts.map(part => part.text).join('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const typingSpeed = 50;
  
  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];
  
  useEffect(() => {
    console.log('Starting typewriter effect');
    if (currentIndex <= fullText.length) {
      const timer = setTimeout(() => {
        let newText = '';
        
        // Add confirmed characters
        for (let i = 0; i < currentIndex; i++) {
          newText += fullText[i];
        }
        
        // Add scrambled preview characters
        for (let i = currentIndex; i < Math.min(currentIndex + 10, fullText.length); i++) {
          newText += fullText[i] === ' ' ? ' ' : getRandomChar();
        }
        
        setScrambledText(newText);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else {
      // Animation complete, set final text
      setScrambledText(fullText);
    }
  }, [currentIndex, fullText]);

  // Convert scrambled text back to JSX with highlights
  const renderScrambledText = () => {
    if (!scrambledText) return null;
    
    let textIndex = 0;
    
    return textParts.map((part, partIndex) => {
      const partLength = part.text.length;
      const partText = scrambledText.slice(textIndex, textIndex + partLength);
      textIndex += partLength;
      
      if (part.highlight) {
        return (
          <span key={partIndex} className="text-[#C778DD]">
            {partText}
          </span>
        );
      }
      
      return <span key={partIndex}>{partText}</span>;
    });
  };

  const textSize = isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl md:text-5xl lg:text-6xl';

  return (
    <h1 className={`${textSize} font-bold text-white leading-tight min-h-[1.2em] mb-8`}>
      {renderScrambledText()}
    </h1>
  );
}