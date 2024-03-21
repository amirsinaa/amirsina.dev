import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Source = {
	id: number | string
	articleSource: string
	articleLink: string
}
export type Post = {
	id: string | number
	language: string
	keywords: string
	summary: string
	title: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	markdown: (string & MDXRemoteSerializeResult) | any
	readFrom: Source[]
	host?: string
}

export type BlogPosts = Post[]
