<template>
    <div>
      <h2>Daftar Akun</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            placeholder="Masukkan username Anda"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Masukkan email Anda"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Masukkan password Anda"
            required
          />
        </div>
  
        <button type="submit" class="btn btn-success">Daftar</button>
      </form>
  
      <div class="mt-3">
        <p>Sudah punya akun? <router-link to="/view/loginForm">Login di sini</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';


  export default {
    name: 'RegisterForm',
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
     async handleRegister() {
        // Membuat objek data dari input pengguna
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
  
        // Menampilkan data di konsol
        axios.post('http://localhost:8081/api/register', data)
  .then(res => {
    console.log('Berhasil mendaftar:', res.data);
    alert('Pendaftaran berhasil!');
       } ).catch(err => {
    console.error('Terjadi kesalahan:', err);
    alert('Pendaftaran gagal, coba lagi.');
            }
        )
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling tambahan untuk form registrasi */
  </style>
  