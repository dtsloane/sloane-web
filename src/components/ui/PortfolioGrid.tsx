import Image from 'next/image';
import React from 'react';

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative group">
          <Image
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
            src={src}
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
