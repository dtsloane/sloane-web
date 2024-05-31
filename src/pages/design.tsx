import React from 'react';
import PortfolioGrid from '../components/ui/PortfolioGrid';
import '../app/globals.css';

const Design: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-lg md:text-md font-medium mb-8">Portfolio</h1>
      <div className="w-full px-6">
        <PortfolioGrid />
      </div>
    </div>
  );
}

export default Design;