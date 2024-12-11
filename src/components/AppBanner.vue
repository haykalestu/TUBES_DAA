<template>
  <div class="banner-container">
    <div class="row align-items-center banner-content">
      <div class="col-md-6 text-section">
        <h2 class="text-left mb-3">
          <strong>Mau cari Kost/Apartemen murah?</strong><br />
          Papikos Solusinya!
        </h2>
        <button class="btn btn-custom" @click="handleOrder">Pesan Sekarang</button>
      </div>

      <div class="col-md-6 text-center">
        <img src="../assets/image/banner1.png" alt="Banner" class="img-fluid banner-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  methods: {
    handleOrder() {
      this.$router.push('/view/HomePage');
    },
  },
};
</script>

<style scoped>
/* Container background styling */
.banner-container {
  background: linear-gradient(135deg, #67c97e, #47a7f5);
  padding: 3rem 1.5rem;
  border-radius: 15px;
  color: #fff;
}

/* Content alignment */
.banner-content {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text styling */
.text-section h2 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.4;
}

.text-section {
  margin-bottom: 1.5rem;
}

/* Button styling */
.btn-custom {
  background-color: #ff9800;
  color: #fff;
  padding: 12px 24px;
  font-size: 1.3rem;
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-custom:hover {
  background-color: #e68900;
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

/* Image styling */
.banner-image {
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .text-section h2 {
    font-size: 2rem;
  }

  .btn-custom {
    font-size: 1.1rem;
    padding: 10px 20px;
  }

  .banner-image {
    max-width: 100%;
    margin-top: 1.5rem;
  }
}
</style>
