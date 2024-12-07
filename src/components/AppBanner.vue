<template>
    <div class="container">
      <div class="row align-items-center" style="min-height: 60vh;">
        
        <div class="col-md-6">
          <h2 class="text-left mb-3">
            <strong>Mau cari Kost/Apartemen murah?</strong><br />
            Papikos Solusinya!
          </h2>
          <button class="btn btn-success" @click="handleOrder">Pesan Sekarang</button>
        </div>
  
        
        <div class="col-md-6 text-center">
          <img src="../assets/image/banner.png" alt="Banner" class="img-fluid" style="max-width: 80%;">
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    name:'AppBanner',
    methods: {
    handleOrder() {
      alert("Anda Harus Login Terlebih Dahulu!");
    },
  },
};
</script>

<style scoped>
/* Tambahkan styling untuk komponen */
.text-center {
  color: #333;
  font-size: 1.8rem;
}

.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
}

img {
  margin-top: 0px;
}
</style>