<template>
  <div class="kost-detail">
    <b-card
      v-if="kost"
      :title="kost.name"
      :img-src="kost.image"
      img-alt="Foto Kost"
      img-top
      class="kost-detail-card"
    >
      <p>{{ kost.description }}</p>
      <p><strong>Harga:</strong> Rp {{ kost.price }} / bulan</p>
      <p><strong>Alamat:</strong> {{ kost.address }}</p>
      <b-button variant="secondary" @click="goBack">Kembali</b-button>
    </b-card>
    <div v-else class="text-center mt-5">
      <p>Kost tidak ditemukan!</p>
      <b-button variant="secondary" @click="goBack">Kembali</b-button>
    </div>
  </div>
</template>

<script>
import { useKostStore } from "@/stores/Kost";

export default {
  name: "KostDetail",
  data() {
    return {
      kost: null,
    };
  },
  methods: {
    goBack() {
      this.$router.back(); // Kembali ke halaman sebelumnya
    },
  },
  created() {
    const store = useKostStore();
    const kostId = Number(this.$route.params.id); // Konversi ke angka
    this.kost = store.kosts.find((kost) => kost.id === kostId);
    if (!this.kost) {
      console.error("Kost tidak ditemukan!");
    }
  },
};
</script>

<style scoped>
.kost-detail-card {
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

button {
  margin-top: 10px;
}
</style>
