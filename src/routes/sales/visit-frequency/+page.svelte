<script lang="ts">
	import ProductsSelect from '$lib/products-select.svelte';
	import type { Product, VisitFrequencyCluster } from '$lib/data';
	import VisitFrequencyClusterComponent from '$lib/visit-frequency-cluster.svelte';

	export const products: Product[] = [
		{
			key: 'gardasil',
			name: 'GARDASIL'
		},
		{
			key: 'pulmovax',
			name: 'PULMOVAX'
		},
		{
			key: 'mmr',
			name: 'MMR'
		},
		{
			key: 'varivax',
			name: 'VARIVAX'
		}
	];

	export const currentClusters: VisitFrequencyCluster[] = [
		{
			key: 'current-high-interaction',
			name: 'High Interaction',
			label: 'current',
			historicData: [
				{
					impacts: 20,
					month: 'Enero'
				},
				{
					impacts: 15,
					month: 'Febrero'
				},
				{
					impacts: 25,
					month: 'Marzo'
				},
				{
					impacts: 35,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 30
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 50
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 60
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 10
				}
			]
		},
		{
			key: 'current-medium-interaction',
			name: 'Medium Interaction',
			label: 'current',
			historicData: [
				{
					impacts: 20,
					month: 'Enero'
				},
				{
					impacts: 15,
					month: 'Febrero'
				},
				{
					impacts: 25,
					month: 'Marzo'
				},
				{
					impacts: 35,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 30
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 50
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 60
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 10
				}
			]
		},
		{
			key: 'current-low-interaction',
			name: 'Low Interaction',
			label: 'current',
			historicData: [
				{
					impacts: 20,
					month: 'Enero'
				},
				{
					impacts: 15,
					month: 'Febrero'
				},
				{
					impacts: 25,
					month: 'Marzo'
				},
				{
					impacts: 35,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 30
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 50
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 60
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 10
				}
			]
		}
	];

	export const suggestedClusters: VisitFrequencyCluster[] = [
		{
			key: 'suggested-high-interaction',
			name: 'High Interaction',
			label: 'Suggested',
			historicData: [
				{
					impacts: 15,
					month: 'Enero'
				},
				{
					impacts: 30,
					month: 'Febrero'
				},
				{
					impacts: 25,
					month: 'Marzo'
				},
				{
					impacts: 25,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 15
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 80
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 40
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 30
				}
			]
		},
		{
			key: 'suggested-medium-interaction',
			name: 'Medium Interaction',
			label: 'Suggested',
			historicData: [
				{
					impacts: 25,
					month: 'Enero'
				},
				{
					impacts: 35,
					month: 'Febrero'
				},
				{
					impacts: 30,
					month: 'Marzo'
				},
				{
					impacts: 40,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 40
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 50
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 100
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 80
				}
			]
		},
		{
			key: 'suggested-low-interaction',
			name: 'Low Interaction',
			label: 'Suggested',
			historicData: [
				{
					impacts: 10,
					month: 'Enero'
				},
				{
					impacts: 15,
					month: 'Febrero'
				},
				{
					impacts: 33,
					month: 'Marzo'
				},
				{
					impacts: 35,
					month: 'Abril'
				}
			],
			channels: [
				{
					key: 'f2f-visits',
					name: 'f2F Visits',
					scoreAchived: 50
				},
				{
					key: 'ae',
					name: 'AE',
					scoreAchived: 45
				},
				{
					key: 'emkt',
					name: 'E-Marketing',
					scoreAchived: 60
				},
				{
					key: 'whatsapp',
					name: 'WhatsApp',
					scoreAchived: 70
				}
			]
		}
	];

	function calculateImpacts(cluster: VisitFrequencyCluster) {
		let acc = 0;

		for (let ch of cluster.channels) {
			acc += ch.scoreAchived;
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
		</div>

		<div class="clusters">
			<div class="current-clusters">
				{#each currentClusters as cluster, i}
					<VisitFrequencyClusterComponent
						{cluster}
						impacts={calculateImpacts(cluster)}
						chartData={{
							current: currentClusters[i].historicData,
							suggested: suggestedClusters[i].historicData
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
		font-family: 'Invention Light';

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
		content: 'Current';

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
		content: 'Suggested';

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
</style>
