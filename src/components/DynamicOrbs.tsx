import React from 'react';

const DynamicOrbs: React.FC = () => {
  // Reduced number of orbs from 12 to 6
  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40, // 40-120px (reduced from 60-180px)
    color: [
      'from-purple-400 to-indigo-600',
      'from-pink-400 to-purple-600',
      'from-indigo-400 to-purple-600',
      'from-violet-400 to-purple-600',
      'from-fuchsia-400 to-pink-600',
      'from-blue-400 to-indigo-600'
    ][i % 6],
    duration: Math.random() * 20 + 15, // 15-35s (reduced from 20-45s)
    delay: Math.random() * 10, // 0-10s delay (reduced from 0-15s)
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1 // Random direction
  }));

  return (
    <>
      <style>
        {`
          @keyframes float-around {
            0% { 
              transform: translate(0, 0) rotate(0deg) scale(1); 
              opacity: 0.2;
            }
            25% { 
              transform: translate(200px, -150px) rotate(90deg) scale(1.1); 
              opacity: 0.4;
            }
            50% { 
              transform: translate(-100px, -300px) rotate(180deg) scale(0.9); 
              opacity: 0.3;
            }
            75% { 
              transform: translate(-250px, -100px) rotate(270deg) scale(1.05); 
              opacity: 0.5;
            }
            100% { 
              transform: translate(0, 0) rotate(360deg) scale(1); 
              opacity: 0.2;
            }
          }
          
          @keyframes float-around-reverse {
            0% { 
              transform: translate(0, 0) rotate(0deg) scale(1); 
              opacity: 0.2;
            }
            25% { 
              transform: translate(-200px, -150px) rotate(-90deg) scale(1.1); 
              opacity: 0.4;
            }
            50% { 
              transform: translate(100px, -300px) rotate(-180deg) scale(0.9); 
              opacity: 0.3;
            }
            75% { 
              transform: translate(250px, -100px) rotate(-270deg) scale(1.05); 
              opacity: 0.5;
            }
            100% { 
              transform: translate(0, 0) rotate(-360deg) scale(1); 
              opacity: 0.2;
            }
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              filter: blur(15px) brightness(1); 
            }
            50% { 
              filter: blur(25px) brightness(1.2); 
            }
          }
          
          .floating-orb {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            will-change: transform, opacity;
            animation-fill-mode: both;
          }
          
          .floating-orb-normal {
            animation: float-around linear infinite, pulse-glow ease-in-out infinite;
          }
          
          .floating-orb-reverse {
            animation: float-around-reverse linear infinite, pulse-glow ease-in-out infinite;
          }
        `}
      </style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`floating-orb ${orb.direction === 1 ? 'floating-orb-normal' : 'floating-orb-reverse'} bg-gradient-to-br ${orb.color}`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.startX}%`,
              top: `${orb.startY}%`,
              animationDuration: `${orb.duration}s, ${orb.duration * 0.8}s`,
              animationDelay: `${orb.delay}s, ${orb.delay * 0.3}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DynamicOrbs;