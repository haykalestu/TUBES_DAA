<template>
    <div class="apartemen-detail">
      <b-card
        :title="apartemen.name"
        :img-src="apartemen.image"
        img-alt="Foto apartemen"
        img-top
        class="apartemen-detail-card"
      >
        <p>{{ apartemen.description }}</p>
        <p><strong>Harga:</strong> Rp {{ apartemen.price }} / bulan</p>
        <p><strong>Alamat:</strong> {{ apartemen.address }}</p>
        <b-button variant="secondary" @click="goBack">Kembali</b-button>
      </b-card>
    </div>
  </template>
  
  <script>
  import { useApartmentStore } from "@/stores/Apartemen";
  
  export default {
    name: "ApartDetail",
    data() {
      return {
        apartemen: null, 
      };
    },
    methods: {
        goBack() {
      this.$router.push('/view/ListApart'); 
    },
  },
    created() {
      const store = useApartmentStore();
      const apartmentId = this.$route.params.id; 
      this.apartemen = store.apartments.find((apartemen) => apartemen.id === parseInt(apartmentId));
      if (!this.apartemen) {
        console.error('Apartemen tidak ditemukan!');
      }
    },
  };
  </script>
  
  <style scoped>
  .apartemen-detail-card {
    max-width: 800px;
    margin: 0 auto;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  