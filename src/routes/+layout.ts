// import { defineBaseMetaTags } from 'svelte-meta-tags';
// export const prerender = true;
// export const trailingSlash = 'always';
// export const load = ({ url }) => {
// 	const defaultTitle = 'PEFUR - Меблі під замовлення та якісна фурнітура';
// 	const cleanedUrl = new URL(url.pathname, url.origin).href;
// 	const metaImageUrl = new URL('/meta.webp', url.origin).href;
// 	const defaultDescription =
// 		'Надійний інтернет-магазин меблів та фурнітури у Броварах. Власне виробництво, кастомні меблі під замовлення напряму від заводу без посередників.';
// 	const baseTags = defineBaseMetaTags({
// 		title: 'Default',
// 		titleTemplate: '%s - Інтернет магазин PEFUR',
// 		description: defaultDescription,
// 		canonical: new URL(url.pathname, url.origin).href, // creates a cleaned up URL (without hashes or query params) from your current URL
// 		openGraph: {
// 			type: 'website',
// 			url: new URL(url.pathname, url.origin).href,
// 			locale: 'uk_UA',
// 			title: defaultTitle,
// 			description: defaultDescription,
// 			siteName: 'Магазин меблів PEFUR',
// 			images: [
// 				{
// 					url: metaImageUrl,
// 					alt: 'Лого PEFUR',
// 					width: 1200,
// 					height: 630,
// 					secureUrl: cleanedUrl,
// 					type: 'image/webp'
// 				}
// 			]
// 		},
// 		twitter: {
// 			cardType: 'summary_large_image',
// 			site: 'Магазин меблів PEFUR',
// 			creator: 'PEFUR (instagram, facebook, website)',
// 			title: defaultTitle,
// 			description: defaultDescription,
// 			image: metaImageUrl,
// 			imageAlt: 'Лого PEFUR'
// 		}
// 	});

// 	return { ...baseTags };
// };
