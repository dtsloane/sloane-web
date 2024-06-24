import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Book } from '@/lib/books';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookshelfProps {
  books: Book[];
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  const router = useRouter();
  const [activeBook, setActiveBook] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.query.slug && typeof router.query.slug === 'string') {
      const index = books.findIndex(book => book.slug === router.query.slug);
      if (index !== -1) setActiveBook(index);
    }
  }, [router.query.slug, books]);

  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative w-full">
      <Button 
        variant="outline" 
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={() => scrollTo('left')}
        aria-label="Scroll Left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <ScrollArea className="w-full whitespace-nowrap overflow-hidden">
        <div ref={scrollContainerRef} className="flex space-x-4 p-4">
          {books.map((book, index) => (
            <div
              key={book.slug}
              className={`flex-shrink-0 w-32 h-48 cursor-pointer transition-transform duration-300 transform-style-3d ${
                activeBook === index ? 'rotate-y-180' : ''
              }`}
              onClick={() => {
                setActiveBook(index);
                router.push(`?slug=${book.slug}`);
              }}
              tabIndex={0}
              role="button"
              aria-pressed={activeBook === index}
            >
              <div className="relative w-full h-full">
                <div className={`absolute inset-0 backface-hidden transform transition-transform duration-700 ${activeBook === index ? 'rotate-y-180' : ''}`}>
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className={`absolute inset-0 backface-hidden transform rotate-y-180 bg-gray-200 flex items-center justify-center p-2 transition-transform duration-700 ${activeBook === index ? 'rotate-y-360' : ''}`}>
                  <p className="text-sm text-center">{book.title}</p>
                </div>
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
        aria-label="Scroll Right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Bookshelf;
