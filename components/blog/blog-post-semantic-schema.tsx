import SiteConfig from '@/configs/index'
import Head from 'next/head'

export default function BlogPostSemanticSchema({ data }) {
	return (
		<Head>
			<script
				key='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: data.title,
						description: data.summary,
						author: [
							{
								'@type': 'Person',
								name: SiteConfig.author.name,
							},
						],
					}),
				}}
			/>
		</Head>
	)
}
