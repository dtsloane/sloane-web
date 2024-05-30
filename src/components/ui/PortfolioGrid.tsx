import Image from 'next/image';
import React from 'react';

const images = [
  "/portfolio/HRV baselines.png",
  "/portfolio/influences-marketing.png",
  "/portfolio/linkedin-polish.post.png",
  "/portfolio/tags-simple.png",
  "/portfolio/workouts-thumbnail.png",
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
      {images.map((src, index) => (
        <div key={index} className="relative group">
          <Image
            alt={`Image ${index + 1}`}
            className="object-cover rounded-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
            src={src}
            width={800} // Adjusted width
            height={600} // Adjusted height to maintain aspect ratio
            layout="responsive"
            objectFit="contain" // Changed to contain to maintain aspect ratio without cropping
          />
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
