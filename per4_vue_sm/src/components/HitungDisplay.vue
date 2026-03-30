<template>
 <h2>Jumlah: {{ counter.count }}</h2>
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