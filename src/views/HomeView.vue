<template>
  <div class="home">
    <AppNavbar/>
    <div class="container">
      <AppBanner/>
      <div class="col">
    <h2>Ayo Lihat Lebih jauh!</h2>
    <CardProduct/>
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
