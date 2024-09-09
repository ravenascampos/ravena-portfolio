<script lang="ts">
	export let progress: number;
	export let label: string;
</script>

<div class="flex flex-col items-start justify-center w-full mb-4">
	<span class="label text-light-text dark:text-dark-text mb-2">{label}</span>
	<div class="container-bar bg-secondary w-[250px] md:w-[500px] lg:w-[700px]">
		<div class="progress-bar" style="width: {progress}%"></div>
	</div>
</div>

<style>
	.container-bar {
		height: 25px;
		position: relative;
		border-radius: 20px;
	}

	.progress-bar {
		position: absolute;
		height: 100%;
		border-radius: 20px;
		background: #c874b2;
		animation: progress-animation 5s both;
	}

	@keyframes progress-animation {
		0% {
			width: 0%;
		}
		100% {
			width: progress;
		}
	}
</style>
