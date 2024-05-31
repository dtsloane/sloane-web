import Image from 'next/image';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const items = [
  { type: 'image', src: "/portfolio/HRV baselines.png" },
  { type: 'image', src: "/portfolio/influences-marketing.png" },
  { type: 'image', src: "/portfolio/linkedin-polish.post.png" },
  { type: 'image', src: "/portfolio/tags-simple.png" },
  { type: 'image', src: "/portfolio/workouts-thumbnail.png" },
  { type: 'video', src: "/portfolio/sample-video.mp4" },
  { type: 'twitter', id: '1699101383629443306' } // Twitter video tweet ID
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
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
        {items.map((item, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => openModal(item)}>
            <div className="relative w-full h-0 pb-[75%] overflow-hidden">
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
                <div className="absolute top-0 left-0 w-full h-full">
                  <TwitterTweetEmbed tweetId={item.id!} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-3/4 h-3/4 bg-transparent rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white" onClick={closeModal}>✖</button>
            <div className="relative w-full h-full">
              {selectedItem.type === 'image' ? (
                <Image
                  alt="Selected Item"
                  className="w-full h-full object-contain"
                  src={selectedItem.src!}
                  fill
                />
              ) : selectedItem.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
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
