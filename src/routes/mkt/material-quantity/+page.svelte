<script lang="ts">
	import type { Franchise } from "$lib/data";
	import FranchisesSelect from "$lib/franchises-select.svelte";

	export let franchises: Franchise[] = [
		{
			key: "anestesia",
			name: "Anestesia",
		},
		{
			key: "diabetes",
			name: "Diabetes",
		},
		{
			key: "oncologia",
			name: "Oncología",
		},
		{
			key: "vacunas",
			name: "Vacunas",
		},
	];
</script>

<section>
	<h1>b. Material Qty</h1>
	<h2>Material Qty</h2>

	<div class="container">
		<div class="data-select">
			<FranchisesSelect {franchises} />
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
</style>
