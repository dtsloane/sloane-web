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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.slug} className="py-4">
               <Link href={`/blog/${post.slug}`} className="text-2xl font-bold text-blue-500 hover:underline">
                    {post.title}
                </Link>
                <p className="text-gray-600">{post.date}</p>
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
