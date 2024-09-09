<script lang="ts">
	import ExperienceCard from '../Cards/ExperienceCard.svelte';
	import { experience } from '../../../data/experienceData';

	function convertDescription(description: Record<number, string>): string[] {
		return Object.values(description);
	}
</script>

<div class="timeline">
	<div class="outer">
		{#each experience as exp, index (index)}
			<ExperienceCard
				title={exp.title}
				enterprise={exp.enterprise}
				year={exp.year}
				description={convertDescription(exp.description)}
			/>
		{/each}
	</div>
</div>

<style>
	.timeline {
		background: var(--primary-color);
		margin: 20px auto;
		padding: 20px;
	}
</style>
