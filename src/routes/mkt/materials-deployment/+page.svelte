<script lang="ts">
	import ChannelsSelect from "$lib/channels-select.svelte";
	import type { Channel, Material, MaterialDeploymentCluster } from "$lib/data";
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

	const visitedClusters: MaterialDeploymentCluster[] = [
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 24,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 19,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 11,
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 13,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 16,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 3,
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 19,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 22,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 8,
				},
			],
		},
	];

	const unvisitedClusters: MaterialDeploymentCluster[] = [
		{
			key: "unvisited-high-interaction",
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 24,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 19,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 11,
				},
			],
		},
		{
			key: "unvisited-medium-interaction",
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 13,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 16,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 3,
				},
			],
		},
		{
			key: "unvisited-low-interaction",
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
				},
				{
					key: "diabetes-certification",
					name: "Diabetes Certification",
					scoreAchieved: 19,
				},
				{
					key: "inmunoverse",
					name: "INMUNOVERSE",
					scoreAchieved: 22,
				},
				{
					key: "g9-launcjh",
					name: "G9 LAUNCH",
					scoreAchieved: 8,
				},
			],
		},
	];
</script>

<section>
	<h1>Materials Deployment</h1>

	<MaterialsSelect {materials} />
	<ChannelsSelect {channels} />
</section>
