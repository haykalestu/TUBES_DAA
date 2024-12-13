<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Daftar Apartemen</h1>
    <button class="btn btn-danger mb-3" @click="goHome">Kembali</button>

    <!-- Filter Harga -->
    <div class="mb-4">
      <h5>Filter Harga</h5>
      <div class="row">
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Harga Minimum"
            v-model.number="minPrice"
            :min="0"
          />
        </div>
        <div class="col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Harga Maksimum"
            v-model.number="maxPrice"
            :min="minPrice"
          />
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100" @click="filterApartemen">
            Cari
          </button>
        </div>
      </div>
    </div>

    <!-- Filter Lokasi -->
    <div class="mb-4">
      <h5>Filter Lokasi</h5>
      <div class="row">
        <div class="col-md-4">
          <select class="form-control" v-model="selectedCity">
            <option value="">Pilih Kota</option>
            <option value="Bandung">Bandung</option>
            <option value="Cimahi">Cimahi</option>
            <option value="Cianjur">Cianjur</option>
            <option value="Sumedang">Sumedang</option>
          </select>
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100" @click="filterApartemen">
            Filter Lokasi
          </button>
        </div>
      </div>
    </div>

    <!-- Daftar Apartemen -->
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="apartemen in filteredApartemen"
        :key="apartemen.id"
      >
        <b-card
          :title="apartemen.name"
          :img-src="apartemen.image"
          img-alt="Foto apartemen"
          img-top
          class="apartemen-card"
        >
          <p class="mb-2">{{ apartemen.description }}</p>
          <p><strong>Kota:</strong> {{ apartemen.city }}</p>
          <p><strong>Harga:</strong> Rp {{ apartemen.price }} / bulan</p>

          <b-button
            variant="primary"
            class="mt-2"
            @click="goToDetails(apartemen.id)"
          >
            Lihat Detail
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useApartmentStore } from "@/stores/Apartemen";

export default {
  name: "ListApart",
  data() {
    return {
      minPrice: 0,
      maxPrice: Infinity,
      selectedCity: "",
      filteredApartemen: [],
      isAdmin: true,
    };
  },
  computed: {
    apartments() {
      const store = useApartmentStore();
      return store.apartments;
    },
  },
  watch: {
    apartments: {
      immediate: true,
      handler(newValue) {
        this.filteredApartemen = newValue;
      },
    },
  },
  methods: {
    goHome() {
      this.$router.push("/view/UserHome");
    },
    goToDetails(id) {
      this.$router.push(`/view/ApartDetail/${id}`);
    },
    filterApartemen() {
      const filtered = this.apartments
        .filter((apartemen) => {
          return (
            apartemen.price >= this.minPrice &&
            apartemen.price <= this.maxPrice &&
            (this.selectedCity === "" || apartemen.city === this.selectedCity)
          );
        })
        .sort((a, b) => {
          const citiesOrder = ["Bandung", "Cimahi", "Cianjur", "Sumedang"];
          return citiesOrder.indexOf(a.city) - citiesOrder.indexOf(b.city);
        });

      this.filteredApartemen = filtered;
    },
    editApartemen(apartemen) {
      this.$router.push({
        name: "AddApart",
        query: {
          id: apartemen.id,
          name: apartemen.name,
          price: apartemen.price,
          address: apartemen.address,
          facilities: apartemen.facilities.join(", "),
          image: apartemen.image,
        },
      });
    },
    deleteApartemen(id) {
      const store = useApartmentStore();
      store.deleteApartment(id);
      this.filterApartemen();
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  color: #333;
}

.apartemen-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.apartemen-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
}

.mb-4 {
  margin-bottom: 30px;
}

button:hover {
  background-color: #0056b3;
}

input {
  border-radius: 10px;
  padding: 10px;
}

select {
  border-radius: 10px;
  padding: 10px;
}

.row {
  margin-top: 20px;
}
</style>
