import React from 'react';

const DynamicOrbs: React.FC = () => {
  // Reduced number of orbs to 4 for better performance
  const orbs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 30, // 30-90px
    color: [
      'from-purple-400 to-indigo-600',
      'from-pink-400 to-purple-600',
      'from-indigo-400 to-purple-600',
      'from-violet-400 to-purple-600'
    ][i % 4],
    duration: Math.random() * 10 + 10, // 10-20s
    delay: Math.random() * 5, // 0-5s delay
    startX: Math.random() * 80 + 10, // 10-90% to keep orbs on screen
    startY: Math.random() * 80 + 10, // 10-90% to keep orbs on screen
    direction: Math.random() > 0.5 ? 1 : -1
  }));

  return (
    <>
      <style>
        {`
          .floating-orb {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
            filter: blur(1px);
            animation: float-orb linear infinite;
          }
          
          @keyframes float-orb {
            0% { 
              transform: translate(0px, 0px) scale(1);
              opacity: 0.2;
            }
            25% { 
              transform: translate(100px, -100px) scale(1.1);
              opacity: 0.4;
            }
            50% { 
              transform: translate(-50px, -200px) scale(0.9);
              opacity: 0.3;
            }
            75% { 
              transform: translate(-150px, -50px) scale(1.05);
              opacity: 0.5;
            }
            100% { 
              transform: translate(0px, 0px) scale(1);
              opacity: 0.2;
            }
          }
          
          .floating-orb-reverse {
            animation: float-orb-reverse linear infinite;
          }
          
          @keyframes float-orb-reverse {
            0% { 
              transform: translate(0px, 0px) scale(1);
              opacity: 0.2;
            }
            25% { 
              transform: translate(-100px, -100px) scale(1.1);
              opacity: 0.4;
            }
            50% { 
              transform: translate(50px, -200px) scale(0.9);
              opacity: 0.3;
            }
            75% { 
              transform: translate(150px, -50px) scale(1.05);
              opacity: 0.5;
            }
            100% { 
              transform: translate(0px, 0px) scale(1);
              opacity: 0.2;
            }
          }
        `}
      </style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`floating-orb ${orb.direction === 1 ? '' : 'floating-orb-reverse'} bg-gradient-to-br ${orb.color}`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.startX}%`,
              top: `${orb.startY}%`,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DynamicOrbs;