<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

export default {
  components: {},
};
</script>

<template>
  <nav id="nav" class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/">
        <img
          to="/"
          src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4-1.png"
          alt="Marvel"
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ComicList">Cómics</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CharacList">Personajes</router-link>
          </li>
        </ul>
        <span><i style="color: lightgray;" class="bi bi-person-circle"></i></span>
        <span>
          <router-link class="nav-link" to="/login">Ingresar</router-link>
        </span>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
