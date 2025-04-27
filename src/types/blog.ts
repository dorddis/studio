export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: {
    url: string;
  };
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  author: Author;
  category: Category;
  coverImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
} 