import { writable } from 'svelte/store';
import type { GitHubProject } from '@/types/githubProjects.types';

export const githubProjects = writable<GitHubProject[]>([]);

export const fetchGitHubProjects = async () => {
	const token = import.meta.env.VITE_GITHUB_TOKEN;
	let allRepos: GitHubProject[] = [];
	let page = 1;
	const perPage = 100;

	while (true) {
		const response = await fetch(
			`https://api.github.com/users/ravenascampos/repos?page=${page}&per_page=${perPage}`,
			{
				headers: {
					Authorization: `token ${token}`
				}
			}
		);

		if (response.ok) {
			const data: GitHubProject[] = await response.json();
			if (data.length === 0) break;
			allRepos = [...allRepos, ...data];
			page++;
		} else {
			console.error('Failed to fetch GitHub projects');
			break;
		}
	}

	githubProjects.set(allRepos);
};
