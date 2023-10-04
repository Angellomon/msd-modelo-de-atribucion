<script lang="ts">
	import ChannelsSelect from "$lib/channels-select.svelte";
	import type { Channel, Material, MaterialDeploymentCluster } from "$lib/data";
	import MaterialsDeploymentCluster from "$lib/materials-deployment-cluster.svelte";
	import MaterialsSelect from "$lib/materials-select.svelte";

	export const materials: Material[] = [
		{
			key: "januvia",
			name: "JANUVIA 2.0",
		},
		{
			key: "diabetes-certification",
			name: "Diabetes Certification",
		},
		{
			key: "inmunoverse",
			name: "INMUNOVERSE",
		},
		{
			key: "g9-launcjh",
			name: "G9 LAUNCH",
		},
	];

	export const channels: Channel[] = [
		{
			key: "AE",
			name: "AE",
		},
		{
			key: "WA",
			name: "WhatsApp",
		},
		{
			key: "EM",
			name: "E-Marketing",
		},
	];

	export let visitedClusters: MaterialDeploymentCluster[] = [
		{
			key: "visited-high-interaction",
			name: "High Interaction",
			deviation: 2,
			impacts: 20,
			scoreAchived: 20,
			targetScore: 40,

			materialsScore: [
				{
					key: "januvia",
					name: "JANUVIA 2.0",
					scoreAchieved: 15,
					channelKey: "AE",
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 24,
					channelKey: "WA",
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 19,
					channelKey: "EM",
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 11,
					channelKey: "AE",
				},
			],
		},
		{
			key: "visited-medium-interaction",
			name: "Medium Interaction",
			deviation: 1.5,
			impacts: 15,
			scoreAchived: 15,
			targetScore: 7,
			materialsScore: [
				{
					key: "januvia",
					name: "JANUVIA 2.0",
					scoreAchieved: 15,
					channelKey: "EM",
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 13,
					channelKey: "WA",
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 16,
					channelKey: "EM",
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 3,
					channelKey: "AE",
				},
			],
		},
		{
			key: "visited-low-interaction",
			name: "Low Interaction",
			deviation: 1,
			impacts: 5,
			scoreAchived: 10,
			targetScore: 5,

			materialsScore: [
				{
					key: "januvia",
					name: "JANUVIA 2.0",
					scoreAchieved: 11,
					channelKey: "WA",
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 19,
					channelKey: "WA",
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 22,
					channelKey: "AE",
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 8,
					channelKey: "EM",
				},
			],
		},
	];

	export let unvisitedClusters: MaterialDeploymentCluster[] = [
		{
			key: "unvisited-potential",
			name: "Potential",
			deviation: 1.5,
			impacts: 15,
			scoreAchived: 15,
			targetScore: 7,

			materialsScore: [
				{
					key: "januvia",
					name: "JANUVIA 2.0",
					scoreAchieved: 15,
					channelKey: "EM",
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 13,
					channelKey: "EM",
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 16,
					channelKey: "AE",
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 3,
					channelKey: "WA",
				},
			],
		},
		{
			key: "unvisited-non-potential",
			name: "Non Potential",
			deviation: 1,
			impacts: 5,
			scoreAchived: 10,
			targetScore: 5,

			materialsScore: [
				{
					key: "januvia",
					name: "JANUVIA 2.0",
					scoreAchieved: 11,
					channelKey: "WA",
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 19,
					channelKey: "EM",
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 22,
					channelKey: "AE",
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 8,
					channelKey: "AE",
				},
			],
		},
	];
</script>

<section>
	<h1>a. Materials Deployment</h1>
	<h2>What Material do I Send to Who?</h2>

	<div class="container">
		<div class="data-select">
			<MaterialsSelect {materials} />
			<ChannelsSelect {channels} />
		</div>

		<div class="clusters">
			<div class="visited-clusters">
				{#each visitedClusters as cluster}
					<MaterialsDeploymentCluster {cluster} />
				{/each}
			</div>

			<div class="unvisited-clusters">
				{#each unvisitedClusters as cluster}
					<MaterialsDeploymentCluster {cluster} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		color: var(--verde-vivo-msd);

		margin-left: 30px;
	}

	h2 {
		font-family: "Invention Light";
		margin-left: 50px;
	}

	div.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 20px;
	}

	div.data-select {
		max-width: 35vw;

		display: flex;
		flex-direction: column;
	}

	div.visited-clusters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 40px;

		position: relative;

		margin-left: 50px;
	}

	div.visited-clusters::before {
		font-size: 1.5rem;

		position: absolute;
		left: -60px;
		top: 30%;
		content: "Visited";

		color: var(--verde-vivo-msd);

		transform: rotate(270deg);

		z-index: 10;
	}

	div.unvisited-clusters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 40px;

		position: relative;

		margin-left: 50px;
	}

	div.unvisited-clusters::before {
		font-size: 1.5rem;

		position: absolute;
		left: -75px;
		top: 30%;
		content: "Unvisited";

		color: var(--verde-vivo-msd);

		transform: rotate(270deg);

		z-index: 10;
	}

	div.clusters {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
