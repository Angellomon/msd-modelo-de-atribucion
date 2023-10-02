<script>
	import ActivityButton from '$lib/activity-button.svelte';
	import { MartketingHeading } from '$lib/headings';
</script>

<section>
	<MartketingHeading />

	<div class="activity">
		<aside>
			<div class="option">a. Materials Deployment</div>
			<div class="description">What Materials do I Send to Who?</div>
		</aside>

		<ActivityButton path="/mkt/materials-deployment">More Information</ActivityButton>
	</div>

	<div class="activity">
		<aside>
			<div class="option">b. Material Qty for next cycle</div>
			<div class="description">Material Qty</div>
		</aside>

		<ActivityButton path="/mkt/material-quantity">More Information</ActivityButton>
	</div>

	<img src="/img/MKT-MANAGER-CIRCULO.png" alt="MKT" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		position: relative;

		justify-content: space-around;
		align-items: flex-start;

		background-color: var(--azul-msd);

		margin-left: 10vh;

		height: 100vh;

		/* width: 100vw; */
	}

	div.activity {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;

		width: 80%;
	}
	div.option {
		color: var(--verde-vivo-msd);

		font-family: 'Invention Bold';
		font-size: 2rem;
	}

	img {
		position: absolute;
		top: 30px;
		right: 30px;

		width: 25vh;
	}

	div.description {
		margin-left: 2ch;
		font-size: 1.8rem;

		margin-bottom: 20px;
	}
</style>
