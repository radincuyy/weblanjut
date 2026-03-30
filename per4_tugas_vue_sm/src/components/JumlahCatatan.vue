<template>
  <p>Total catatan: <strong>{{ store.jumlah }}</strong></p>
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
