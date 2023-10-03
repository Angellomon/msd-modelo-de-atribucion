<script lang="ts">
	import type { MaterialsQtyCluster } from "$lib/data";
	export let cluster: MaterialsQtyCluster;
</script>

<div class="cluster">
	<h1>{cluster.channel.name}</h1>

	{#each cluster.materials as material}
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
