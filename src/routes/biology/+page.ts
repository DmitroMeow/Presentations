import { definePageMetaTags } from 'svelte-meta-tags';

export const load = () => {
	const pageTags = definePageMetaTags({
		title: 'Презинтація / Броварський Ліцей №10',
		openGraph: {
			title: 'Презинтація / Броварський Ліцей №10'
		}
	});

	return { ...pageTags };
};
