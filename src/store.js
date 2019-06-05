import {writable, derived} from 'svelte/store';

export const height = writable(10);
export const side = derived(height, $height => Math.ceil(2 * $height / (Math.sqrt(3))));
