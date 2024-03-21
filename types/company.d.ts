export type Challenge = {
	intro: string
	data: [
		{
			id: string
			text: string
		},
	]
}
export type Project = {
	id: number
	title: string
	alt: string
	description: string
	logo: string
}
export type Company = {
	id: number
	title: string
	alt: string
	role: string
	period: string
	logo: string
	about: string
	projects: Project[]
	challenges: Challenge
}

export type Companies = Company[]
