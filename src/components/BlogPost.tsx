import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <span className="text-sm text-gray-600 mb-4 block">{date}</span>
      <ReactMarkdown
        components={{
          p: ({ children }) => <>{children}</>
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;