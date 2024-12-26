<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Tambah Kost</h1>
      <button class="btn btn-danger mb-3" @click="logout">Kembali</button>
      <add-kost /> 
    </div>
  </template>
  
  <script>
  import AddKost from '@/components/AddKost.vue';
  
  export default {
    name: "AdminDashboard1",
    components: {
      AddKost,
    },
    methods: {
      logout() {
        localStorage.removeItem("isAdmin");
        this.$router.push("/view/AdminTambah");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  