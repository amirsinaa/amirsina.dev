export type Article = {
	id: string
	language: string
	title: string
	keywords: string
	summary: string
	markdown: string
	readFrom: [
		{
			id: number
			articleSource: string
			articleLink: string
		},
		{
			id: number
			articleSource: string
			articleLink: string
		},
	]
}
