// stores/Apartemen.js
import { defineStore } from "pinia";

// Di store Apartemen
export const useApartmentStore = defineStore("apartment", {
  state: () => ({
    apartments: JSON.parse(localStorage.getItem("apartments")) || [],
  }),
  actions: {
    addApartment(apartment) {
      this.apartments.push(apartment);
      this.saveToLocalStorage();
    },
    updateApartment(updatedApartment) {
      const index = this.apartments.findIndex(a => a.id === updatedApartment.id);
      if (index !== -1) {
        this.apartments.splice(index, 1, updatedApartment);
        this.saveToLocalStorage();
      }
    },
    deleteApartment(id) {
      this.apartments = this.apartments.filter(a => a.id !== id);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("apartments", JSON.stringify(this.apartments));
    },
  },
});

