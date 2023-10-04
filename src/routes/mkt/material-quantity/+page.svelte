<script lang="ts">
	import type { Franchise, MaterialsQtyCluster } from '$lib/data';
	import FranchisesSelect from '$lib/franchises-select.svelte';
	import MaterialsQtyClusters from '$lib/materials-qty-clusters.svelte';

	export let franchises: Franchise[] = [
		{
			key: 'anestesia',
			name: 'Anestesia'
		},
		{
			key: 'diabetes',
			name: 'Diabetes'
		},
		{
			key: 'oncologia',
			name: 'Oncología'
		},
		{
			key: 'vacunas',
			name: 'Vacunas'
		}
	];

	export let currentClusters: MaterialsQtyCluster[] = [
		{
			key: 'AE-current-cluster',
			name: 'AE Cluster',
			channel: {
				key: 'AE',
				name: 'AE'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		},
		{
			key: 'EMKT-current-cluster',
			name: 'E-Marketing Cluster',
			channel: {
				key: 'EMKT',
				name: 'E-Marketing'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		},
		{
			key: 'WA-current-cluster',
			name: 'WhatsApp Current Cluster',
			channel: {
				key: 'WA',
				name: 'WhatsApp'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		}
	];

	export let suggestedClusters: MaterialsQtyCluster[] = [
		{
			key: 'AE-suggested-cluster',
			name: 'AE Cluster',
			channel: {
				key: 'AE',
				name: 'AE'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		},
		{
			key: 'EMKT-suggested-cluster',
			name: 'E-Marketing Cluster',
			channel: {
				key: 'EMKT',
				name: 'E-Marketing'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		},
		{
			key: 'WA-suggested-cluster',
			name: 'WhatsApp Cluster',
			channel: {
				key: 'WA',
				name: 'WhatsApp'
			},
			materials: [
				{
					key: 'januvia',
					name: 'JANUVIA 2.0'
				},
				{
					key: 'diabetes-certification',
					name: 'Diabetes Certification'
				},
				{
					key: 'inmunoverse',
					name: 'INMUNOVERSE'
				},
				{
					key: 'g9-launcjh',
					name: 'G9 LAUNCH'
				}
			]
		}
	];
</script>

<section>
	<h1>b. Material Qty</h1>
	<h2>Material Qty</h2>

	<div class="container">
		<div class="data-select">
			<FranchisesSelect {franchises} />
		</div>

		<div class="clusters">
			<span>CURRENT</span>

			<div class="current">
				{#each currentClusters as cluster}
					<MaterialsQtyClusters {cluster} />
				{/each}
			</div>

			<span>SUGESTED</span>

			<div class="suggested">
				{#each suggestedClusters as cluster}
					<MaterialsQtyClusters {cluster} />
				{/each}
			</div>
		</div>
	</div>

	<img src="/img/MKT-MANAGER-CIRCULO.png" alt="MKT" />
</section>

<style>
	span {
		background-color: var(--verde-vivo-msd);
		color: var(--azul-msd);

		padding: 5px 10px;

		font-size: 1.8rem;
		font-family: 'Invention Bold';
	}

	h1 {
		color: var(--verde-vivo-msd);

		margin-left: 30px;
	}

	h2 {
		font-family: 'Invention Light';
		margin-left: 50px;
	}

	div.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 20px;
	}

	div.clusters {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 40px;

		padding-left: 80px;

		width: 70%;
	}

	div.data-select {
		width: 15vw;

		display: flex;
		flex-direction: column;
	}

	div.current {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 100px;

		position: relative;

		margin-left: 30px;
	}

	div.suggested {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 100px;

		position: relative;

		margin-left: 30px;
	}

	img {
		position: absolute;
		top: 25px;
		right: 25px;

		width: 20vh;
	}
</style>
