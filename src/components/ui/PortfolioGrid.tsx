import Image from 'next/image';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const items = [
  { type: 'image', src: "/portfolio/HRV baselines.png", title: "Mobile Graphs", year: "2023" },
  { type: 'image', src: "/portfolio/influences-marketing.png", title: "Insights", year: "2023" },
  { type: 'image', src: "/portfolio/linkedin-polish.post.png", title: "Screens", year: "2022" },
  { type: 'image', src: "/portfolio/tags-simple.png", title: "Tags", year: "2022" },
  { type: 'image', src: "/portfolio/workouts-thumbnail.png", title: "Workouts", year: "2022" },
  { type: 'video', src: "/portfolio/sample-video.mp4", title: "Sample Video", year: "2022" },
  { type: 'twitter', id: '1699101383629443306', title: "Twitter Video", year: "2022" }
];

const PortfolioGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ type: string, src?: string, id?: string } | null>(null);

  const openModal = (item: { type: string, src?: string, id?: string }) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center space-y-8 p-6">
        {items.map((item, index) => (
          <div key={index} className="w-full max-w-2xl p-4 text-center">
            <div className="relative group cursor-pointer mt-4" onClick={() => openModal(item)}>
              <div className="relative w-full max-w-xl h-0 pb-[75%] overflow-hidden rounded-md">
                {item.type === 'image' ? (
                  <Image
                    alt={`Item ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    src={item.src!}
                    fill
                  />
                ) : item.type === 'video' ? (
                  <video
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    src={item.src!}
                    muted
                    loop
                    preload="metadata"
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full rounded-md">
                    <TwitterTweetEmbed tweetId={item.id!} />
                  </div>
                )}
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
              ) : (
                <TwitterTweetEmbed tweetId={selectedItem.id!} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
