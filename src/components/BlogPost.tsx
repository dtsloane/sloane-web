import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <span className="text-sm text-gray-400 mb-4 block">{date}</span>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
          // 
        }}
        className="prose prose-sm prose-gray text-gray-700"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
