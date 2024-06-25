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
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth / 2 : containerWidth / 2;
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
      
      <ScrollArea className="w-full overflow-x-auto">
        <div ref={scrollContainerRef} className="flex space-x-4 p-4 min-w-max">
          {books.map((book, index) => (
            <button
              key={book.slug}
              onClick={() => {
                setActiveBook(index === activeBook ? null : index);
                router.push(`?slug=${book.slug}`);
              }}
              className={`relative transition-all duration-500 ${
                activeBook === index ? 'w-[248px] h-[300px]' : 'w-[48px] h-[300px]'
              }`}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Book Spine */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-500 shadow-md"
                style={{
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: activeBook === index ? `rotateY(-30deg) translateX(24px)` : `rotateY(0deg)`,
                  transformOrigin: "left",
                  backfaceVisibility: 'hidden',
                  width: '48px',
                  height: '100%',
                  zIndex: activeBook === index ? 1 : 0,
                }}
              >
                <p className="text-sm font-bold whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{book.title}</p>
              </div>
              {/* Front Cover */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  transform: activeBook === index 
                    ? `rotateY(0deg) translateX(24px)` 
                    : `rotateY(-90deg) translateX(0)`,
                  transformOrigin: "left",
                  backfaceVisibility: 'hidden',
                  width: '200px',
                  height: '100%',
                  zIndex: activeBook === index ? 2 : 0,
                }}
              >
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  layout="fill"
                  className="rounded-md object-cover"
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
        aria-label="Scroll Right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Bookshelf;
