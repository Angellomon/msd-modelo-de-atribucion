<script>
	import ActivityButton from '$lib/activity-button.svelte';
	import MainHeading from '$lib/headings/main-heading.svelte';
</script>

<main>
	<MainHeading />
	<div class="main-buttons">
		<aside>
			<img src="/img/MKT-MANAGER.png" alt="MKT" />
			<ActivityButton path="/mkt">More Information</ActivityButton>
		</aside>
		<aside>
			<img src="/img/SALES-REP.png" alt="SALES" />
			<ActivityButton path="/sales">More Information</ActivityButton>
		</aside>
	</div>

	<img class="logo" src="/img/MSD-LOGO-B.png" alt="MSD" />
</main>

<style>
	main {
		height: 100vh;

		position: relative;
	}

	main img {
		width: 25vh;
		align-self: center;
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
		gap: 35vh;

		justify-content: center;
		align-items: center;

		width: 100%;
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
	}
</style>
