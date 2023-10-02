<script lang="ts">
	export let path: string;
</script>

<a href={path}>
	<button>
		<slot />
	</button>
</a>

<style>
	:root {
		--button-color: var(--azul-msd);
	}
	a {
		text-decoration: none;
	}

	button {
		background-color: var(--verde-vivo-msd);
		color: var(--button-color);

		border: 5px solid var(--verde-vivo-msd);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		padding: 10px 30px;

		font-size: 1.8rem;

		min-width: 20vw;
	}

	button:hover {
		border: 5px solid white;
		color: white;
	}
</style>
