<script>
	import ActivityButton from '$lib/activity-button.svelte';

	let width = '40vw';
</script>

<section>
	<div class="message">What do you want to plan today?</div>

	<div class="activity-select">
		<ActivityButton path="/mkt/materials-deployment" {width}>Materials Deployment</ActivityButton>

		<ActivityButton path="/mkt/material-quantity" {width}
			>Material Quantity for Next Cycle</ActivityButton
		>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		justify-content: space-around;
		align-items: center;

		/* width: 100vw; */
	}

	div.message {
		text-align: center;

		font-size: 24px;
	}

	div.activity-select {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
