import { defineBaseMetaTags } from 'svelte-meta-tags';
export const prerender = true;
export const trailingSlash = 'always';
export const load = ({ url }) => {
	const defaultTitle = 'Презинтації Курочки Дмитра';
	const cleanedUrl = new URL(url.pathname, url.origin).href;
	const metaImageUrl = new URL('/meta.webp', url.origin).href;
	const defaultDescription = 'Тут я викладаю всі мої презинтації які я роблю для своєї школи';
	const baseTags = defineBaseMetaTags({
		title: 'Default',
		titleTemplate: 'Презинтації Курочки Дмитра',
		description: defaultDescription,
		canonical: new URL(url.pathname, url.origin).href, // creates a cleaned up URL (without hashes or query params) from your current URL
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'uk_UA',
			title: defaultTitle,
			description: defaultDescription,
			siteName: 'Презинтації Курочки Дмитра',
			images: [
				{
					url: metaImageUrl,
					alt: 'Лого Сайту',
					width: 1200,
					height: 630,
					secureUrl: cleanedUrl,
					type: 'image/webp'
				}
			]
		},
		twitter: {
			cardType: 'summary_large_image',
			site: 'Презинтації Курочки Дмитра',
			creator: 'Курочка Дмитро',
			title: defaultTitle,
			description: defaultDescription,
			image: metaImageUrl,
			imageAlt: 'Лого Сайту'
		}
	});

	return { ...baseTags };
};
