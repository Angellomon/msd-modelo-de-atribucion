<script>
	import ActivityButton from '$lib/activity-button.svelte';
	import { SalesHeading } from '$lib/headings';
</script>

<section>
	<SalesHeading />

	<div class="option">a. Visit Frequency</div>
	<div class="description">How many times do I need to Visit Each HCP in this cycle?</div>

	<ActivityButton path="/sales/visit-frequency" --button-color="var(--verde-msd)"
		>More Information</ActivityButton
	>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;

		justify-content: flex-start;
		align-items: flex-start;

		padding-left: 10vh;
		padding-top: 5vh;

		background-color: var(--verde-msd);
		height: 95vh;
	}

	div.option {
		color: var(--verde-vivo-msd);

		font-family: 'Invention Bold';
		font-size: 2rem;
	}

	div.description {
		margin-left: 2ch;
		font-size: 1.8rem;

		margin-bottom: 20px;
	}
</style>
