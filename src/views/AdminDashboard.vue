<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Dashboard Admin</h1>
      <button class="btn btn-danger mb-3" @click="logout">Logout</button>
      <add-apart /> <!-- Komponen untuk menambah apartemen -->
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
        this.$router.push("/view/HomeView");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  