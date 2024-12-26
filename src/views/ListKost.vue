<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Daftar Kost</h1>
    <button class="btn btn-danger mb-3" @click="goHome">Kembali</button>

    <!-- Filter Harga dan Lokasi -->
    <div class="mb-4">
      <h5>Filter Kost</h5>
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
          <select class="form-control" v-model="selectedCity">
            <option value="">Pilih Kota</option>
            <option value="Bandung">Bandung</option>
            <option value="Cimahi">Cimahi</option>
            <option value="Cianjur">Cianjur</option>
            <option value="Sumedang">Sumedang</option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <button class="btn btn-primary w-100" @click="filterKost">
            Terapkan Filter
          </button>
        </div>
      </div>
    </div>

    <!-- Daftar Kost -->
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="kost in filteredKost"
        :key="kost.id"
      >
        <b-card
          :title="kost.name"
          :img-src="kost.image"
          img-alt="Foto kost"
          img-top
          class="kost-card"
        >
          <p class="mb-2">{{ kost.description }}</p>
          <p><strong>Kota:</strong> {{ kost.city }}</p>
          <p><strong>Harga:</strong> Rp {{ kost.price }} / bulan</p>

          <b-button
            variant="primary"
            class="mt-2"
            @click="goToDetails(kost.id)"
          >
            Lihat Detail
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
import { useKostStore } from "@/stores/Kost";

export default {
  name: "ListKost",
  data() {
    return {
      minPrice: 0,
      maxPrice: Infinity,
      selectedCity: "",
      filteredKost: [],
      isAdmin: true,
    };
  },
  computed: {
    kosts() {
      const store = useKostStore();
      return store.kosts;
    },
  },
  watch: {
    kosts: {
      immediate: true,
      handler(newValue) {
        this.filteredKost = newValue;
      },
    },
  },
  methods: {
    goHome() {
      this.$router.push("/view/UserHome");
    },
    goToDetails(id) {
      this.$router.push(`/view/KostDetail/${id}`);
    },
    filterKost() {
      this.filteredKost = this.kosts.filter((kost) => {
        const matchesPrice =
          kost.price >= this.minPrice && kost.price <= this.maxPrice;
        const matchesCity =
          this.selectedCity === "" || kost.city === this.selectedCity;
        return matchesPrice && matchesCity;
      });
    },
    editKost(kost) {
      this.$router.push({
        name: "AddKost",
        query: {
          id: kost.id,
          name: kost.name,
          price: kost.price,
          address: kost.address,
          facilities: kost.facilities.join(", "),
          image: kost.image,
        },
      });
    },
    deleteKost(id) {
      const store = useKostStore();
      store.deleteKost(id);
      this.filterKost();
    },
  },
};
</script>


<style scoped>
h1 {
  font-size: 2.5rem;
  color: #333;
}

.kost-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.kost-card:hover {
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
