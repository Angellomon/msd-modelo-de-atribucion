<script lang="ts">
	import ProductsSelect from "$lib/products-select.svelte";
	import type { Product, VisitFrequencyCluster } from "$lib/data";
	import VisitFrequencyClusterComponent from "$lib/visit-frequency-cluster.svelte";

	export const products: Product[] = [
		{
			key: "gardasil",
			name: "GARDASIL",
		},
		{
			key: "pulmovax",
			name: "PULMOVAX",
		},
		{
			key: "mmr",
			name: "MMR",
		},
		{
			key: "varivax",
			name: "VARIVAX",
		},
	];

	export const currentClusters: VisitFrequencyCluster[] = [
		{
			key: "current-high-interaction",
			name: "High Interaction",
			label: "current",
			historicData: [
				{
					impacts: 20,
					month: "Enero",
				},
				{
					impacts: 15,
					month: "Febrero",
				},
				{
					impacts: 25,
					month: "Marzo",
				},
				{
					impacts: 35,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 30,
					products: [
						{
							productKey: "gardasil",
							score: 20,
						},
						{
							productKey: "mmr",
							score: 50,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 50,
					products: [
						{
							productKey: "pulmovax",
							score: 40,
						},
						{
							productKey: "mmr",
							score: 30,
						},
						{
							productKey: "varivax",
							score: 20,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 60,
					products: [
						{
							productKey: "mmr",
							score: 40,
						},
						{
							productKey: "varivax",
							score: 50,
						},
						{
							productKey: "pulmovax",
							score: 40,
						},
						{
							productKey: "gardasil",
							score: 30,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 10,
					products: [
						{
							productKey: "gardasil",
							score: 30,
						},
						{
							productKey: "pulmovax",
							score: 50,
						},
						{
							productKey: "mmr",
							score: 40,
						},
						{
							productKey: "varivax",
							score: 30,
						},
					],
				},
			],
		},
		{
			key: "current-medium-interaction",
			name: "Medium Interaction",
			label: "current",
			historicData: [
				{
					impacts: 20,
					month: "Enero",
				},
				{
					impacts: 15,
					month: "Febrero",
				},
				{
					impacts: 25,
					month: "Marzo",
				},
				{
					impacts: 35,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 30,
					products: [
						{
							productKey: "gardasil",
							score: 25,
						},
						{
							productKey: "pulmovax",
							score: 40,
						},
						{
							productKey: "mmr",
							score: 45,
						},
						{
							productKey: "varivax",
							score: 35,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 50,
					products: [
						{
							productKey: "gardasil",
							score: 50,
						},
						{
							productKey: "pulmovax",
							score: 30,
						},
						{
							productKey: "mmr",
							score: 30,
						},
						{
							productKey: "varivax",
							score: 60,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 60,
					products: [
						{
							productKey: "gardasil",
							score: 45,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 40,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 10,
					products: [
						{
							productKey: "gardasil",
							score: 30,
						},
						{
							productKey: "pulmovax",
							score: 50,
						},
						{
							productKey: "mmr",
							score: 40,
						},
						{
							productKey: "varivax",
							score: 30,
						},
					],
				},
			],
		},
		{
			key: "current-low-interaction",
			name: "Low Interaction",
			label: "current",
			historicData: [
				{
					impacts: 20,
					month: "Enero",
				},
				{
					impacts: 15,
					month: "Febrero",
				},
				{
					impacts: 25,
					month: "Marzo",
				},
				{
					impacts: 35,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 30,
					products: [
						{
							productKey: "gardasil",
							score: 40,
						},
						{
							productKey: "pulmovax",
							score: 55,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 60,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 50,
					products: [
						{
							productKey: "gardasil",
							score: 55,
						},
						{
							productKey: "pulmovax",
							score: 55,
						},
						{
							productKey: "mmr",
							score: 45,
						},
						{
							productKey: "varivax",
							score: 35,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 60,
					products: [
						{
							productKey: "gardasil",
							score: 30,
						},
						{
							productKey: "pulmovax",
							score: 50,
						},
						{
							productKey: "mmr",
							score: 40,
						},
						{
							productKey: "varivax",
							score: 30,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 10,
					products: [
						{
							productKey: "gardasil",
							score: 30,
						},
						{
							productKey: "pulmovax",
							score: 50,
						},
						{
							productKey: "mmr",
							score: 40,
						},
						{
							productKey: "varivax",
							score: 30,
						},
					],
				},
			],
		},
	];

	export const suggestedClusters: VisitFrequencyCluster[] = [
		{
			key: "suggested-high-interaction",
			name: "High Interaction",
			label: "Suggested",
			historicData: [
				{
					impacts: 15,
					month: "Enero",
				},
				{
					impacts: 30,
					month: "Febrero",
				},
				{
					impacts: 25,
					month: "Marzo",
				},
				{
					impacts: 25,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 15,
					products: [
						{
							productKey: "gardasil",
							score: 55,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 80,
					products: [
						{
							productKey: "gardasil",
							score: 65,
						},
						{
							productKey: "pulmovax",
							score: 75,
						},
						{
							productKey: "mmr",
							score: 80,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 40,
					products: [
						{
							productKey: "gardasil",
							score: 75,
						},
						{
							productKey: "pulmovax",
							score: 55,
						},
						{
							productKey: "mmr",
							score: 50,
						},
						{
							productKey: "varivax",
							score: 65,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 30,
					products: [
						{
							productKey: "gardasil",
							score: 85,
						},
						{
							productKey: "pulmovax",
							score: 85,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
			],
		},
		{
			key: "suggested-medium-interaction",
			name: "Medium Interaction",
			label: "Suggested",
			historicData: [
				{
					impacts: 25,
					month: "Enero",
				},
				{
					impacts: 35,
					month: "Febrero",
				},
				{
					impacts: 30,
					month: "Marzo",
				},
				{
					impacts: 40,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 40,
					products: [
						{
							productKey: "gardasil",
							score: 60,
						},
						{
							productKey: "pulmovax",
							score: 70,
						},
						{
							productKey: "mmr",
							score: 80,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 50,
					products: [
						{
							productKey: "gardasil",
							score: 45,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 65,
						},
						{
							productKey: "varivax",
							score: 85,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 100,
					products: [
						{
							productKey: "gardasil",
							score: 85,
						},
						{
							productKey: "pulmovax",
							score: 90,
						},
						{
							productKey: "mmr",
							score: 65,
						},
						{
							productKey: "varivax",
							score: 85,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 80,
					products: [
						{
							productKey: "gardasil",
							score: 65,
						},
						{
							productKey: "pulmovax",
							score: 55,
						},
						{
							productKey: "mmr",
							score: 70,
						},
						{
							productKey: "varivax",
							score: 95,
						},
					],
				},
			],
		},
		{
			key: "suggested-low-interaction",
			name: "Low Interaction",
			label: "Suggested",
			historicData: [
				{
					impacts: 10,
					month: "Enero",
				},
				{
					impacts: 15,
					month: "Febrero",
				},
				{
					impacts: 33,
					month: "Marzo",
				},
				{
					impacts: 35,
					month: "Abril",
				},
			],
			channels: [
				{
					key: "f2f-visits",
					name: "f2F Visits",
					scoreAchieved: 50,
					products: [
						{
							productKey: "gardasil",
							score: 65,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 50,
						},
						{
							productKey: "varivax",
							score: 55,
						},
					],
				},
				{
					key: "ae",
					name: "AE",
					scoreAchieved: 45,
					products: [
						{
							productKey: "gardasil",
							score: 45,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
				{
					key: "emkt",
					name: "E-Marketing",
					scoreAchieved: 60,
					products: [
						{
							productKey: "gardasil",
							score: 55,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
				{
					key: "whatsapp",
					name: "WhatsApp",
					scoreAchieved: 70,
					products: [
						{
							productKey: "gardasil",
							score: 55,
						},
						{
							productKey: "pulmovax",
							score: 65,
						},
						{
							productKey: "mmr",
							score: 60,
						},
						{
							productKey: "varivax",
							score: 75,
						},
					],
				},
			],
		},
	];

	function calculateImpacts(cluster: VisitFrequencyCluster) {
		let acc = 0;

		for (let ch of cluster.channels) {
			acc += ch.scoreAchieved;
		}

		return acc;
	}
</script>

<section>
	<h1>a. Visit Frequency</h1>
	<h2>How many times do I need to Visit Each HCP in this cycle?</h2>

	<div class="container">
		<div class="data-select">
			<ProductsSelect {products} />

			<div class="buttons-group">
				<a href="#">BOTON</a>
				<a href="#">EXPORT HCP</a>
				<a href="#">PLAN DETAIL</a>
			</div>
		</div>

		<div class="clusters">
			<div class="current-clusters">
				{#each currentClusters as cluster, i}
					<VisitFrequencyClusterComponent
						{cluster}
						impacts={calculateImpacts(cluster)}
						chartData={{
							current: currentClusters[i].historicData,
							suggested: suggestedClusters[i].historicData,
						}}
					/>
				{/each}
			</div>

			<div class="suggested-clusters">
				{#each suggestedClusters as cluster}
					<VisitFrequencyClusterComponent {cluster} impacts={calculateImpacts(cluster)} />
				{/each}
			</div>
		</div>
	</div>

	<img src="/img/SALES-REP-CIRCULO.png" alt="SALES" />
</section>

<style>
	h1 {
		color: var(--verde-vivo-msd);

		/* margin: 30px 0; */
		margin-left: 30px;
	}

	h2 {
		font-family: "Invention Light";

		/* margin: 10px 0; */
		margin-left: 50px;
	}

	section {
		display: flex;
		flex-direction: column;

		position: relative;

		justify-content: flex-start;
		align-items: flex-start;

		/* padding-left: 10vh;
		padding-top: 5vh; */

		background-color: var(--verde-msd);
		height: 100%;
	}

	div.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 20px;

		margin-top: 30px;
	}

	div.data-select {
		max-width: 30vw;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	div.current-clusters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 40px;

		position: relative;

		margin-left: 50px;
	}

	div.current-clusters::before {
		font-size: 1.5rem;

		position: absolute;
		left: -60px;
		top: 30%;
		content: "Current";

		color: var(--verde-vivo-msd);

		transform: rotate(270deg);

		z-index: 10;
	}

	div.suggested-clusters {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 40px;

		position: relative;

		margin-left: 50px;
	}

	div.suggested-clusters::before {
		font-size: 1.5rem;

		position: absolute;
		left: -75px;
		top: 30%;
		content: "Suggested";

		color: var(--verde-vivo-msd);

		transform: rotate(270deg);

		z-index: 10;
	}

	div.clusters {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	img {
		position: absolute;
		top: 25px;
		right: 25px;

		width: 20vh;
	}

	div.buttons-group {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;

		margin-left: 50px;
		padding-bottom: 50px;
		/* align-items: center; */
	}

	div.buttons-group a {
		text-decoration: none;
		color: white;

		font-family: "Invention Bold";
	}

	div.buttons-group a:hover {
		color: var(--verde-vivo-msd);
	}
</style>
