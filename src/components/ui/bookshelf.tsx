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
            <button
              key={book.slug}
              onClick={() => {
                setActiveBook(index === activeBook ? null : index);
                router.push(`?slug=${book.slug}`);
              }}
              className={`relative h-48 transition-width duration-300 ${
                activeBook === index ? 'w-40' : 'w-12 hover:w-14'
              }`}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: `translateX(${activeBook === index ? '-20px' : '0px'})`,
              }}
            >
              {/* Book Spine */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-500`}
                style={{
                  backgroundColor: book.spineColor,
                  color: book.textColor,
                  transform: `rotateY(${activeBook === index ? '-180deg' : '0deg'})`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                <p className="text-sm text-center vertical-rl">{book.title}</p>
              </div>
              {/* Front Cover */}
              <div
                className={`absolute inset-0 transition-transform duration-500`}
                style={{
                  transform: `rotateY(${activeBook === index ? '0deg' : '180deg'})`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
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
