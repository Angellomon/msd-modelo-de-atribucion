<script lang="ts">
	import ProductsSelect from "$lib/products-select.svelte";
	import type { Product, VisitFrequencyCluster as TVisitFrequencyCluster } from "$lib/data";
	import VisitFrequencyClusterComponent from "$lib/visit-frequency-cluster.svelte";
	import { selectedProductsKeys } from "$lib/store";
	import { onMount } from "svelte";

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

	export const currentClusters: TVisitFrequencyCluster[] = [
		{
			key: "current-high-interaction",
			name: "High Interaction",
			label: "current",
			historicData: [
				{
					impacts: 300,
					month: "Enero",
				},
				{
					impacts: 215,
					month: "Febrero",
				},
				{
					impacts: 325,
					month: "Marzo",
				},
				{
					impacts: 435,
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
					impacts: 320,
					month: "Enero",
				},
				{
					impacts: 415,
					month: "Febrero",
				},
				{
					impacts: 225,
					month: "Marzo",
				},
				{
					impacts: 335,
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
					impacts: 420,
					month: "Enero",
				},
				{
					impacts: 315,
					month: "Febrero",
				},
				{
					impacts: 225,
					month: "Marzo",
				},
				{
					impacts: 235,
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

	export const suggestedClusters: TVisitFrequencyCluster[] = [
		{
			key: "suggested-high-interaction",
			name: "High Interaction",
			label: "Suggested",
			historicData: [
				{
					impacts: 215,
					month: "Enero",
				},
				{
					impacts: 330,
					month: "Febrero",
				},
				{
					impacts: 425,
					month: "Marzo",
				},
				{
					impacts: 325,
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
					impacts: 325,
					month: "Enero",
				},
				{
					impacts: 335,
					month: "Febrero",
				},
				{
					impacts: 230,
					month: "Marzo",
				},
				{
					impacts: 440,
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
					impacts: 310,
					month: "Enero",
				},
				{
					impacts: 315,
					month: "Febrero",
				},
				{
					impacts: 333,
					month: "Marzo",
				},
				{
					impacts: 435,
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
							score: 345,
						},
						{
							productKey: "pulmovax",
							score: 265,
						},
						{
							productKey: "mmr",
							score: 460,
						},
						{
							productKey: "varivax",
							score: 475,
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

	const calculateClusterImpact = (c: TVisitFrequencyCluster) =>
		c.channels.reduce(
			(prev, curr) =>
				prev +
				curr.products
					.filter((p) => $selectedProductsKeys.includes(p.productKey))
					.reduce((prev, curr) => prev + curr.score, 0),
			0,
		);

	let historicCurrentImpacts: number[];
	let historicSuggestedImpacts: number[];

	onMount(() => {
		historicCurrentImpacts = currentClusters.map((c) => calculateClusterImpact(c));

		historicSuggestedImpacts = suggestedClusters.map((c) => calculateClusterImpact(c));
	});

	$: {
		historicCurrentImpacts = currentClusters.map((c) => calculateClusterImpact(c));

		historicSuggestedImpacts = suggestedClusters.map((c) => calculateClusterImpact(c));
		console.log($selectedProductsKeys);

		// console.log(historicCurrentImpacts);
		// console.log(historicSuggestedImpacts);
	}

	function calculateImpacts(cluster: TVisitFrequencyCluster) {
		let acc = 0;

		console.log($selectedProductsKeys);

		for (let channel of cluster.channels) {
			for (let product of channel.products) {
				if ($selectedProductsKeys.includes(product.productKey)) acc += channel.scoreAchieved;
			}
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

		<div class="clustesrs">
			<div class="current-clusters">
				{#each currentClusters as cluster, i (cluster.key)}
					<VisitFrequencyClusterComponent
						{cluster}
						chartData={{
							current: currentClusters[i].historicData,
							suggested: suggestedClusters[i].historicData,
						}}
						currentImpacts={historicCurrentImpacts[i]}
						suggestedImpacts={historicSuggestedImpacts[i]}
					/>
				{/each}
			</div>

			<div class="suggested-clusters">
				{#each suggestedClusters as cluster}
					<VisitFrequencyClusterComponent {cluster} />
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
