<script lang="ts">
	import type { MaterialDeploymentCluster } from "./data";

	export let cluster: MaterialDeploymentCluster;

	export let max = 100;
</script>

<div class="cluster">
	<div class="bars">
		{#each cluster.materialsScore as material (material.key)}
			<div class="bar">
				<progress id={material.key} {max} value={material.scoreAchieved}>{material.name}</progress>
				<div class="name">
					{material.name}
				</div>
			</div>
		{/each}
	</div>

	<div class="cluster-info">
		<p>CLUSTER: {cluster.name}</p>
		<p>CHANNEL:</p>
	</div>

	<div class="scores">
		<p>TARGET SCORE: <span>{cluster.targetScore}</span></p>
		<p>SCORE ACHIEVE: <span>{cluster.scoreAchived}</span></p>
		<p>DEVIATION: <span>{cluster.deviation}</span></p>
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

	div.bar {
		position: relative;
	}

	div.name {
		position: absolute;
		color: white;

		top: 3px;
		left: 5px;
	}

	progress {
		width: 80%;
		height: 22px;
		border: none;
	}

	progress {
		width: 100%;
		color: var(--azul-msd);
	}

	progress::-webkit-progress-bar {
		background-color: var(--azul-msd);
		border: none;
	}
	progress::-webkit-progress-value {
		background-color: var(--verde-msd);
		border: none;
	}
	progress::-moz-progress-bar {
		/* style rules */
	}

	div.cluster-info {
		width: 100%;
		background-color: white;
		color: var(--azul-msd);

		padding: 10px;
		padding-right: 0;
	}

	div.scores {
		padding: 10px;
		padding-right: 0;

		position: relative;
	}

	div.scores span {
		position: absolute;
		right: 0;
	}
</style>
