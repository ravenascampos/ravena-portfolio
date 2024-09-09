<script>
	import { isDarkMode } from '@/stores/darkModeStore';
	import Section from '../Sections/Section.svelte';
	import Button from '../Button/Button.svelte';
</script>

<Section id="projects">
	<h2 slot="title">MEUS PROJETOS</h2>
	<div class="flex flex-col md:grid md:grid-cols-2 md:gap-6 md:items-center">
		{#if $isDarkMode}
			<img src="/images/projects-section-dark.svg" alt="Logo Dark" />
		{:else}
			<img src="/images/projects-section-light.svg" alt="Logo Light" />
		{/if}
		<div class="flex flex-col md:px-4">
			<span class="label mb-6 mt-6 dark:text-dark-text text-light-text">
				Confira alguns dos meus principais projetos desenvolvidos, que demonstram minha habilidade
				em criar soluções inovadoras utilizando diversas tecnologias modernas.
			</span>
			<Button className="secondary-button" href="/my-projects">
				<span>Ver projetos</span>
			</Button>
		</div>
	</div>
</Section>
