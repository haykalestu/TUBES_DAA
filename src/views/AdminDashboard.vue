<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Tambah Apartemen</h1>
      <button class="btn btn-danger mb-3" @click="logout">Kembali</button>
      <add-apart /> 
    </div>
  </template>
  
  <script>
  import AddApart from "@/components/AddApart.vue";
  
  export default {
    name: "AdminDashboard",
    components: {
      AddApart,
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
  