<script lang="ts">
	import { afterUpdate } from "svelte";
	import type { HistoricData, VisitFrequencyCluster } from "./data";
	import Chart from "chart.js/auto";
	import { selectedProductsKeys } from "./store";

	Chart.defaults.color = "#fff";

	export let cluster: VisitFrequencyCluster;
	export let suggestedImpacts: number = 0;
	export let currentImpacts: number = 0;

	// export let impacts: number;

	export let impacts = 0;

	export let chartData: {
		suggested: HistoricData[];
		current: HistoricData[];
	} | null = null;

	let canvasCtx: any;
	let chart: Chart;

	afterUpdate(() => {
		if (!chartData) return;

		if (chart) chart.destroy();

		chart = new Chart(canvasCtx, {
			type: "line",
			data: {
				labels: [...chartData.current.map((c) => c.month), "Current"],
				datasets: [
					{
						label: "Current",
						data: [...chartData.current.map((d) => d.impacts), currentImpacts],
						borderColor: "#bed74b",
						backgroundColor: "#bed74b",
					},
					{
						label: "Suggested",
						data: [...chartData.suggested.map((d) => d.impacts), suggestedImpacts],
						borderColor: "#0c2340",
						backgroundColor: "#0c2340",
					},
				],
			},
		});
	});

	$: _impacts = cluster.channels.reduce(
		(prev, curr) =>
			prev +
			curr.products
				.filter((p) => $selectedProductsKeys.includes(p.productKey))
				.reduce((prev, curr) => prev + curr.score, 0),
		0,
	);
</script>

<div class="cluster">
	<div class="graphics">
		{#if chartData}
			<canvas bind:this={canvasCtx} />
		{/if}
	</div>

	<div class="cluster-info">
		<p>CLUSTER: <span>{cluster.name}</span></p>
		<p>IMPACTS: <span>{_impacts}</span></p>
	</div>

	<div class="scores">
		{#each cluster.channels as channel}
			<p>
				{channel.name}:
				<span
					>{channel.products
						.filter((c) => $selectedProductsKeys.includes(c.productKey))
						.reduce((prev, curr) => prev + curr.score, 0)}</span
				>
			</p>
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
