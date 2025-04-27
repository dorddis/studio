import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchBlogPost } from '@/lib/api';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await fetchBlogPost(params.slug);
    return {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      keywords: post.seo.keywords,
      openGraph: {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author.name],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await fetchBlogPost(params.slug);

    return (
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
              <span>•</span>
              <span>{post.category.name}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {post.description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
} 