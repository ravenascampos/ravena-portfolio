<script lang="ts">
	import { isDarkMode } from '@/stores/darkModeStore';
	let darkModeValue: boolean;

	$isDarkMode;
</script>

<section class="md:grid md:grid-cols-2 md:justify-center md:items-center">
	<div class="flex flex-col pl-4 md:pl-8">
		<h4 class="text-light-text-secondary dark:text-dark-text-secondary">Frontend Developer</h4>
		<h1 class=" text-primary dark:text-secondary">RAVENA CAMPOS</h1>
		<span class="caption text-light-text dark:text-dark-text text-end mb-4 pr-4 md:pr-10"
			>~mas não aquela dos Jovens Titãs~</span
		>
	</div>
	<div class="mb-8 flex flex-col items-end justify-end">
		{#if $isDarkMode}
			<img src="/images/ravena-dark-mode.png" alt="Logo Dark" />
		{:else}
			<img src="/images/ravena-light-mode.png" alt="Logo Light" />
		{/if}
	</div>
</section>
