"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import './globals.css';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div 
      className={`flex flex-row items-start justify-center p-8 md:p-32 h-screen ${isLoaded ? 'no-blur' : 'blur-effect'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={`flex flex-col items-start space-y-4 w-full md:w-auto text-left ${isLoaded ? 'no-blur' : 'blur-effect'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h4 className="text-lg md:text-md font-medium leading-none">David Sloane</h4>
        <p className="text-sm text-muted-foreground">Designer, Founder.</p>
        <div className="pt-8 space-y-2">
          <Link href="/about" passHref>
            <p className="cursor-pointer text-sm text-muted-foreground hover:text-gray-600 transition-opacity duration-150  hover:bg-gray-100 p-2 rounded-lg space-y-2">
              about
            </p>
          </Link>
          <Link href="/design" passHref>
            <p className="cursor-pointer text-sm text-muted-foreground hover:text-gray-600 transition-opacity duration-150  hover:bg-gray-100 p-2 rounded-lg space-y-2">
              design
            </p>
          </Link>
          <Link href="/work" passHref>
            <p className="cursor-pointer text-sm text-muted-foreground hover:text-gray-600 transition-opacity duration-150  hover:bg-gray-100 p-2 rounded-lg space-y-2">
              work
            </p>
          </Link>
          <Link href="/reading" passHref>
            <p className="cursor-pointer text-sm text-muted-foreground hover:text-gray-600 transition-opacity duration-150 hover:bg-gray-100 p-2 rounded-lg space-y-2">
              reading
            </p>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        className={`ml-4 md:ml-64 mt-0 flex-shrink-0 w-[100px] h-[100px] border-2 border-slate-300 relative transition-transform duration-500 hover:scale-105 ${isLoaded ? 'no-blur' : 'blur-effect'}`}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.25 }}
      >
        <Image
          src="/profile-pics/david.profile  copy.jpeg"
          alt="Profile Picture"
          layout="fill"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </motion.div>
    </motion.div>
  );
}