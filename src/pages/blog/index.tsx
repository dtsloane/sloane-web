import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import '../../app/globals.css';


interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-start p-6 md:p-32 min-h-screen overflow-auto">
        <h1 className="items-start text-md font-md text-left mb-6">Blog</h1>
      <div className="flex flex-col items-start transition-opacity duration-150 hover:bg-gray-100 rounded-lg">
        <div className="px-6 py-2">
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.slug} className="py-4">
               <Link href={`/blog/${post.slug}`} className="text-md font-bold text-blue-500 hover:underline">
                    {post.title}
                </Link>
                <p className="text-gray-400 text-sm">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
