<script lang="ts">
	export let path: string;
</script>

<a href={path}>
	<button>
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

		padding: 10vh 10vw;

		cursor: pointer;

		font-size: 8vh;
	}

	button:hover {
		border: 5px solid var(--azul-msd);
	}
</style>
