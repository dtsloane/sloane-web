import Image from 'next/image';
import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface Item {
  type: 'video' | 'image';
  src: string;
  title: string;
  year: string;
}

const items: Item[] = [
  { type: 'video', src: "/PH Video : Website .mp4", title: "iOS Beta Launch", year: "2022" },
  { type: 'video', src: "/New-Website-Video.mp4", title: "Website", year: "2022" },
  { type: 'video', src: "/Workouts Launch.mp4", title: "Workouts", year: "2022" },
  { type: 'image', src: "/portfolio/Frame 10122756.png", title: "Apple Health Integration", year: "2023" },
  { type: 'image', src: "/portfolio/Frame 10122759.png", title: "Platform", year: "2024" },
  { type: 'image', src: "/portfolio/Frame 10122775.png", title: "Components", year: "2022" },
  { type: 'image', src: "/portfolio/Frame 10122762.png", title: "Insights", year: "2023" },
  { type: 'image', src: "/portfolio/Frame 10122769.png", title: "Workouts", year: "2022" },
  { type: 'image', src: "/portfolio/Frame 10122766.png", title: "Insight Proxy", year: "2024" },
  { type: 'image', src: "/portfolio/Frame 10122757.png", title: "Sleep Insights", year: "2023" },
  { type: 'image', src: "/portfolio/Frame 10122765.png", title: "Workouts", year: "2023" },
  { type: 'image', src: "/portfolio/Frame 10122774.png", title: "Component", year: "2023" }
];

interface PortfolioItemProps {
  item: Item;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = React.memo(({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, handle if needed
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  React.useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, handle if needed
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl p-4 text-left">
      {inView && (
        <div
          className="relative group mt-4 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`relative w-full h-0 ${item.type === 'image' ? 'pb-[95%]' : 'pb-[56.25%]'} overflow-hidden rounded-md`}>
            {item.type === 'image' ? (
              <Image
                alt={`Item ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                src={item.src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            ) : item.type === 'video' ? (
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                src={item.src}
                muted
                preload="auto"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-800 via-transparent to-transparent opacity-0 group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-sm">{item.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';

const PortfolioGrid: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center space-y-8 sm:space-y-4 p-6">
        {items.map((item, index) => (
          <PortfolioItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;