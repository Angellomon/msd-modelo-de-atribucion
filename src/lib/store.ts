import { writable } from "svelte/store";

export const selectedMaterialKeys = writable<string[]>([]);

export const selectedChannelKeys = writable<string[]>([]);
