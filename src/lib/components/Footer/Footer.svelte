<script lang="ts">
	import GithubIcon from '@/lib/icons/GithubIcon.svelte';
	import LinkedinIcon from '@/lib/icons/LinkedinIcon.svelte';
</script>

<footer class="flex flex-row items-center mt-[80px] mb-10 justify-center w-full mx-auto max-w-full">
	<div class="flex items-center justify-center gap-4 text-primary dark:text-secondary">
		<div class="flex gap-2">
			<a href="https://github.com/ravenascampos" target="_blank">
				<GithubIcon className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]" />
			</a>
			<a href="https://www.linkedin.com/in/ravenascampos/" target="_blank">
				<LinkedinIcon className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]" />
			</a>
		</div>
		<span class="text-body2 font-h1 font-sans">Desenvolvido por Ravena Campos</span>
	</div>
</footer>
