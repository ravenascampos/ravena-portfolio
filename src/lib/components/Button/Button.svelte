<script lang="ts">
	export let className: string = '';
	export let href: string = '';
	export let target: string = '';
</script>

<a {target} {href} class={className}>
	<slot />
</a>
