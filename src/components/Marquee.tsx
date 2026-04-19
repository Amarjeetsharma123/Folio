import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "SOFTWARE DEVELOPER",
    "BACKEND DEVELOPER",
    "FULL STACK ARCHITECT",
    "JAVA SPECIALIST",
    "SCALABLE SYSTEMS",
    "REST API DESIGN",
    "CLOUD ARCHITECTURE"
  ];

  return (
    <div className="bg-card-bg border-y border-border-color py-6 mt-10 overflow-hidden relative z-20 transition-colors duration-500">
      <div className="flex w-[200%]">
        {/* First Loop */}
        <div className="flex animate-marquee min-w-full flex-shrink-0 justify-around items-center gap-12 px-12">
          {items.map((item, idx) => (
            <React.Fragment key={`a-${idx}`}>
              <span className="text-xl md:text-2xl font-serif italic text-gold-600 dark:text-gold-500/80 whitespace-nowrap">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-border-color"></span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Loop (Duplicate for seamless scroll) */}
        <div className="flex animate-marquee min-w-full flex-shrink-0 justify-around items-center gap-12 px-12">
          {items.map((item, idx) => (
            <React.Fragment key={`b-${idx}`}>
              <span className="text-xl md:text-2xl font-serif italic text-gold-600 dark:text-gold-500/80 whitespace-nowrap">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-border-color"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;