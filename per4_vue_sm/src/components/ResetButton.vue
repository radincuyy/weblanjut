<template>
 <button @click="counter.reset()">Reset</button>
</template>

<script>
import { useCounterStore } from "../stores/Hitung";
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const counter = useCounterStore();
        return { counter };
    }
});
</script>