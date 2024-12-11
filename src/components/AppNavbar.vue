<template>
  <div class="container-fluid">
    <div>
      <b-navbar toggleable="lg" type="dark" class="custom-navbar">
        <b-navbar-brand class="papikos" href="#">
          <i class="bi bi-geo-alt"></i> 
          Papikos
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item-dropdown text="Cari Apa?" right>
              <b-dropdown-item :to="{ name: 'ListKost' }">
                Kost
                <i class="bi bi-house-door"></i>
              </b-dropdown-item>
              <b-dropdown-item :to="{ name: 'ListApart'}">
                Apartemen
                <i class="bi bi-building"></i>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/view/LoginForm">
                  Login
                  <i class="bi bi-person"></i>
                </router-link>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomNavbar',
};
</script>

<style scoped>
.custom-navbar {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(45deg, #67c97e, #47a7f5);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #004d40;
}
.btn-content {
  color: #fff !important; /* Mengubah warna teks menjadi putih */
}
.papikos {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: #fff !important;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #d1f7d6 !important;
}

.b-nav-item-dropdown {
  font-size: 1rem;
}

.b-dropdown-item {
  font-size: 1rem;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.b-dropdown-item:hover {
  background-color: #47a7f5;
  color: #fff;
}

.bi {
  margin-left: 0.5rem;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .custom-navbar {
    padding: 1rem;
    border-radius: 0;
  }
}
</style>
