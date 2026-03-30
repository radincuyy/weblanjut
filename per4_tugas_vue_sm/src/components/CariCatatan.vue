<template>
  <input
    :value="store.cari"
    @input="store.setCari($event.target.value)"
    placeholder="Cari catatan..."
  />
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
