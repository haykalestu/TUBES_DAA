<template>
    <div class="container">
      <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="col-md-4">
          <h2 class="text-center mb-4">Login</h2>
  
          
          <b-form @submit.prevent="handleLogin">
            
            <b-form-group label="Email" label-for="email-input">
              <b-form-input
                id="email-input"
                v-model="email"
                type="email"
                placeholder="Masukkan email"
                required
              ></b-form-input>
            </b-form-group>
  
            
            <b-form-group label="Password" label-for="password-input">
              <b-form-input
                id="password-input"
                v-model="password"
                type="password"
                placeholder="Masukkan password"
                required
              ></b-form-input>
            </b-form-group>
  
            
            <b-button type="submit" variant="success" block>Login</b-button>
            <b-button @click="goToHomePage" variant="success" block> <i class="bi bi-arrow-left"></i> Home </b-button>
          </b-form>
  
          <div class="mt-3 text-center">
            <p>Kamu Siapa? <router-link to="/view/RoleSelection">Pilih disini</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "LoginForm",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
        goToHomePage() {
      this.$router.push('/'); 
    },
      async handleLogin() {
        try {
          
          const response = await axios.post('https://api.example.com/login', {
            email: this.email,
            password: this.password,
          });
  
          // Cek jika login berhasil dan ada token
          if (response.data.token) {
            // Simpan token dan role (penjual atau pembeli) di localStorage
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('role', response.data.role); // Menyimpan role pengguna
  
            // Redirect berdasarkan role pengguna
            if (response.data.role === 'penjual') {
              this.$router.push('/penjual-dashboard'); // Arahkan ke halaman penjual
            } else if (response.data.role === 'pembeli') {
              this.$router.push('/pembeli-dashboard'); // Arahkan ke halaman pembeli
            }
          } else {
            alert('Email atau password salah!');
          }
        } catch (error) {
          console.error(error);
          alert('Terjadi kesalahan, coba lagi!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.8rem;
  }
  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 10px;
    margin: 50px;
  }
  </style>
  