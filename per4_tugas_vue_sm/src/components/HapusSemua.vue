<template>
  <button @click="store.hapusSemua()" :disabled="store.jumlah === 0">Hapus Semua</button>
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
