<template>
    <div>
        <h3>Riwayat Perubahan</h3>
        <ul>
            <li v-for="(item, index) in counter.history" :key="index">Perubahan ke-{{ index + 1 }}: {{ item }}
            </li>
        </ul>
    </div>
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