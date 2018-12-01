<template>
  <nav class="nav-bar">
    <p class="routes">
      <router-link v-for="route in routes" :to="route.category" class="route">
        <nav @click="toggleCard">
          <i :class="route.icon"/>
          {{route.category.toUpperCase()}}
        </nav>
      </router-link>
    </p>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      routes: [
        { category: "films", icon: "fas fa-film" },
        { category: "people", icon: "fas fa-user-astronaut" },
        { category: "species", icon: "fab fa-jedi-order" },
        { category: "starships", icon: "fab fa-galactic-senate" },
        { category: "vehicles", icon: "fab fa-old-republic" },
        { category: "planets", icon: "fas fa-globe" }
      ]
    };
  },
  methods: {
    toggleCard($event) {
      this.$root.$emit("toggleCard");
    }
  }
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  display: flex;
  height: 100vh;
  background-color: rgba(52, 69, 91, 0.488);
  border-right: 2px solid rgb(84, 84, 123);
}

.routes {
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  width: 100%;
}

.route:hover {
  border-left: 3px solid;
  background: rgb(117, 116, 116);
  /* box-shadow: 1.5px 1.5px 1.5px #ccc; */
}

.route {
  color: #dcc67d;
  margin: 0.1rem 0;
  padding: 0.5rem;
  text-decoration-line: none;
}

i {
  padding-left: 0.4rem;
}

.router-link-exact-active {
  color: rgb(116, 116, 145);
}

.router-link-exact-active:hover {
  background-color: rgb(84, 84, 123);
}
</style>
