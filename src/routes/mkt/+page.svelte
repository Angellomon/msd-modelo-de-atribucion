<script>
	import ActivityButton from '$lib/activity-button.svelte';
	import { MartketingHeading } from '$lib/headings';
</script>

<section>
	<MartketingHeading />

	<div class="activity-select">
		<ActivityButton path="/mkt/materials-deployment">Materials Deployment</ActivityButton>

		<ActivityButton path="/mkt/material-quantity">Material Quantity for Next Cycle</ActivityButton>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		justify-content: space-around;
		align-items: center;

		background-color: var(--verde-msd);

		height: 100vh;

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
