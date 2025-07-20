import React, { useEffect, useState } from 'react';

interface ConfettiAnimationProps {
  isActive: boolean;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ isActive }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowConfetti(true);
      // Auto-hide after 6 seconds
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
      return () => clearTimeout(timeout);
    } else {
      setShowConfetti(false);
    }
  }, [isActive]);

  if (!showConfetti) return null;

  // Generate confetti pieces
  const confettiPieces = Array.from({ length: 50 }, (_, i) => {
    const colors = ['#f97316', '#10b981', '#ec4899', '#3b82f6', '#f59e0b', '#8b5cf6'];
    const shapes = ['circle', 'square'];
    const color = colors[i % colors.length];
    const shape = shapes[i % shapes.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 3 + Math.random() * 2;
    const rotation = Math.random() * 360;

    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${left}%`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          borderRadius: shape === 'circle' ? '50%' : '2px',
          transform: `rotate(${rotation}deg)`
        }}
      />
    );
  });

  return (
    <>
      <style>
        {`
          .confetti-piece {
            position: fixed;
            width: 8px;
            height: 8px;
            top: -10px;
            z-index: 1000;
            pointer-events: none;
            animation: confetti-fall linear forwards;
          }
          
          @keyframes confetti-fall {
            0% {
              transform: translateY(-10px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 10px)) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confettiPieces}
      </div>
    </>
  );
};

export default ConfettiAnimation;