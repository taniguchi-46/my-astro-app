import { getCollection, type CollectionEntry } from "astro:content";

export const BLOG_POSTS_PER_PAGE = 15;

export type BlogPost = CollectionEntry<"blog">;

export type PaginationItem =
  | {
    type: "page";
    page: number;
    url: string;
  }
  | {
    type: "ellipsis";
    key: string;
  };

export interface BlogPageData {
  posts: BlogPost[];
  totalPosts: number;
  currentPage: number;
  lastPage: number;
  prevUrl?: string;
  nextUrl?: string;
  paginationItems: PaginationItem[];
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

export function getPaginationItems(
  currentPage: number,
  lastPage: number,
): PaginationItem[] {
  const visiblePages = new Set<number>([1, lastPage]);
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(lastPage, currentPage + 2);

  for (let page = start; page <= end; page += 1) {
    visiblePages.add(page);
  }

  const pages = [...visiblePages].sort((a, b) => a - b);

  return pages.flatMap((page, index) => {
    const previousPage = pages[index - 1];
    const items: PaginationItem[] = [];

    if (previousPage && page - previousPage > 1) {
      items.push({ type: "ellipsis", key: `${previousPage}-${page}` });
    }

    items.push({
      type: "page",
      page,
      url: getBlogPageUrl(page),
    });

    return items;
  });
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
    paginationItems: getPaginationItems(currentPage, lastPage),
  };
}
