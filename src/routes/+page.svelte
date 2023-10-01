<script>
	import ActivityButton from '$lib/activity-button.svelte';
</script>

<main>
	<div class="main-buttons">
		<ActivityButton path="/mkt">MKT</ActivityButton>
		<ActivityButton path="/sales">SALES</ActivityButton>
	</div>
</main>

<style>
	main {
		height: 100vh;
	}

	div.main-buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20px;

		justify-content: center;
		align-items: center;

		width: 100%;
	}
</style>
