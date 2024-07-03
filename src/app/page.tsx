"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import './globals.css';
import { motion } from 'framer-motion';

const recognitionLinks = [
  {
    href: 'https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html',
    text: "30 under 30: Young guns who are shooting for the stars",
    subtext: "Independent, 2021",
  },
  {
    href: 'https://www.businesspost.ie/connected/irish-techs-young-guns-this-years-30-under-30/',
    text: '30 under 30: Irish tech young guns',
    subtext: "Business Post, 2022",
  },
  {
    href: 'https://x.com/ProductHunt/status/1699101383629443306',
    text: 'Cambrean iOS Launch',
    subtext: "Product Hunt, 2023",
  },
  {
    href: 'https://www.echolive.ie/corksport/arid-40250135.html',
    text: 'Cobh Ramblers U19 player develops new platform..',
    subtext: "Echo, 2021",
  },
  // more links
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-start p-8 md:p-32 min-h-screen overflow-auto ${isLoaded ? 'no-blur' : 'blur-effect'}`}>
      <motion.div
        className={`flex flex-col items-start space-y-2 w-full md:w-auto text-left ${isLoaded ? 'no-blur' : 'blur-effect'} py-16`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h4
          className="text-lg md:text-md font-medium leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          David Sloane
        </motion.h4>
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Designer, Founder.
        </motion.p>
        <motion.div
          className="pt-6 flex flex-col items-start space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/design" legacyBehavior>
            <a className='flex w-full'>
              <div className='flex flex-col items-start transition-opacity duration-150 hover:bg-gray-100 rounded-lg p-2.5 w-full'>
                <p className="text-sm">Design (12)</p>
                <p className="text-xs text-muted-foreground pt-1">What I've worked on</p>
              </div>
            </a>
          </Link>
          <Link href="/reading" legacyBehavior>
            <a className='flex w-full'>
              <div className='flex flex-col items-start transition-opacity duration-150 hover:bg-gray-100 rounded-lg p-2.5 w-full'>
                <p className="text-sm">Reading (14)</p>
                <p className="text-xs text-muted-foreground pt-1">Collection of words</p>
              </div>
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className='flex w-full'>
              <div className='flex flex-col items-start transition-opacity duration-150 hover:bg-gray-100 rounded-lg p-2.5 w-full'>
                <p className="text-sm">Writings (0)</p>
                <p className="text-xs text-muted-foreground pt-1">Some of my words</p>
              </div>
            </a>
          </Link>
        </motion.div>
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h4 className="text-xs md:text-xs font-medium pt-0">Work</h4>
          <div className="space-y-4">
            <a href="https://cambrean.com" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer space-x-4 mt-1 transition-colors duration-150 hover:bg-slate-100 p-2.5 rounded-xl">
              <img src="/Cambrean.Logo.png" alt="Cambrean Logo" className="w-7 h-7 rounded-lg transition-transform duration-300 hover:scale-110" />
              <div className='flex-col'>
                <span className="text-sm cursor-pointer">Cambrean</span>
                <p className='text-sm text-muted-foreground'>Co-founder, CEO</p>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          className='pt-6'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h4 className="text-xs md:text-xs font-medium">Press</h4>
          <div className='space-y-4 pt-3'>
            {recognitionLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='block p-2 rounded-lg hover:bg-slate-100 transition-colors duration-150 cursor-pointer'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
              >
                <div className='cursor-pointer'>
                  <span className='text-sm text-slate-900 block'>{link.text}</span>
                  <p className='text-xs text-slate-500 mt-1'>{link.subtext}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.section
          className="pt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <h4 className='text-xs font-medium'>Find me</h4>
          <div className='flex space-x-2 pt-2'>
            <a href="mailto:me@davidsloane.xyz" className="inline-block text-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 p-2 rounded-md text-muted-foreground">email</a>
            <a href="https://github.com/dtsloane" className="inline-block text-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 p-2 rounded-md text-muted-foreground">Github</a>
            <a href="https://x.com/sloanerdog" className="inline-block text-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 p-2 rounded-md text-muted-foreground">X</a>
            <a href="https://www.linkedin.com/in/dtsloane/" className="inline-block text-sm cursor-pointer transition-colors duration-150 hover:bg-gray-100 p-2 rounded-md text-muted-foreground">LinkedIn</a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}