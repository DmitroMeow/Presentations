<script lang="ts">
	import { onMount } from 'svelte';

	// Import your Svelte 5 slide components using the $lib shortcut
	import Slides from '$lib/Sch10.svelte';

	// Explicitly point to node_modules to bypass package.json export conditions
	import '../../node_modules/reveal.js/dist/reveal.css';
	import '../../node_modules/reveal.js/dist/theme/black.css';

	onMount(async () => {
		const Reveal = (await import('reveal.js')).default;
		const deck = new Reveal({
			hash: true,
			transition: 'slide',
			controlsLayout: 'bottom-right',
			progress: false
		});
		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		<Slides />
	</div>
</div>

<style>
	:global(html, body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
