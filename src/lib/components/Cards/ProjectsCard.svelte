<script lang="ts">
	import GithubIcon from '@/lib/icons/GithubIcon.svelte';
	import { githubProjects } from '@/stores/githubProjects';
	import type { GitHubProject } from '@/types/githubProjects.types';
	import { onMount } from 'svelte';
	import { isDarkMode } from '@/stores/darkModeStore';
	import Button from '../Button/Button.svelte';

	let projects: GitHubProject[] = [];
	const maxDescriptionLength = 10;

	onMount(() => {
		const unsubscribe = githubProjects.subscribe((value) => {
			projects = value;
		});
		console.log(projects);
		return () => unsubscribe();
	});

	function truncateDescription(description: string, maxLength: number): string {
		if (description.length > maxLength) {
			return description.substring(0, maxLength) + '...';
		}
		return description;
	}
</script>

<div class="mx-auto w-[300px] flex flex-col md:w-full md:grid md:grid-cols-2 md:gap-6">
	{#each projects as project, index (index)}
		<div
			class="flex flex-col md:grid md:grid-cols-2 md:w-full md:px-6 h-auto items-center border border-solid border-primary rounded-lg py-6 mb-8 dark:bg-dark-text-secondary"
		>
			{#if $isDarkMode}
				<img class="w-[200px] md:w-full" src="/images/projects-card-dark.svg" alt="Logo Dark" />
			{:else}
				<img class="w-[200px] md:w-full" src="/images/projects-card-light.svg" alt="Logo Light" />
			{/if}
			<div class="flex flex-col gap-4 items-center">
				<h4
					class="text-center text-light-text-secondary overflow-hidden text-ellipsis whitespace-nowrap"
				>
					{truncateDescription(project.name, maxDescriptionLength)}
				</h4>
				<Button target="_blank" className="secondary-button" href={project.html_url}>
					<GithubIcon />
					<span>Github</span>
				</Button>
			</div>
		</div>
	{/each}
</div>
