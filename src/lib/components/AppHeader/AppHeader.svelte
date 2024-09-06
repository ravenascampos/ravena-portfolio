<script lang="ts">
	import { onMount } from 'svelte';
	import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode.svelte';
	import MenuIcon from '@/lib/icons/MenuIcon.svelte';
	import CloseIcon from '@/lib/icons/CloseIcon.svelte';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<header
	class="fixed flex justify-center top-0 left-0 z-[100] w-full bg-light-bg dark:bg-dark-bg overflow-hidden"
>
	<nav
		class="flex items-center justify-between p-6 w-full mx-auto max-w-full lg:justify-around md:items-center"
	>
		<span class="text-body1 font-poppins font-h1 text-primary dark:text-secondary">
			RAVENA CAMPOS
		</span>
		<div
			class={`bg-light-bg dark:bg-dark-bg h-full inset-0 fixed top-[8%] text-center place-content-center 
              ${isMenuOpen ? 'flex' : 'hidden'} md:relative md:h-auto md:flex md:flex-row md:justify-center`}
		>
			<ul class="menu-mobile flex flex-col items-center gap-6 mt-16 md:mt-0 md:flex-row md:gap-8">
				<li>
					<a
						href="#about"
						class="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary"
						>Sobre</a
					>
				</li>
				<li>
					<a
						href="#skills"
						class="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary"
						>Skills</a
					>
				</li>
				<li>
					<a
						href="#experience"
						class="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary"
						>Experiências</a
					>
				</li>
				<li>
					<a
						href="#projects"
						class="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary"
						>Projetos</a
					>
				</li>
			</ul>
		</div>
		<div class="flex items-center">
			<ToggleDarkMode />
			<button on:click={toggleMenu} class="text-h3 text-primary dark:text-secondary md:hidden">
				{#if !isMenuOpen}
					<MenuIcon />
				{:else}
					<CloseIcon />
				{/if}
			</button>
		</div>
	</nav>
</header>
