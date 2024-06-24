import React from 'react';
import Link from 'next/link';
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
    </div>
  );
}