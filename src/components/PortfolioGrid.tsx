import Image from 'next/image';
import React, { useRef, useCallback, useState, useEffect } from 'react';
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPreloaded, setIsVideoPreloaded] = useState(false);

  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, handle if needed
      });
    }
  }, [isVideoLoaded]);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (inView && videoRef.current && item.type === 'video') {
      const videoElement = videoRef.current;
      
      // Preload video when in view
      videoElement.preload = 'auto';
      videoElement.load();

      const handleCanPlayThrough = () => {
        setIsVideoPreloaded(true);
      };

      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      
      return () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
      };
    }
  }, [inView, item.type, handleVideoLoaded]);

  return (
    <div ref={ref} className="w-full max-w-2xl p-4 text-left">
      {inView && (
        <div
          className="relative group mt-4 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`relative w-full h-0 ${item.type === 'image' ? 'pb-[70%]' : 'pb-[56.25%]'} overflow-hidden rounded-md`}>
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
              <>
                <video
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  poster={`/thumbnails/${item.src.split('/').pop()?.replace('.mp4', '.jpg')}`}
                />
                {!isVideoPreloaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">Loading...</span>
                  </div>
                )}
              </>
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-800 via-transparent to-transparent opacity-0 group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-md">{item.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';

const PortfolioTimeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center space-y-12 p-8">
        {items.map((item, index) => (
          <PortfolioItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioTimeline;