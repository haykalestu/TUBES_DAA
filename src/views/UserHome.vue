<template>
    <div class="role-selection">
      <h2 class="text-center mb-4">Cari Apa?</h2>
      <div class="d-flex justify-content-center gap-4">
        <button 
          class="btn btn-primary" 
          @click="selectRole('kost')">
          Kost
        </button>
        <button 
          class="btn btn-success" 
          @click="selectRole('apartemen')">
          Apartemen
        </button>
        
      </div> <br>
      <button class="btn btn-danger mb-3" @click="goHome">Kembali</button>
    </div>
  </template>

<script>

export default {
    name:'UserHome',
    methods: {
      selectRole(role) {
        // Contoh logika pemrosesan role
        console.log(`Role yang dipilih: ${role}`);
        if (role === "kost") {
          this.$router.push({ name: "ListKost" }); // Arahkan ke halaman penjual
        } else if (role === "apartemen") {
          this.$router.push({ name: "ListApart" }); // Arahkan ke halaman pembeli
        }
      },
      goHome() {
      this.$router.push("/view/HomeView");
    },
    },

}
</script>

<style scoped>
  .role-selection {
    margin: 50px auto;
    max-width: 400px;
    text-align: center;
  }
  button {
    width: 150px;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 8px;
  }
  .gap-4 > * {
    margin-right: 16px;
  }
  </style>
  

