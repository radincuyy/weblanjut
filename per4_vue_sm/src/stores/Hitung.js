import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
        history: []
    }),
    actions: {
        increment() {
            this.count++;
            this.history.push(this.count);
        },
        reset() {
            this.count = 0;
            this.history = [];
        }
    }
});