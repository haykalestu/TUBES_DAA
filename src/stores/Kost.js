import { defineStore } from "pinia";

// Di store Kost
export const useKostStore = defineStore("kost", {
  state: () => ({
    kosts: JSON.parse(localStorage.getItem("kosts")) || [],
  }),
  actions: {
    addKost(kost) {
      this.kosts.push(kost);
      this.saveToLocalStorage();
    },
    updateKost(updatedKost) {
      const index = this.kosts.findIndex(k => k.id === updatedKost.id);
      if (index !== -1) {
        this.kosts.splice(index, 1, updatedKost);
        this.saveToLocalStorage();
      }
    },
    deleteKost(id) {
      this.kosts = this.kosts.filter(k => k.id !== id);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("kosts", JSON.stringify(this.kosts));
    },
  },
});
