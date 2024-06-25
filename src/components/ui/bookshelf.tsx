import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

interface Book {
  title: string;
  coverImage: string;
  spineColor: string;
  textColor: string;
  slug: string;
}

interface BookshelfProps {
  books: Book[];
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  const [bookIndex, setBookIndex] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      setIsScrolling(true);
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 200); // Adjust delay as needed
    }
  };

  const bookWidth = 240;
  const spineWidth = 40;
  const bookHeight = 300;

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

      <Button 
        variant="outline" 
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() => scrollTo('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <ScrollArea className="w-full">
        <div ref={scrollRef} className="flex space-x-4 p-4">
          {books.map((book, index) => (
            <button
              key={book.title}
              onClick={() => {
                if (index === bookIndex) {
                  setBookIndex(null);
                } else {
                  setBookIndex(index);
                }
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                outline: "none",
                flexShrink: 0,
                transform: `translateX(-${bookIndex !== null ? spineWidth * bookIndex : 0}px)`,
                width: bookIndex === index ? bookWidth : spineWidth,
                perspective: "1000px",
                WebkitPerspective: "1000px",
                gap: "0px",
                transition: isScrolling ? `transform 100ms linear` : `all 500ms ease`,
                willChange: "auto",
              }}
            >
              <div
                className="relative flex items-start justify-center overflow-hidden"
                style={{
                  width: spineWidth,
                  height: bookHeight,
                  flexShrink: 0,
                  transformOrigin: "right",
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${bookIndex === index ? "-60deg" : "0deg"}) rotateZ(0deg) skew(0deg, 0deg)`,
                  transition: "all 500ms ease",
                  willChange: "auto",
                  filter: "brightness(0.8) contrast(1.5)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0" style={{ filter: 'url(#paper-texture)', opacity: 0.2, width: '100%', height: '100%' }} />
                <p className="text-sm font-bold whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {book.title}
                </p>
              </div>

              <div
                className="absolute inset-0 transition-all duration-400 overflow-hidden"
                style={{
                  transform: bookIndex === index ? 'rotateY(0deg) translateX(40px)' : 'rotateY(90deg) translateX(40px)',
                  opacity: bookIndex === index ? 1 : 0,
                  width: '200px',
                  height: '100%',
                  transformOrigin: 'left center',
                  zIndex: bookIndex === index ? 2 : 0,
                }}
              >
                <div className="absolute inset-0" style={{ filter: 'url(#paper-texture)', opacity: 0.25, width: '100%', height: '100%', zIndex: 1 }} />
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: 'linear-gradient(to right, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 5%)',
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

      <Button 
        variant="outline" 
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() => scrollTo('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Bookshelf;
