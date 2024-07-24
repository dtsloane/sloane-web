import React from 'react';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  date: string;
  content: string[];
  handwrittenNote?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, handwrittenNote }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
          <p className="text-gray-600 text-center mb-6">{date}</p>
          <div className="prose prose-lg mx-auto">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          {handwrittenNote && (
            <div className="mt-8 flex justify-end">
              <Image
                src={handwrittenNote}
                alt="Handwritten note"
                width={200}
                height={100}
                className="transform -rotate-6"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;