<template>
<nav class="Nav-Bar">
  <p class="routes">
    <router-link v-for="route in routes" :to="route.category" class="route"><i :class="route.icon"/> {{route.category.toUpperCase()}}</router-link>
  </p>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      routes: [
        { category: 'films', icon: 'fas fa-film' },
        { category: 'people', icon: 'fas fa-user-astronaut' },
        { category: 'species', icon: 'fab fa-jedi-order' },
        { category: 'starships', icon: 'fab fa-galactic-senate' },
        { category: 'vehicles', icon: 'fab fa-old-republic' },
        { category: 'planets', icon: 'fas fa-globe' }
      ]
    };
  }
};
</script>

<style scoped>
.routes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.router-link-exact-active {
  color: rgb(65, 129, 167);
}
</style>
