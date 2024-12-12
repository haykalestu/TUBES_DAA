<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Login Admin</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="credentials.username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="credentials.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminLogin",
    data() {
      return {
        credentials: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      handleLogin() {
        const { username, password } = this.credentials;
        if (username === "admin" && password === "admin123") {
          // Simpan status login di localStorage
          localStorage.setItem("isAdmin", true);
          this.$router.push("/admin/dashboard"); // Arahkan ke dashboard admin
        } else {
          alert("Username atau password salah!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  button {
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  