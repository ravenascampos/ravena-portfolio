import type { GitHubProject } from '@/types/githubProjects.types';
import { writable } from 'svelte/store';

export const githubProjects = writable<GitHubProject[]>([]);

export const fetchGitHubProjects = async () => {
	const token = import.meta.env.VITE_GITHUB_TOKEN;
	const response = await fetch('https://api.github.com/users/ravenascampos/repos', {
		headers: {
			Authorization: `token ${token}`
		}
	});

	if (response.ok) {
		const data = await response.json();
		githubProjects.set(data);
	} else {
		console.error('Failed to fetch GitHub projects');
	}
};
