<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Daftar Apartemen</h1>

    <!-- Filter Harga -->
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
          <button class="btn btn-primary w-100" @click="filterApartemen">Cari</button>
        </div>
      </div>
    </div>

    <!-- Daftar Apartemen -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="apartemen in filteredApartemen" :key="apartemen.id">
        <b-card
          :title="apartemen.name"
          :img-src="apartemen.image"
          img-alt="Foto apartemen"
          img-top
          class="apartemen-card"
        >
          <p class="mb-2">{{ apartemen.description }}</p>
          <p>
            <strong>Harga:</strong> Rp {{ apartemen.price }} / bulan
          </p>
          <b-button variant="primary" @click="goToDetails(apartemen.id)">Lihat Detail</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ListApart",
  data() {
    return {
      apartemenList: [
        { id: 1, name: "Apartemen Cinta", description: "Apartemen dengan fasilitas lengkap dan nyaman, cocok untuk keluarga.", price: 1500000, image: require('@/assets/image/11.jpg') },
        { id: 2, name: "Apartemen Minimalis", description: "Apartemen minimalis dekat dengan pusat kota, cocok untuk profesional.", price: 2000000, image: require('@/assets/image/12.jpg') },
        { id: 3, name: "Apartemen Murah", description: "Apartemen terjangkau dengan fasilitas dasar dan nyaman.", price: 800000, image: require('@/assets/image/13.jpg') },
        { id: 4, name: "Apartemen Elite", description: "Apartemen mewah dengan fasilitas premium dan pemandangan luar biasa.", price: 3000000, image: require('@/assets/image/15.jpg') },
        { id: 5, name: "Apartemen Hemat", description: "Apartemen dengan harga terjangkau untuk kebutuhan dasar.", price: 1000000, image: require('@/assets/image/14.jpg') },
        { id: 6, name: "Apartemen Strategis", description: "Lokasi strategis dekat dengan pusat perbelanjaan dan transportasi umum.", price: 2500000, image: require('@/assets/image/16.jpg') },
        { id: 7, name: "Apartemen Tenang", description: "Apartemen di lingkungan yang tenang dan nyaman.", price: 1200000, image: require('@/assets/image/17.jpg') },
        { id: 8, name: "Apartemen Eksklusif", description: "Privasi dan kenyamanan terjamin di apartemen eksklusif.", price: 4000000, image: require('@/assets/image/18.jpg') },
        { id: 9, name: "Apartemen Klasik", description: "Suasana klasik dengan fasilitas modern di tengah kota.", price: 1800000, image: require('@/assets/image/19.jpg') },
        { id: 10, name: "Apartemen Sederhana", description: "Cocok untuk mahasiswa atau profesional muda dengan budget terbatas.", price: 900000, image: require('@/assets/image/20.jpg') },
      ],
      minPrice: 0,
      maxPrice: Infinity,
      filteredApartemen: [],
    };
  },
  mounted() {
    // Awalnya tampilkan semua apartemen
    this.filteredApartemen = this.apartemenList;
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`/view/ApartDetail/${id}`);
    },
    filterApartemen() {
      this.filteredApartemen = this.apartemenList.filter(
        (apartemen) => apartemen.price >= this.minPrice && apartemen.price <= this.maxPrice
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

.apartemen-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.apartemen-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.apartemen-card img {
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
