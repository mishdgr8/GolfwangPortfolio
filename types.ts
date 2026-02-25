
export type ContentType = 'tweet' | 'article';

export interface Metric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  type: ContentType;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  metrics?: Metric[];
  imageUrl?: string;
  externalLink: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  excerpt: string;
  longDescription?: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  date: string;
  featured?: boolean;
}
