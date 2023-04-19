export function formatBlogPostUrl(title: string): string {
  return title.replace(/\s+/g, '-').toLowerCase();
};
