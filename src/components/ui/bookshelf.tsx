import React, { useState, useRef } from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

interface Book {
  title: string;
  coverImage: string;
  spineColor: string;
  textColor: string;
}

interface BookshelfProps {
  books: Book[];
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  const [activeBook, setActiveBook] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
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
            <div
              key={index}
              onClick={() => setActiveBook(activeBook === index ? null : index)}
              className={`relative transition-all duration-500 cursor-pointer`}
              style={{
                width: activeBook === index ? '200px' : '40px',
                height: '300px',
              }}
            >
              {/* Book Spine */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                style={{
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: activeBook === index ? 'rotateY(-90deg)' : 'rotateY(0)',
                  opacity: activeBook === index ? 0 : 1,
                  width: '40px',
                  height: '100%',
                }}
              >
                <p className="text-sm font-bold whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {book.title}
                </p>
              </div>
              
              {/* Book Cover */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  transform: activeBook === index ? 'rotateY(0)' : 'rotateY(90deg)',
                  opacity: activeBook === index ? 1 : 0,
                  width: '200px',
                  height: '100%',
                }}
              >
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
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