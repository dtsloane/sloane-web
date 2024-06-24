import React from 'react';
import { useRouter } from 'next/router';
import { Book, Home, Pen } from 'lucide-react';

interface BooksLayoutProps {
  children: React.ReactNode;
}

export default function BooksLayout({ children }: BooksLayoutProps) {
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/writing', label: 'Writing', icon: Pen },
    { href: '/books', label: 'Books', icon: Book },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      
      {/* SVG Filter for Texture */}
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          visibility: 'hidden',
        }}
      >
        <defs>
          <filter id="paper-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="8"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
              result="diffLight"
            >
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
