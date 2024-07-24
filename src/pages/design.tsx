"use client";
import React, { useState, useEffect } from 'react';
import PortfolioGrid from '../components/PortfolioGrid';
import { motion } from 'framer-motion';
import '../app/globals.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Design: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className={`flex flex-col items-start justify-center p-8 md:p-32 min-h-screen ${isLoaded ? 'no-blur' : 'blur-effect'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`flex flex-col space-y-8 max-w-lg w-full ${isLoaded ? 'no-blur' : 'blur-effect'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Back</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <header className="space-y-2">
          <h1 className="text-lg md:text-md font-medium">Design</h1>
          <h2 className="text-sm text-muted-foreground">Portfolio</h2>
        </header>
      </motion.div>
      <motion.div
        className="w-full px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <PortfolioGrid />
      </motion.div>
    </motion.div>
  );
}

export default Design;
