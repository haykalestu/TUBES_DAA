<template>
    <div class="role-selection">
      <h2 class="text-center mb-4">Siapa Kamu?</h2>
      <div class="d-flex justify-content-center gap-4">
        <button 
          class="btn btn-primary" 
          @click="selectRole('penjual')">
          Penjual
        </button>
        <button 
          class="btn btn-success" 
          @click="selectRole('pembeli')">
          Pembeli
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RoleSelection",
    methods: {
      selectRole(role) {
        // Contoh logika pemrosesan role
        console.log(`Role yang dipilih: ${role}`);
        if (role === "penjual") {
          this.$router.push({ name: "RegisterPenjual" }); // Arahkan ke halaman penjual
        } else if (role === "pembeli") {
          this.$router.push({ name: "RegisterForm" }); // Arahkan ke halaman pembeli
        }
      },
    },
  };
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
  