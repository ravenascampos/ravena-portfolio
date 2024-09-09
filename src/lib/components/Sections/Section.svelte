<script lang="ts">
	export let id: string = '';
</script>

<section {id} class="sections">
	<h2 class="text-primary dark:text-secondary mb-6">
		<slot name="title"></slot>
	</h2>
	<slot></slot>
</section>
