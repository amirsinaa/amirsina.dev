import {
	FaGithub,
	FaDev,
	FaLinkedin,
	FaTwitter,
	FaMedium,
} from 'react-icons/fa'

const SiteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} Amirsina Shadkami. All Rights Reserved.`,
	author: {
		name: 'Amirsina Shadkami',
		about:
			'I am an accomplished Front-end developer with extensive experience in (JavaScript, Reactjs), modern web paradigms  (e.g., PWA, JAMstack, SPA, MPA) , widely used frameworks and some other various modern web technologies and tools.',
		accounts: [
			{
				id: 'authors-social-1',
				url: 'https://github.com/amirsinaa',
				label: 'Github Account',
				type: 'gray',
				icon: <FaGithub />,
			},
			{
				id: 'authors-social-2',
				url: 'https://twitter.com/amirsiinaa',
				label: 'Twitter Account',
				type: 'twitter',
				icon: <FaTwitter />,
			},
			{
				id: 'authors-social-3',
				url: 'https://dev.to/amirsina/',
				label: 'Dev Account',
				type: 'gray',
				icon: <FaDev />,
			},
			{
				id: 'authors-social-4',
				url: 'https://www.linkedin.com/in/amirsina-shadkami/',
				label: 'LinkedIn Account',
				type: 'linkedin',
				icon: <FaLinkedin />,
			},
			{
				id: 'authors-social-5',
				url: 'https://medium.com/@amirsinaa',
				label: 'Medium Account',
				type: 'gray',
				icon: <FaMedium />,
			},
		],
	},
}

export default SiteConfig
