import React from 'react';
import PortfolioGrid from '../components/ui/PortfolioGrid'; // Ensure the path is correct

const Design: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <PortfolioGrid />
    </div>
  );
}

export default Design;
