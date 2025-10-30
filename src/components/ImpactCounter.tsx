import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ImpactCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export const ImpactCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  label,
  icon
}: ImpactCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center space-y-2">
      {icon && (
        <div className="flex justify-center mb-4 animate-glow">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-primary glow-text">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};
