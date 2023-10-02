<script>
	import ActivityButton from '$lib/activity-button.svelte';
	import MainHeading from '$lib/headings/main-heading.svelte';
</script>

<main>
	<MainHeading />
	<div class="main-buttons">
		<ActivityButton path="/mkt">MKT</ActivityButton>
		<ActivityButton path="/sales">SALES</ActivityButton>
	</div>

	<img class="logo" src="/img/MSD-LOGO-B.png" alt="MSD" />
</main>

<style>
	main {
		height: 100vh;

		position: relative;
	}

	img.logo {
		position: absolute;
		bottom: 0;
		/* left: 45vw; */
		left: 45%;

		width: 20vh;
	}

	main::after {
		content: '';
		position: absolute;
		height: 100vh;
		width: 50vw;

		background-color: var(--verde-msd);
		right: 0;
		top: 0;
		z-index: -1;
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
