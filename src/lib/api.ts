import { BlogPost } from '@/types/blog';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(endpoint: string) {
  const res = await fetch(`${API_URL}/api${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // Revalidate every minute
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  const json = await res.json();
  return json.data;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await fetchAPI('/articles?populate=*');
  return data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    description: item.attributes.description,
    content: item.attributes.content,
    publishedAt: item.attributes.publishedAt,
    author: {
      id: item.attributes.author.data.id,
      name: item.attributes.author.data.attributes.name,
      role: item.attributes.author.data.attributes.role,
      avatar: {
        url: `${API_URL}${item.attributes.author.data.attributes.avatar.data.attributes.url}`,
      },
    },
    category: {
      id: item.attributes.category.data.id,
      name: item.attributes.category.data.attributes.name,
      slug: item.attributes.category.data.attributes.slug,
    },
    coverImage: {
      url: `${API_URL}${item.attributes.coverImage.data.attributes.url}`,
      width: item.attributes.coverImage.data.attributes.width,
      height: item.attributes.coverImage.data.attributes.height,
      alt: item.attributes.coverImage.data.attributes.alternativeText || '',
    },
    seo: {
      metaTitle: item.attributes.seo?.metaTitle || item.attributes.title,
      metaDescription: item.attributes.seo?.metaDescription || item.attributes.description,
      keywords: item.attributes.seo?.keywords || [],
    },
  }));
}

export async function fetchBlogPost(slug: string): Promise<BlogPost> {
  const data = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*`);
  if (!data.length) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }
  const item = data[0];
  return {
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    description: item.attributes.description,
    content: item.attributes.content,
    publishedAt: item.attributes.publishedAt,
    author: {
      id: item.attributes.author.data.id,
      name: item.attributes.author.data.attributes.name,
      role: item.attributes.author.data.attributes.role,
      avatar: {
        url: `${API_URL}${item.attributes.author.data.attributes.avatar.data.attributes.url}`,
      },
    },
    category: {
      id: item.attributes.category.data.id,
      name: item.attributes.category.data.attributes.name,
      slug: item.attributes.category.data.attributes.slug,
    },
    coverImage: {
      url: `${API_URL}${item.attributes.coverImage.data.attributes.url}`,
      width: item.attributes.coverImage.data.attributes.width,
      height: item.attributes.coverImage.data.attributes.height,
      alt: item.attributes.coverImage.data.attributes.alternativeText || '',
    },
    seo: {
      metaTitle: item.attributes.seo?.metaTitle || item.attributes.title,
      metaDescription: item.attributes.seo?.metaDescription || item.attributes.description,
      keywords: item.attributes.seo?.keywords || [],
    },
  };
} 