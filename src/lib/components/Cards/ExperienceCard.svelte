<script lang="ts">
	export let title: string;
	export let enterprise: string | undefined;
	export let year: string;
	export let description: string[];
</script>

<div class="card">
	<div class="info">
		<h3 class="title dark:text-secondary text-primary mb-2">{title}</h3>
		<span class="label dark:text-dark-text-secondary text-light-text-secondary mb-2">
			{enterprise}
		</span>
		<span class="caption dark:text-secondary text-primary mb-4">{year}</span>
		<ul>
			{#each description as item, index (index)}
				<li class="body2 dark:text-dark-text text-light-text mb-2">{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.card {
		@apply relative max-w-[700px];
	}

	.card:nth-child(odd) {
		@apply pt-8 pb-8 pl-8;
	}

	.card:nth-child(even) {
		@apply pt-8 pr-8 pb-8;
	}

	.card::before {
		content: '';
		@apply border-primary dark:border-secondary absolute w-[50%];
	}

	.card:nth-child(odd)::before {
		left: 0px;
		top: -4.5px;
		bottom: -4.5px;
		border-width: 5px 0 5px 5px;
		border-radius: 50px 0 0 50px;
	}

	@media only screen and (max-width: 400px) {
		.card:nth-child(odd)::before {
			top: -5px;
			bottom: -5px;
		}
	}

	.card:nth-child(even)::before {
		right: 0;
		top: 0;
		bottom: 0;
		border-width: 5px 5px 5px 0;
		border-radius: 0 50px 50px 0;
	}

	.card:first-child::before {
		border-top: 0;
	}

	.card:last-child:nth-child(odd)::before {
		border-bottom: 0;
	}

	.card:last-child:nth-child(even)::before {
		border-bottom: 0;
	}

	.info {
		@apply flex flex-col p-[10px] dark:bg-dark-bg bg-light-bg dark:text-dark-text text-light-text;
		border-radius: 10px;
	}

	.title {
		@apply relative;
	}

	.title::before {
		content: '';
		@apply absolute bg-light-bg dark:bg-dark-bg rounded-full border-primary dark:border-secondary w-[15px] h-[15px];
		border: 3px solid;
	}

	.card:nth-child(even) > .info > .title {
		text-align: right;
	}

	.card:nth-child(even) {
		text-align: right;
	}

	.card:nth-child(odd) > .info > .title::before {
		left: -46px;
	}

	.card:nth-child(even) > .info > .title::before {
		right: -46px;
	}
</style>
