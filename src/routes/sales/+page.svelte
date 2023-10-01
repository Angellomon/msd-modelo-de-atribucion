<script>
	import ActivityButton from '$lib/activity-button.svelte';
</script>

<section>
	<div class="message">What do you want to plan today?</div>

	<div class="activity-select">
		<ActivityButton path="/sales/visit-frequency">Visit Frequency</ActivityButton>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		justify-content: center;
		align-items: center;
	}

	div.message {
		width: 50vw;
		text-align: center;
	}

	div.activity-select {
		width: 50vw;
	}
</style>
