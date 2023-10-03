<script lang="ts">
	import { selectedMaterialKeys } from "$lib/store";
	import { onDestroy, onMount } from "svelte";
	import type { Material } from "./data";

	export let materials: Material[];

	let _materials: (Material & { checked: boolean })[] = [];

	onMount(() => {
		_materials = materials.map((m) => ({ ...m, checked: true } as any));

		console.log(_materials);

		selectedMaterialKeys.set(materials.map((m) => m.key));
	});

	onDestroy(() => {
		selectedMaterialKeys.set([]);
	});

	$: selectedMaterialKeys.set(_materials.filter((m) => m.checked).map((m) => m.key));
</script>

<div class="menu">
	<div class="title">MATERIAL</div>
	<ul>
		{#each _materials as material (material.key)}
			<li>
				<label for="materials" />{material.name}
				<input id="materials" name="materials" type="checkbox" bind:checked={material.checked} />
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
		max-width: 300px;
	}

	li {
		position: relative;
	}

	li input {
		position: absolute;
		right: 0;
	}
</style>
