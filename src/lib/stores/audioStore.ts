// src/stores/audioStore.js
import { writable } from 'svelte/store';

export const audioStore = writable({
  title: '',
  file: '',
  playing: false,
});
