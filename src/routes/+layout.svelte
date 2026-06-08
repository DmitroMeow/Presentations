<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	// let { children } = $props();

	let { data, children } = $props();

	import { MetaTags, deepMerge } from 'svelte-meta-tags';

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
