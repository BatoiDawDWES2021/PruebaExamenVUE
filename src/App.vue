<template>

  <div id="app">
    <div id="nav">
      <router-link to="/">Bienvenida</router-link> |
      <router-link to="/empresa">Empresas</router-link> |
      <router-link to="/new">Nueva oferta</router-link> |
      <router-link to="/about">Acerca de</router-link>
    </div>
    <router-view/>
    <footer>Manu Pelaez</footer>
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  created(){
    this.$store.dispatch('loadEmpresas'),
    this.$store.dispatch('loadOfertas'),
    this.$store.dispatch('loadOferta')
  }
}
</script>