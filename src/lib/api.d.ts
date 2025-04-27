import { BlogPost } from '@/types/blog';

export function fetchBlogPosts(): Promise<BlogPost[]>;
export function fetchBlogPost(slug: string): Promise<BlogPost>; 