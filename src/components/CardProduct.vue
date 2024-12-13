<template>
  <div class="card-container">
    <div class="card">
      <img src="@/assets/image/12.jpg" alt="Gambar Apartemen" class="card-img"/>
      <div class="card-body">
        <h3 class="card-title">Apartemen Modern</h3>
        <p class="card-description">Tempat tinggal nyaman dengan fasilitas lengkap di pusat kota.</p>
        <div class="card-footer">
          <span class="card-price">Rp 3.500.000 / bulan</span>
          
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/11.jpg" alt="Gambar Apartemen" class="card-img"/>
      <div class="card-body">
        <h3 class="card-title">Apartemen Cinta</h3>
        <p class="card-description">Kos kosan dengan desain minimalis dan harga terjangkau.</p>
        <div class="card-footer">
          <span class="card-price">Rp 2.800.000 / bulan</span>
          
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/13.jpg" alt="Gambar Apartemen" class="card-img"/>
      <div class="card-body">
        <h3 class="card-title">Studio Apartemen</h3>
        <p class="card-description">Studio apartemen dengan lokasi strategis dan akses mudah.</p>
        <div class="card-footer">
          <span class="card-price">Rp 4.000.000 / bulan</span>
          
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/6.jpg" alt="Gambar Apartemen" class="card-img"/>
      <div class="card-body">
        <h3 class="card-title">Kos Kosan Pusat Kota</h3>
        <p class="card-description">Kos kosan nyaman di pusat kota, dekat fasilitas umum.</p>
        <div class="card-footer">
          <span class="card-price">Rp 2.200.000 / bulan</span>
          
        </div>
      </div>
    </div>
    <div class="card">
      <img src="@/assets/image/5.jpg" alt="Gambar Apartemen" class="card-img"/>
      <div class="card-body">
        <h3 class="card-title">Kosan Elite</h3>
        <p class="card-description">Kosan mewah dengan fasilitas premium.</p>
        <div class="card-footer">
          <span class="card-price">Rp 3.000.000 / bulan</span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct'
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  width: 18%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4CAF50;
}

.btn {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
