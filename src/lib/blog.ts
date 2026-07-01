import { getCollection, type CollectionEntry } from "astro:content";

export const BLOG_POSTS_PER_PAGE = 20;

export type BlogPost = CollectionEntry<"blog">;

export interface BlogPageData {
  posts: BlogPost[];
  totalPosts: number;
  currentPage: number;
  lastPage: number;
  prevUrl?: string;
  nextUrl?: string;
  pageUrls: {
    page: number;
    url: string;
  }[];
}

export async function getSortedBlogPosts() {
  const posts = await getCollection("blog");

  return [...posts].sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function getBlogPageUrl(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function getLastBlogPage(totalPosts: number) {
  return Math.max(1, Math.ceil(totalPosts / BLOG_POSTS_PER_PAGE));
}

export function getBlogPageData(
  posts: BlogPost[],
  currentPage: number,
): BlogPageData {
  const totalPosts = posts.length;
  const lastPage = getLastBlogPage(totalPosts);
  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  const end = start + BLOG_POSTS_PER_PAGE;

  return {
    posts: posts.slice(start, end),
    totalPosts,
    currentPage,
    lastPage,
    prevUrl: currentPage > 1 ? getBlogPageUrl(currentPage - 1) : undefined,
    nextUrl: currentPage < lastPage ? getBlogPageUrl(currentPage + 1) : undefined,
    pageUrls: Array.from({ length: lastPage }, (_, index) => {
      const page = index + 1;

      return {
        page,
        url: getBlogPageUrl(page),
      };
    }),
  };
}
