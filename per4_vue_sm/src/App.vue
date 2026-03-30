<template>
  <h1>Dengan State Management (Pinia)</h1>
  <HitungDisplay />
  <HitungButton />
  <ResetButton />
  <HistoryList />
</template>

<script>
import HitungDisplay from "./components/HitungDisplay.vue";
import HitungButton from "./components/HitungButton.vue";
import ResetButton from "./components/ResetButton.vue";
import HistoryList from "./components/HistoryList.vue";

export default {
  name: "App",
  components: {
    HitungDisplay,
    HitungButton,
    ResetButton,
    HistoryList
  }
}
</script>
