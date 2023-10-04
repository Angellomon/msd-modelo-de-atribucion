<script lang="ts">
	import type { MaterialsQtyCluster } from "$lib/data";
	import { selectedFranchisesKeys } from "$lib/store";
	export let cluster: MaterialsQtyCluster;
</script>

<div class="cluster">
	<h1>{cluster.channel.name}</h1>

	{#each cluster.materials.filter( (m) => $selectedFranchisesKeys.includes(m.franchiseKey), ) as material}
		<span>{material.name}</span>
	{/each}
</div>

<style>
	div.cluster {
		display: flex;
		flex-direction: column;
		gap: 10px;

		/* width: 20vw; */
	}
</style>
