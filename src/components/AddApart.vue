<template>
  <div class="add-apart">
    <h2 class="text-center mb-4">Tambah Apartemen Baru</h2>
    <form @submit.prevent="addOrUpdateApartemen">
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
      <button type="submit" class="btn btn-primary w-100">
        {{ isEditMode ? "Update Apartemen" : "Tambah Apartemen" }}
      </button>
    </form>

    <!-- List Apartemen -->
    <div class="list-apart mt-5">
      <h3 class="text-center mb-4">Daftar Apartemen</h3>
      <div v-for="apartemen in apartments" :key="apartemen.id" class="card mb-3">
        <img :src="apartemen.image" alt="Gambar Apartemen" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ apartemen.name }}</h5>
          <p><strong>Harga:</strong> Rp {{ apartemen.price }} / bulan</p>
          <p><strong>Alamat:</strong> {{ apartemen.address }}</p>
          <p><strong>Fasilitas:</strong> {{ apartemen.facilities.join(", ") }}</p>
          <button class="btn btn-warning" @click="editApartemen(apartemen)">Edit</button>
          <button class="btn btn-danger" @click="deleteApartemen(apartemen.id)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddApart",
  data() {
    return {
      newApart: {
        id: null,
        name: "",
        price: 0,
        address: "",
        facilities: "",
        image: null,
      },
      isEditMode: false, // Mode apakah sedang edit atau tambah
      apartments: [], // Data apartemen
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
    addOrUpdateApartemen() {
      if (this.isEditMode) {
        // Update apartemen
        const index = this.apartments.findIndex((a) => a.id === this.newApart.id);
        if (index !== -1) {
          this.apartments.splice(index, 1, {
            ...this.newApart,
            facilities: this.newApart.facilities.split(",").map((item) => item.trim()),
          });
        }
        alert("Apartemen berhasil diperbarui!");
      } else {
        // Tambah apartemen baru
        this.apartments.push({
          ...this.newApart,
          id: Date.now(),
          facilities: this.newApart.facilities.split(",").map((item) => item.trim()),
        });
        alert("Apartemen berhasil ditambahkan!");
      }

      this.saveToLocalStorage();
      this.resetForm();
    },
    deleteApartemen(id) {
      this.apartments = this.apartments.filter((a) => a.id !== id);
      this.saveToLocalStorage();
      alert("Apartemen berhasil dihapus!");
    },
    editApartemen(apartemen) {
      this.newApart = {
        id: apartemen.id,
        name: apartemen.name,
        price: apartemen.price,
        address: apartemen.address,
        facilities: apartemen.facilities.join(", "),
        image: apartemen.image,
      };
      this.isEditMode = true;
    },
    resetForm() {
      this.newApart = {
        id: null,
        name: "",
        price: 0,
        address: "",
        facilities: "",
        image: null,
      };
      this.isEditMode = false;
    },
    saveToLocalStorage() {
      localStorage.setItem("apartments", JSON.stringify(this.apartments));
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem("apartments");
      this.apartments = data ? JSON.parse(data) : [];
    },
  },
  created() {
    this.loadFromLocalStorage();
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

.list-apart .card {
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