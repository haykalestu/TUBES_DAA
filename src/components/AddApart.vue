<template>
    <div class="add-apart">
      <h2 class="text-center mb-4">Tambah Apartemen Baru</h2>
      <form @submit.prevent="addApartemen">
        <div class="mb-3">
          <label for="name" class="form-label">Nama Apartemen</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="newApart.name"
            placeholder="Masukkan nama apartemen"
            required
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Harga (per bulan)</label>
          <input
            type="number"
            id="price"
            class="form-control"
            v-model.number="newApart.price"
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
            v-model="newApart.address"
            placeholder="Masukkan alamat"
            required
          />
        </div>
        <div class="mb-3">
          <label for="facilities" class="form-label">Fasilitas</label>
          <textarea
            id="facilities"
            class="form-control"
            v-model="newApart.facilities"
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
        <button type="submit" class="btn btn-primary w-100">Tambah Apartemen</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useApartmentStore } from "@/stores/Apartemen";

export default {
  name: "AddApart",
  data() {
    return {
      newApart: {
        id: Date.now(),
        name: "",
        price: 0,
        address: "",
        facilities: "",
        image: null,
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newApart.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addApartemen() {
      if (!this.newApart.image) {
        alert("Silakan unggah gambar terlebih dahulu!");
        return;
      }

      const store = useApartmentStore();
      store.addApartment({
        ...this.newApart,
        facilities: this.newApart.facilities.split(",").map((item) => item.trim()),
      });

      alert("Apartemen berhasil ditambahkan!");
      this.newApart = {
        id: Date.now(),
        name: "",
        price: 0,
        address: "",
        facilities: "",
        image: null,
      };

      // Redirect setelah penambahan
      this.$router.push("/view/ListApart");
    },
  },
};

  </script>
  
  <style scoped>
  .add-apart {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  button {
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    color: #333;
    font-size: 1.5rem;
  }
  </style>
  