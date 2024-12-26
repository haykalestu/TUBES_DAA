<template>
    <div class="add-kost">
      <h2 class="text-center mb-4">Tambah Kost Baru</h2>
      <form @submit.prevent="addOrUpdateKost">
        <div class="mb-3">
          <label for="name" class="form-label">Nama Kost</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="newKost.name"
            placeholder="Masukkan nama kost"
            required
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Harga (per bulan)</label>
          <input
            type="number"
            id="price"
            class="form-control"
            v-model.number="newKost.price"
            placeholder="Masukkan harga"
            required
          />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Alamat</label>
          <input
            type="text"
            id="address"
            class="form-control"
            v-model="newKost.address"
            placeholder="Masukkan alamat"
            required
          />
        </div>
        <div class="mb-3">
          <label for="city" class="form-label">Kota</label>
          <select id="city" class="form-control" v-model="newKost.city" required>
            <option value="">Pilih Kota</option>
            <option value="Bandung">Bandung</option>
            <option value="Cimahi">Cimahi</option>
            <option value="Cianjur">Cianjur</option>
            <option value="Sumedang">Sumedang</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="facilities" class="form-label">Fasilitas</label>
          <textarea
            id="facilities"
            class="form-control"
            v-model="newKost.facilities"
            placeholder="Masukkan fasilitas (pisahkan dengan koma)"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Gambar</label>
          <input
            type="file"
            id="image"
            class="form-control"
            @change="handleImageUpload"
            accept="image/*"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          {{ isEditMode ? "Update Kost" : "Tambah Kost" }}
        </button>
      </form>
  
      <!-- List Kost -->
      <div class="list-kost mt-5">
        <h3 class="text-center mb-4">Daftar Kost</h3>
        <div v-for="kost in kosts" :key="kost.id" class="card mb-3">
          <img :src="kost.image" alt="Gambar Kost" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ kost.name }}</h5>
            <p><strong>Harga:</strong> Rp {{ kost.price }} / bulan</p>
            <p><strong>Alamat:</strong> {{ kost.address }}</p>
            <p><strong>Kota:</strong> {{ kost.city }}</p>
            <p><strong>Fasilitas:</strong> {{ kost.facilities.join(", ") }}</p>
            <button class="btn btn-warning" @click="editKost(kost)">Edit</button>
            <button class="btn btn-danger" @click="deleteKost(kost.id)">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddKost",
    data() {
      return {
        newKost: {
          id: null,
          name: "",
          price: 0,
          address: "",
          city: "",
          facilities: "",
          image: null,
        },
        isEditMode: false, // Mode apakah sedang edit atau tambah
        kosts: [], // Data kost
      };
    },
    methods: {
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newKost.image = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      addOrUpdateKost() {
        if (this.isEditMode) {
          // Update kost
          const index = this.kosts.findIndex((k) => k.id === this.newKost.id);
          if (index !== -1) {
            this.kosts.splice(index, 1, {
              ...this.newKost,
              facilities: this.newKost.facilities.split(",").map((item) => item.trim()),
            });
          }
          alert("Kost berhasil diperbarui!");
        } else {
          // Tambah kost baru
          this.kosts.push({
            ...this.newKost,
            id: Date.now(),
            facilities: this.newKost.facilities.split(",").map((item) => item.trim()),
          });
          alert("Kost berhasil ditambahkan!");
        }
  
        this.saveToLocalStorage();
        this.resetForm();
      },
      deleteKost(id) {
        this.kosts = this.kosts.filter((k) => k.id !== id);
        this.saveToLocalStorage();
        alert("Kost berhasil dihapus!");
      },
      editKost(kost) {
        this.newKost = {
          id: kost.id,
          name: kost.name,
          price: kost.price,
          address: kost.address,
          city: kost.city,
          facilities: kost.facilities.join(", "),
          image: kost.image,
        };
        this.isEditMode = true;
      },
      resetForm() {
        this.newKost = {
          id: null,
          name: "",
          price: 0,
          address: "",
          city: "",
          facilities: "",
          image: null,
        };
        this.isEditMode = false;
      },
      saveToLocalStorage() {
        localStorage.setItem("kosts", JSON.stringify(this.kosts));
      },
      loadFromLocalStorage() {
        const data = localStorage.getItem("kosts");
        this.kosts = data ? JSON.parse(data) : [];
      },
    },
    created() {
      this.loadFromLocalStorage();
    },
  };
  </script>
  
  <style scoped>
  
  .add-kost {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .list-kost .card {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .card-body {
    text-align: left;
  }
  
  .card img {
    height: 200px;
    object-fit: cover;
  }
  </style>
  