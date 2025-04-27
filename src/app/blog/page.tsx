import { Metadata } from 'next';
import { BlogCard } from '@/components/blog/BlogCard';
import { fetchBlogPosts } from '@/lib/api';
import type { BlogPost } from '@/types/blog';

export const metadata: Metadata = {
  title: 'Blog - Insights on Voter Data and Market Research',
  description: 'Explore our latest articles on voter data analysis, market research methodologies, and electoral insights.',
  openGraph: {
    title: 'Blog - VoterData Insights',
    description: 'Explore our latest articles on voter data analysis, market research methodologies, and electoral insights.',
  }
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Latest Insights
        </h1>
        <p className="text-lg text-gray-600">
          Expert analysis on voter data, market research, and electoral trends
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 