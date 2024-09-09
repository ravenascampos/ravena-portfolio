<script lang="ts">
	import '../app.css';
	import AppHeader from './../lib/components/AppHeader/AppHeader.svelte';
	import Footer from '@/lib/components/Footer/Footer.svelte';
	import { fetchGitHubProjects } from '@/stores/githubProjects';
	fetchGitHubProjects();
</script>

<AppHeader />
<div class="container">
	<slot></slot>
</div>
<Footer />
