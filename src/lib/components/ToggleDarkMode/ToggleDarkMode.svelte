<script lang="ts">
	import { onMount } from 'svelte';
	import LightModeIcon from '@/lib/icons/LightModeIcon.svelte';
	import DarkModeIcon from '@/lib/icons/DarkModeIcon.svelte';
	let isDarkMode = false;

	const toggleDarkMode = () => {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<button
	on:click={toggleDarkMode}
	class="text-h3 p-2 bg-light-bg dark:bg-dark-bg text-primary dark:text-secondary rounded-md"
>
	{#if isDarkMode}
		<DarkModeIcon />
	{:else}
		<LightModeIcon />
	{/if}
</button>
