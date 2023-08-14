import type { Article } from '@/components/blog/types/article'

export function filterArticleSource(sourceId: string, source): Article {
  return source.find(item => String(item.id) === String(sourceId))
}