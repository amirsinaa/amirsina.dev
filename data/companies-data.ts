export const CompaniesData = [
	{
		id: 701,
		title: 'Architects of Communication Age Co.',
		alt: 'ACA Company logo',
		role: 'Senior Frontend Developer',
		period: '2016 - Present',
		logo: '/assets/images/logo/aca.png',
		about:
			'ACACO is a custom software development and consulting company focusing on web and mobile software development. In this company, many projects have been done in different fields, most of which have been done by the following two main systems, and I have participated in them.',
		projects: [
			{
				id: 7011,
				title: 'UCMS',
				alt: 'UCMS Logo',
				description:
					'UCMS is a professional CMS for universities and educational institutions that includes necessary features for the activities and programs of a reputable center.',
				logo: '/assets/images/projects/ucms.png',
			},
			{
				id: 7012,
				title: 'Epage',
				alt: 'Epage Logo',
				description:
					'ePage is an online site content management service. You can build and manage a completely dynamic dynamic website without having to specialize in web design. ePage is suitable for small personal businesses that do not have high technical knowledge',
				logo: '/assets/images/projects/epage.png',
			},
		],
		challenges: {
			intro:
				'During my career at ACA, I faced many different challenges and issues that resulted in learning new technologies and expanding my technical knowledge. Some of these challenges were:',
			data: [
				{
					id: 'ch-aca-1',
					text: 'A dynamic solution for customers to design their site: The UCMS content management system was not static, but for a long time customer landing pages were implemented by calling a set of system widgets and various templates were implemented for relatively small changes or a customers subsites.We realized the need to come up with a solution so that we could provide the template build dynamically to the customer.At first, it was very vague but after testing and reviewing various solutions, I was able to come up with a prototype of the "Page Builder System", which included tools for dynamic page building based on Bootstrap UI framework principles.The UCMS system had plenty of widgets, but in a diffused and decentralized way, so to make the real power of the system available in one place I started rewriting multipurpose widgets from commonly used UCMS system modules so that users need only one widget from each module.A multipurpose widget that could do all the personalizations users needed, including changes in size, color, display models, etc.The original prototype was completely acceptable and more features were gradually added to it.The technologies that I learned by solving this problem and that helped me a lot in dynamizing the process were: ES6, Reactjs',
				},
				{
					id: 'ch-aca-2',
					text: 'Non-Native mobile application: One of our customers ( a university ) had an Android application for their students that was written in Java, in which a Webview was used and our system was loaded into an in-app-browser. But the developer was no longer able to add more features to it and there was no IOS version available, on the other hand in Iran, there were many complications and problems to publishing an application in the Apple App Store, so considering all these issues, we chose the PWA Approach. The challenge with this choice was that our system did not include an API. The result was the implementation of Restful API and GraphQL on the system and an advanced PWA that had various features such as authentication, offline accessibility, cache system, etc. Technologies that this project made me learn: Vuejs, Nuxtjs, PWA, TailwindCSS, Docker, GraphQL',
				},
				{
					id: 'ch-aca-3',
					text: 'Need to update the system stack: Over time, we felt the need to update our system stack and its technologies. The approach we took was Headless CMS. First, the APIs that we implemented before in the project were extended. And for Front-end, I implemented an initial prototype with the help of React. Since Reactjs was not suitable for things like SEO because of client-side rendering, I rewrote the original prototype that was in React in Nextjs so that we could take advantage of the server-side rendering features. Technologies that this project made me learn: Reactjs, Nextjs, Chakra-UI, PM2, Docker, SSR, Apollo GraphQL',
				},
			],
		},
	},
]
