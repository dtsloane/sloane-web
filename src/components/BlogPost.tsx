import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <span className="text-sm text-gray-500 mb-4 block">{date}</span>
      <div className="prose prose-sm prose-gray">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;