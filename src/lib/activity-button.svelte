<script lang="ts">
	export let path: string;
	export let width: string = '100%';
</script>

<a href={path} style="width: {width};">
	<button style="width: {width};">
		<slot />
	</button>
</a>

<style>
	a {
		text-decoration: none;
	}

	button {
		background-color: var(--verde-vivo-msd);
		color: var(--azul-msd);

		border: 5px solid var(--verde-vivo-msd);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		padding: 5vh;

		cursor: pointer;

		font-size: 5vh;
	}

	button:hover {
		border: 5px solid var(--azul-msd);
	}
</style>
