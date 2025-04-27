import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.category.name}</span>
          </div>
          <h3 className="text-xl font-semibold line-clamp-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3">
            {post.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar.url}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium">{post.author.name}</p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
} 