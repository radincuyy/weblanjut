<template>
  <ul>
    <li v-for="(item, i) in store.catatanFiltered" :key="i">{{ item }}</li>
  </ul>
  <p v-if="store.catatanFiltered.length === 0">Belum ada catatan.</p>
</template>

<script>
import { useCatatanStore } from "../stores/Catatan";

export default {
  setup() {
    const store = useCatatanStore();
    return { store };
  }
};
</script>
