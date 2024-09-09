<script lang="ts">
	import GithubIcon from '@/lib/icons/GithubIcon.svelte';
	import Button from '../Button/Button.svelte';
	import LinkedinIcon from '@/lib/icons/LinkedinIcon.svelte';
	import Section from '../Sections/Section.svelte';
</script>

<Section id="about">
	<h2 slot="title">SOBRE MIM</h2>
	<div class="flex flex-col">
		<p class="body1 text-light-text dark:text-dark-text mb-2">
			Meu nome é Ravena Sousa Campos e sou desenvolvedora frontend, nascida e criada em Manaus/AM,
			atualmente morando em Santo André/SP. Tenho experiência em tecnologias frontend e, atualmente,
			estou estudando .NET para me tornar uma
			<span class="font-h1">desenvolvedora fullstack</span>. Sempre em busca de novos desafios,
			participo de comunidades de programação que promovem o empoderamento de mulheres, onde
			encontro inspiração e oportunidade de crescer profissionalmente.
		</p>
		<p class="body1 text-light-text dark:text-dark-text">
			Além das minhas habilidades técnicas, acredito na importância da autorreflexão e na busca
			constante pela excelência. No meu tempo livre, gosto de montar quebra-cabeças, jogar World of
			Warcraft e acompanhar One Piece, hobbies que refletem minha paixão por desafios e minha
			determinação em alcançar meus objetivos.
		</p>
		<div class="flex flex-col justify-center items-center gap-4 mt-8 mb-6 md:flex-row">
			<Button target="_blank" className="primary-button" href="https://github.com/ravenascampos">
				<GithubIcon />
				<span>Github</span>
			</Button>
			<Button
				target="_blank"
				className="primary-button"
				href="https://www.linkedin.com/in/ravenascampos"
			>
				<LinkedinIcon />
				<span>LinkedIN</span>
			</Button>
		</div>
	</div>
</Section>

<style>
	/* your styles go here */
</style>
