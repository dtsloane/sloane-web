import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  "/portfolio/HRV baselines.png",
  "/portfolio/influences-marketing.png",
  "/portfolio/linkedin-polish.post.png",
  "/portfolio/tags-simple.png",
  "/portfolio/workouts-thumbnail.png",
];

const PortfolioGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
        {images.map((src, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => openModal(src)}>
            <div className="relative w-full h-0 pb-[75%] overflow-hidden">
              <Image
                alt={`Image ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                src={src}
                fill
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-3/4 h-3/4 bg-transparent rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-black" onClick={closeModal}>✖</button>
            <div className="relative w-full h-full">
              <Image
                alt="Selected Image"
                className="w-full h-full object-contain"
                src={selectedImage}
                fill
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
