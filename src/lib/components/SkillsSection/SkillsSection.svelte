<script>
	import ProgressSkills from '../ProgressSkills/ProgressSkills.svelte';
	import Section from '../Sections/Section.svelte';
	import { skills } from '../../../data/skillsData';
</script>

<Section id="skills">
	<h2 slot="title">MINHAS SKILLS</h2>
	<div class="mx-auto">
		{#each skills as skill, index (index)}
			<ProgressSkills progress={skill.progress} label={skill.label} />
		{/each}
	</div>
</Section>
