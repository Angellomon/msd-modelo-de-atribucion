<script lang="ts">
	import { selectedFranchisesKeys } from "$lib/store";
	import { onDestroy, onMount } from "svelte";
	import type { Franchise } from "./data";

	export let franchises: Franchise[];

	let _franchises: (Franchise & { checked: boolean })[] = [];

	onMount(() => {
		_franchises = franchises.map((m) => ({ ...m, checked: true } as any));

		console.log(_franchises);

		selectedFranchisesKeys.set(franchises.map((m) => m.key));
	});

	onDestroy(() => {
		selectedFranchisesKeys.set([]);
	});

	$: selectedFranchisesKeys.set(_franchises.filter((m) => m.checked).map((m) => m.key));
</script>

<div class="menu">
	<div class="title">FRANCHISES</div>
	<ul>
		{#each _franchises as franchise (franchise.key)}
			<li>
				<label for="materials" />{franchise.name}
				<input id="materials" name="materials" type="checkbox" bind:checked={franchise.checked} />
			</li>
		{/each}
	</ul>
</div>

<style>
	div.title {
		color: var(--verde-vivo-msd);
		font-family: "Invention Bold";
	}

	div.menu {
		font-size: 1.5rem;
		margin-left: 30px;
	}

	ul {
		width: 20vw;
	}

	li {
		position: relative;
	}

	li input {
		position: absolute;
		right: 0;
	}
</style>
