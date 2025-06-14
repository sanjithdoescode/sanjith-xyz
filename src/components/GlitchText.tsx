
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = text;
    
    const glitch = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setGlitchText(
          originalText
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iterations >= originalText.length) {
          clearInterval(interval);
          setGlitchText(originalText);
        }

        iterations += 1 / 3;
      }, 30);
    };

    const timer = setTimeout(glitch, Math.random() * 5000 + 2000);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {glitchText}
    </span>
  );
};

export default GlitchText;
