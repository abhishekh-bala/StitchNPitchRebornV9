import React from 'react';

const DynamicOrbs: React.FC = () => {
  // Generate multiple orbs with different sizes, colors, and animation delays
  const orbs = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 60, // 60-180px
    color: [
      'from-purple-400 to-indigo-600',
      'from-pink-400 to-purple-600',
      'from-indigo-400 to-purple-600',
      'from-violet-400 to-purple-600',
      'from-fuchsia-400 to-pink-600',
      'from-purple-500 to-indigo-600',
      'from-pink-500 to-purple-600',
      'from-indigo-500 to-purple-600',
      'from-blue-400 to-indigo-600',
      'from-cyan-400 to-blue-600',
      'from-teal-400 to-cyan-600',
      'from-emerald-400 to-teal-600'
    ][i % 12],
    duration: Math.random() * 25 + 20, // 20-45s
    delay: Math.random() * 15, // 0-15s delay
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
              opacity: 0.3;
            }
            25% { 
              transform: translate(300px, -200px) rotate(90deg) scale(1.2); 
              opacity: 0.6;
            }
            50% { 
              transform: translate(-150px, -400px) rotate(180deg) scale(0.8); 
              opacity: 0.4;
            }
            75% { 
              transform: translate(-350px, -150px) rotate(270deg) scale(1.1); 
              opacity: 0.7;
            }
            100% { 
              transform: translate(0, 0) rotate(360deg) scale(1); 
              opacity: 0.3;
            }
          }
          
          @keyframes float-around-reverse {
            0% { 
              transform: translate(0, 0) rotate(0deg) scale(1); 
              opacity: 0.3;
            }
            25% { 
              transform: translate(-300px, -200px) rotate(-90deg) scale(1.2); 
              opacity: 0.6;
            }
            50% { 
              transform: translate(150px, -400px) rotate(-180deg) scale(0.8); 
              opacity: 0.4;
            }
            75% { 
              transform: translate(350px, -150px) rotate(-270deg) scale(1.1); 
              opacity: 0.7;
            }
            100% { 
              transform: translate(0, 0) rotate(-360deg) scale(1); 
              opacity: 0.3;
            }
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              filter: blur(25px) brightness(1); 
            }
            50% { 
              filter: blur(35px) brightness(1.3); 
            }
          }
          
          .floating-orb {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            will-change: transform, opacity;
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
              animationDuration: `${orb.duration}s, ${orb.duration * 0.6}s`,
              animationDelay: `${orb.delay}s, ${orb.delay * 0.5}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DynamicOrbs;