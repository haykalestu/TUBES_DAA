<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Daftar Kosan</h1>
      <button class="btn btn-danger mb-3" @click="goHome">Kembali</button>
  
      
      <div class="mb-4">
        <h5>Filter Harga</h5>
        <div class="row">
          <div class="col-md-4">
            <input
              type="number"
              class="form-control"
              placeholder="Harga Minimum"
              v-model.number="minPrice"
            />
          </div>
          <div class="col-md-4">
            <input
              type="number"
              class="form-control"
              placeholder="Harga Maksimum"
              v-model.number="maxPrice"
            />
          </div>
          <div class="col-md-4">
            <button class="btn btn-primary w-100" @click="filterKosan">Cari</button>
          </div>
        </div>
      </div>
  
      
      <div class="row">
        <div class="col-md-4 mb-4" v-for="kosan in filteredKosan" :key="kosan.id">
          <b-card
            :title="kosan.name"
            :img-src="kosan.image"
            img-alt="Foto kosan"
            img-top
            class="kosan-card"
          >
            <p class="mb-2">{{ kosan.description }}</p>
            <p>
              <strong>Harga:</strong> Rp {{ kosan.price }} / bulan
            </p>
            <b-button variant="primary" @click="goToDetails(kosan.id)">Lihat Detail</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListKost",
    data() {
      return {
        kosanList: [
          { id: 1, name: "Kosan Sejuk", description: "Kosan dengan fasilitas lengkap dan nyaman.", price: 1500000, image: require('@/assets/image/1.jpg') },
          { id: 2, name: "Kosan Minimalis", description: "Kosan minimalis dekat dengan pusat kota.", price: 2000000, image: require('@/assets/image/2.jpg') },
          { id: 3, name: "Kosan Murah", description: "Kosan murah dengan fasilitas sederhana.", price: 800000, image: require('@/assets/image/3.jpg') },
          { id: 4, name: "Kosan Elite", description: "Kosan mewah dengan fasilitas premium.", price: 3000000, image: require('@/assets/image/5.jpg') },
          { id: 5, name: "Kosan Hemat", description: "Kosan dengan biaya terjangkau.", price: 1000000, image: require('@/assets/image/4.jpg') },
          { id: 6, name: "Kosan Strategis", description: "Dekat dengan pusat perbelanjaan dan transportasi umum.", price: 2500000, image: require('@/assets/image/6.jpg') },
          { id: 7, name: "Kosan Tenang", description: "Lingkungan yang tenang dan nyaman.", price: 1200000, image: require('@/assets/image/7.jpg') },
          { id: 8, name: "Kosan Eksklusif", description: "Privasi dan kenyamanan terjamin.", price: 4000000, image: require('@/assets/image/8.jpg') },
          { id: 9, name: "Kosan Klasik", description: "Suasana klasik dengan fasilitas modern.", price: 1800000, image: require('@/assets/image/9.jpg') },
          { id: 10, name: "Kosan Sederhana", description: "Cocok untuk mahasiswa dengan budget terbatas.", price: 900000, image: require('@/assets/image/10.jpg') },
        ],
        minPrice: 0,
        maxPrice: Infinity,
        filteredKosan: [],
      };
    },
    mounted() {
      
      this.filteredKosan = this.kosanList;
    },
    methods: {
      goHome() {
      this.$router.push("/view/UserHome");
    },
      goToDetails(id) {
        this.$router.push(`/kosan/${id}`);
      },
      filterKosan() {
        this.filteredKosan = this.kosanList.filter(
          (kosan) => kosan.price >= this.minPrice && kosan.price <= this.maxPrice
        );
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  .kosan-card {
    transition: transform 0.3s, box-shadow 0.3s;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .kosan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .kosan-card img {
    border-bottom: 1px solid #ddd;
  }
  
  button {
    margin-top: 10px;
  }
  
  .mb-4 {
    margin-bottom: 30px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  input {
    border-radius: 10px;
    padding: 10px;
  }
  
  .row {
    margin-top: 20px;
  }
  </style>
  