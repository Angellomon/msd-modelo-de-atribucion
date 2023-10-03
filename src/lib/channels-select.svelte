<script lang="ts">
	import { selectedChannelKeys } from "$lib/store";
	import { onDestroy, onMount } from "svelte";
	import type { Material } from "./data";

	export let channels: Material[];

	let _channels: (Material & { checked: boolean })[] = [];

	onMount(() => {
		_channels = channels.map((m) => ({ ...m, checked: true } as any));

		console.log(_channels);

		selectedChannelKeys.set(channels.map((m) => m.key));
	});

	onDestroy(() => {
		selectedChannelKeys.set([]);
	});

	$: selectedChannelKeys.set(_channels.filter((m) => m.checked).map((m) => m.key));
</script>

<div class="menu">
	<div class="title">CHANNELS</div>
	<ul>
		{#each _channels as channel (channel.key)}
			<li>
				<label for="materials" />{channel.name}
				<input id="materials" name="materials" type="checkbox" bind:checked={channel.checked} />
			</li>
		{/each}
	</ul>
</div>

<style>
	div.title {
		color: var(--verde-vivo-msd);
		font-family: "Invention Bold";
	}

	div.menu {
		font-size: 1.5rem;
		margin-left: 30px;
	}

	ul {
		width: 20vw;
	}

	li {
		position: relative;
	}

	li input {
		position: absolute;
		right: 0;
	}
</style>
