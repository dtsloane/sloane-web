"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  handwrittenNote?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, handwrittenNote }) => {
  return (
    <div className="flex flex-col items-center justify-start p-8 md:p-32 min-h-screen overflow-auto bg-white">
      <motion.div
        className="flex flex-col items-start space-y-2 w-full md:max-w-2xl text-left py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-sm text-gray-600"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {date}
        </motion.p>
        <motion.div
          className="pt-6 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </motion.div>
        {handwrittenNote && (
          <motion.div
            className="mt-8 flex justify-end w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Image
              src={handwrittenNote}
              alt="Handwritten note"
              width={200}
              height={100}
              className="transform -rotate-6"
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogPost;