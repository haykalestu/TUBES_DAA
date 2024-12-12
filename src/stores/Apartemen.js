import { defineStore } from 'pinia';

export const useApartmentStore = defineStore('apartment', {
  state: () => ({
    apartments: [],
  }),
  actions: {
    loadApartments() {
      const storedApartments = localStorage.getItem('apartments');
      if (storedApartments) {
        this.apartments = JSON.parse(storedApartments);
      }
    },
    addApartment(apartment) {
      this.apartments.push(apartment);
      localStorage.setItem('apartments', JSON.stringify(this.apartments)); // Simpan ke localStorage
    },
  },
});
