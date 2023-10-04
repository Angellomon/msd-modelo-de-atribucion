<script lang="ts">
	import { selectedProductsKeys } from '$lib/store';
	import { onDestroy, onMount } from 'svelte';
	import type { Product } from './data';

	export let products: Product[];

	let _products: (Product & { checked: boolean })[] = [];

	onMount(() => {
		_products = products.map((m) => ({ ...m, checked: true } as any));

		selectedProductsKeys.set(products.map((m) => m.key));
	});

	onDestroy(() => {
		selectedProductsKeys.set([]);
	});

	$: selectedProductsKeys.set(_products.filter((m) => m.checked).map((m) => m.key));
</script>

<div class="menu">
	<div class="title">PRODUCTS</div>
	<ul>
		{#each _products as product (product.key)}
			<li>
				<label for="materials" />{product.name}
				<input id="materials" name="materials" type="checkbox" bind:checked={product.checked} />
			</li>
		{/each}
	</ul>
</div>

<style>
	div.title {
		color: var(--verde-vivo-msd);
		font-family: 'Invention Bold';
	}

	div.menu {
		font-size: 1.5rem;
		margin-left: 30px;
	}

	ul {
		width: 15vw;
	}

	li {
		position: relative;
	}

	li input {
		position: absolute;
		right: 0;
	}

	input[type='checkbox']::before {
		background-color: var(--verde-msd);
	}
</style>
