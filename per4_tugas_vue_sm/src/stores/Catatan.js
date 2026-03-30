import { defineStore } from "pinia";

export const useCatatanStore = defineStore("catatan", {
    state: () => ({
        catatan: [],
        cari: ""
    }),
    getters: {
        catatanFiltered(state) {
            if (!state.cari) return state.catatan;
            return state.catatan.filter(c =>
                c.toLowerCase().includes(state.cari.toLowerCase())
            );
        },
        jumlah(state) {
            return state.catatan.length;
        }
    },
    actions: {
        tambah(teks) {
            this.catatan.push(teks);
        },
        hapusSemua() {
            this.catatan = [];
        },
        setCari(keyword) {
            this.cari = keyword;
        }
    }
});
