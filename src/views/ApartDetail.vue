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
  export default {
    name: "ApartDetail",
    data() {
      return {
        apartemen: {},
      };
    },
    mounted() {
      const apartemenId = this.$route.params.id;
      this.loadApartemenDetail(apartemenId);
    },
    methods: {
      // Mendapatkan data apartemen berdasarkan ID
      loadApartemenDetail(id) {
        // Data apartemen dapat diambil dari API atau daftar lokal
        const apartemenList = [
          { id: 1, name: "Apartemen Cinta", description: "Apartemen dengan fasilitas lengkap dan nyaman, cocok untuk keluarga.", price: 1500000, address: "Jalan Cinta No. 1", image: require('@/assets/image/11.jpg') },
          { id: 2, name: "Apartemen Minimalis", description: "Apartemen minimalis dekat dengan pusat kota, cocok untuk profesional.", price: 2000000, address: "Jalan Minimalis No. 2", image: require('@/assets/image/2.jpg') },
          { id: 3, name: "Apartemen Murah", description: "Apartemen terjangkau dengan fasilitas dasar dan nyaman.", price: 800000, address: "Jalan Murah No. 3", image: require('@/assets/image/3.jpg') },
          // Tambahkan data lainnya sesuai kebutuhan
        ];
        
        // Cari apartemen berdasarkan ID
        this.apartemen = apartemenList.find((item) => item.id === parseInt(id));
      },
      goBack() {
        this.$router.push('/view/ListApart');
      },
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
  