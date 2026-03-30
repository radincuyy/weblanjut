<template>
  <div>
    <input v-model="teks" @keyup.enter="tambah" placeholder="Tulis catatan..." />
    <button @click="tambah">Tambah</button>
  </div>
</template>

<script>
import { useCatatanStore } from "../stores/Catatan";
import { ref } from "vue";

export default {
  setup() {
    const store = useCatatanStore();
    const teks = ref("");
    const tambah = () => {
      if (teks.value.trim()) {
        store.tambah(teks.value.trim());
        teks.value = "";
      }
    };
    return { teks, tambah };
  }
};
</script>
