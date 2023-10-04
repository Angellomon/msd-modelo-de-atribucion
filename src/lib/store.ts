import { writable } from "svelte/store";

export const selectedMaterialKeys = writable<string[]>([]);

export const selectedChannelKeys = writable<string[]>([]);

export const selectedFranchisesKeys = writable<string[]>([]);

export const selectedProductsKeys = writable<string[]>([]);
