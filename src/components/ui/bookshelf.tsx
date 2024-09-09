"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from 'next/image';
import { Book } from '../../lib/books'; // Importing the correct Book type

interface BookshelfProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

const Bookshelf: React.FC<BookshelfProps> = ({ books, onSelectBook }) => {
  const [bookIndex, setBookIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileBookWidth = 160;
  const mobileSpineWidth = 30;
  const mobileBookHeight = 200;

  const currentBookWidth = isMobile ? mobileBookWidth : 240;
  const currentSpineWidth = isMobile ? mobileSpineWidth : 40;
  const currentBookHeight = isMobile ? mobileBookHeight : 300;

  // Adjust the width of the scroll area to account for the selected book
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = books.length * currentSpineWidth + (bookIndex !== null ? currentBookWidth - currentSpineWidth : 0);
      scrollRef.current.style.width = `${scrollWidth}px`;
    }
  }, [bookIndex, books.length]);

  return (
    <div className="relative w-full">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
            <feDistantLight azimuth="45" elevation="35" />
          </feDiffuseLighting>
        </filter>
      </svg>

      <ScrollArea className="w-full">
        <div ref={scrollRef} className="flex space-x-4 p-4 cursor-pointer">
          {books.map((book, index) => (
            <button
              key={book.title}
              onClick={() => {
                if (index === bookIndex) {
                  setBookIndex(null);
                } else {
                  setBookIndex(index);
                  onSelectBook(book); // Notify parent component of the selected book
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                outline: "none",
                flexShrink: 0,
                transform: `translateX(-${bookIndex !== null ? currentSpineWidth * bookIndex : 0}px)`,
                width: bookIndex === index ? currentBookWidth : currentSpineWidth,
                perspective: "1000px",
                WebkitPerspective: "1000px",
                gap: "0px",
                transition: `transform 500ms ease, width 500ms ease`, 
                willChange: "transform, width",
              }}
            >
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  width: currentSpineWidth,
                  height: currentBookHeight,
                  flexShrink: 0,
                  transformOrigin: "right",
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  borderRadius: bookIndex === index ? "3px 0 0 3px" : "3px 3px 3px 3px", // Conditional border radius
                  transform: `
                    translate3d(0px, 0px, 0px) 
                    scale3d(${hoveredIndex === index && bookIndex !== index ? 1.05 : 1}, ${hoveredIndex === index && bookIndex !== index ? 1.05 : 1}, 1) 
                    rotateX(0deg) 
                    rotateY(${bookIndex === index ? "-60deg" : "0deg"}) 
                    rotateZ(0deg) 
                    skew(0deg, 0deg)
                  `,
                  transition: "transform 500ms ease, border-radius 500ms ease", 
                  willChange: "transform, border-radius",
                  filter: "brightness(0.8) contrast(1.5)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0" style={{ filter: 'url(#paper-texture)', opacity: 0.2, width: '100%', height: '100%' }} />
                <p 
                  className={`font-bold whitespace-nowrap ${isMobile ? 'text-xs' : 'text-sm'}`} 
                  style={{ 
                    writingMode: 'vertical-rl', 
                    transform: 'rotate(180deg)',
                    maxHeight: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word'
                  }}
                >
                  {book.title}
                </p>
              </div>

              <div
                className="absolute inset-0 transition-all duration-300 overflow-hidden" // Adjusted duration for book cover
                style={{
                  transform: bookIndex === index ? `rotateY(0deg) translateX(${currentSpineWidth}px)` : `rotateY(90deg) translateX(${currentSpineWidth}px)`,
                  opacity: bookIndex === index ? 1 : 0,
                  width: `${currentBookWidth - currentSpineWidth}px`,
                  height: '100%',
                  transformOrigin: 'left center',
                  zIndex: bookIndex === index ? 2 : 0,
                  borderRadius: bookIndex === index ? "0 3px 3px 0" : "3px 3px 3px 3px", // Conditional border radius for cover
                }}
              >
                <div className="absolute inset-0" style={{ filter: 'url(#paper-texture)', opacity: 0.15, width: '100%', height: '100%', zIndex: 1 }} />
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: 'linear-gradient(to right, rgba(194,194,194,0.3) 0%, rgba(255,255,255,0) 3%)',
                    zIndex: 1 
                  }} 
                />
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default Bookshelf;