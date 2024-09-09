<script lang="ts">
	import GithubIcon from '@/lib/icons/GithubIcon.svelte';
	import { githubProjects } from '@/stores/githubProjects';
	import type { GitHubProject } from '@/types/githubProjects.types';
	import { onMount } from 'svelte';
	import { isDarkMode } from '@/stores/darkModeStore';
	import Button from '../Button/Button.svelte';

	let projects: GitHubProject[] = [];

	onMount(() => {
		const unsubscribe = githubProjects.subscribe((value) => {
			projects = value;
		});
		console.log(projects);
		return () => unsubscribe();
	});
</script>

<div class="mx-auto grid md:grid-cols-2 md:gap-6">
	{#each projects as project, index (index)}
		<div
			class="grid grid-cols-2 w-full h-auto items-center gap-4 rounded-lg py-6 px-8 mb-8 dark:bg-dark-text-secondary"
		>
			{#if $isDarkMode}
				<img src="/images/projects-card-dark.svg" alt="Logo Dark" />
			{:else}
				<img src="/images/projects-card-light.svg" alt="Logo Light" />
			{/if}
			<div class="flex flex-col gap-4 items-center">
				<h4 class="text-center text-light-text-secondary">
					{project.name}
				</h4>
				<p class="body1 text-center text-light-text description">
					{project.description}
				</p>
				<Button target="_blank" className="secondary-button" href={project.html_url}>
					<GithubIcon />
					<span>Github</span>
				</Button>
			</div>
		</div>
	{/each}
</div>

<style>
	.description {
		@apply overflow-hidden text-ellipsis whitespace-nowrap; /* Tailwind CSS utilities */
		max-width: 300px; /* Ensure it truncates properly within the container */
	}
</style>
