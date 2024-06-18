import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const items = [
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

const PortfolioGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ type: string, src?: string } | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const openModal = (item: { type: string, src?: string }) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    return () => {
      videoRefs.current = [];
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center space-y-8 p-6">
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-3xl p-4 text-left">
            <div
              className="relative group cursor-pointer mt-4"
              onClick={() => openModal(item)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className={`relative w-full h-0 ${item.type === 'image' ? 'pb-[95%]' : 'pb-[56.25%]'} overflow-hidden rounded-md`}>
                {item.type === 'image' ? (
                  <Image
                    alt={`Item ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    src={item.src!}
                    fill
                  />
                ) : item.type === 'video' ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    src={item.src!}
                    muted
                    preload="auto"
                    onCanPlayThrough={() => console.log(`Video ${index} ready`)}
                    onError={() => console.log(`Error loading video ${index}`)}
                  />
                ) : null}
              </div>
            </div>
            <h3 className="text-sm text-gray-400 font-medium mt-2">{item.title}</h3>
            <p className="text-sm text-gray-900">{item.year}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-auto max-w-6xl h-auto max-h-screen bg-transparent overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full p-4">
              {selectedItem.type === 'image' ? (
                <Image
                  alt="Selected Item"
                  className="w-auto h-auto max-w-full max-h-screen object-contain"
                  src={selectedItem.src!}
                  layout="intrinsic"
                  width={1920}
                  height={1080}
                />
              ) : selectedItem.type === 'video' ? (
                <video
                  className="w-auto h-auto max-w-full max-h-screen object-contain"
                  src={selectedItem.src!}
                  controls
                  autoPlay
                >
                  <source src={selectedItem.src!} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
