<template>
  <div>
    <h1>Catatan Sederhana - Vue + Pinia</h1>
    <TambahCatatan />
    <CariCatatan />
    <JumlahCatatan />
    <HapusSemua />
    <DaftarCatatan />
  </div>
</template>

<script>
import TambahCatatan from "./components/TambahCatatan.vue";
import DaftarCatatan from "./components/DaftarCatatan.vue";
import JumlahCatatan from "./components/JumlahCatatan.vue";
import HapusSemua from "./components/HapusSemua.vue";
import CariCatatan from "./components/CariCatatan.vue";

export default {
  name: "App",
  components: {
    TambahCatatan,
    DaftarCatatan,
    JumlahCatatan,
    HapusSemua,
    CariCatatan
  }
};
</script>
