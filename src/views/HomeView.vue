<template>
  <div class="home">
    <AppNavbar />
    <div class="container">
      <AppBanner />
      <div class="col">
        <h2 class="highlight-text">Ayo Lihat Lebih Jauh!</h2>
        <CardProduct />
        
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/AppNavbar.vue'
import AppBanner from '@/components/AppBanner.vue'
import CardProduct from '@/components/CardProduct.vue';


export default {
  name: 'HomeView',
  components: {
    AppNavbar,
    AppBanner,
    CardProduct
    
  },
}
</script>

<style scoped>
.home {
  background: url('@/assets/image/background1.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh; /* Agar background menutupi seluruh tampilan */
  color: #fff; /* Warna teks agar kontras dengan background */
}

.container {
  background-color: rgba(255, 255, 255, 0.8); /* Tambahkan latar belakang semi-transparan pada kontainer */
  border-radius: 10px;
  padding: 20px;
}

.highlight-text {
  font-size: 3rem; /* Ukuran teks lebih besar */
  font-weight: bold;
  color: #000000; /* Warna teks cerah agar menarik */
  text-align: center;
  animation: slideUp 1s ease-out forwards;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

.highlight-text:hover {
  color: #00fd87;
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 0.3s, color 0.3s;
}
</style>
