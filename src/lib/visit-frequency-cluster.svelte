<script lang="ts">
	import type { VisitFrequencyCluster } from './data';

	export let cluster: VisitFrequencyCluster;

	export let impacts: number;
</script>

<div class="cluster">
	<div class="graphics" />

	<div class="cluster-info">
		<p>CLUSTER: <span>{cluster.name}</span></p>
		<p>IMPACTS: <span>{impacts}</span></p>
	</div>

	<div class="scores">
		{#each cluster.channels as channel}
			<p>{channel.name}: <span>{channel.scoreAchived}</span></p>
		{/each}
	</div>
</div>

<style>
	p {
		margin: 5px 0;
		padding: 0;
	}

	div.cluster {
		width: 20vw;

		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	div.cluster-info {
		width: 100%;
		background-color: white;
		color: var(--azul-msd);

		padding: 10px;
		padding-right: 0;

		position: relative;
	}

	div.scores {
		padding: 10px;
		padding-right: 0;

		position: relative;
	}

	span {
		position: absolute;
		right: 0;
	}

	div.cluster-info span {
		right: 15px;
	}
</style>
