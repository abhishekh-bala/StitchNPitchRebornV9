import React, { useEffect, useState } from 'react';

interface ConfettiAnimationProps {
  isActive: boolean;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ isActive }) => {
  const [confettiPieces, setConfettiPieces] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces when animation becomes active
      const pieces = Array.from({ length: 50 }, (_, i) => (
        <div
          key={`confetti-${i}-${Date.now()}`}
          className={`confetti-piece confetti-piece-${i % 6}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ));
      setConfettiPieces(pieces);

      // Clear confetti after animation completes
      const timeout = setTimeout(() => {
        setConfettiPieces([]);
      }, 8000);

      return () => clearTimeout(timeout);
    } else {
      setConfettiPieces([]);
    }
  }, [isActive]);

  if (!isActive && confettiPieces.length === 0) return null;

  return (
    <>
      <style>
        {`
          .confetti-piece {
            position: fixed;
            width: 10px;
            height: 10px;
            top: -20px;
            z-index: 1000;
            animation: confetti-fall linear forwards;
            pointer-events: none;
          }
          
          .confetti-piece-0 { 
            background: #f97316; 
            border-radius: 2px;
          }
          .confetti-piece-1 { 
            background: #10b981; 
            border-radius: 50%;
          }
          .confetti-piece-2 { 
            background: #ec4899; 
            border-radius: 2px;
            transform: rotate(45deg);
          }
          .confetti-piece-3 { 
            background: #3b82f6; 
            border-radius: 50%;
          }
          .confetti-piece-4 { 
            background: #f59e0b; 
            border-radius: 2px;
          }
          .confetti-piece-5 { 
            background: #8b5cf6; 
            border-radius: 50%;
          }
          
          @keyframes confetti-fall {
            0% {
              transform: translateY(-20px) rotate(0deg) scale(1);
              opacity: 1;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 20px)) rotate(720deg) scale(0.5);
              opacity: 0;
            }
          }
          
          .bounce-in {
            animation: bounce-in 0.6s ease-out;
          }
          
          @keyframes bounce-in {
            0% { transform: scale(0) rotate(-180deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(-90deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
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