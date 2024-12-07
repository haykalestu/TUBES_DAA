<template>
  <div class="container-fluid">
    <div>
    <b-navbar toggleable="lg" type="dark" class="custom-Navbar">
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
              <i class="bi bi-house-door"></i></b-dropdown-item>
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

</script>
<style>
.custom-Navbar {
  width: 100%;
  padding: 1.5rem;
  background-color: #67c97e;
  border-radius: 5px;
  border-bottom: 2px solid #000000;
}






</style>