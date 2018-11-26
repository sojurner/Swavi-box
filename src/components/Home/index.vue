<template>
<div class="home-page">
  <h1 class='title'>Swavi-Box</h1>
  <BackgroundScroll></BackgroundScroll>
  <router-view></router-view>
  <i @click="toggleNav" :class="icon_class"></i>
  <NavBar v-if="displayNav"></NavBar>
</div>
</template>

<script>
import NavBar from '../NavBar';
import BackgroundScroll from '../BackgroundScroll';

export default {
  name: 'Home',
  data() {
    return {
      icon_class: 'fas fa-stream',
      displayNav: false
    };
  },

  components: {
    NavBar,
    BackgroundScroll
  },

  methods: {
    toggleNav() {
      this.displayNav = !this.displayNav;
      if (this.displayNav) {
        this.icon_class = 'fas fa-chevron-circle-left';
      } else {
        this.icon_class = 'fas fa-stream';
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100vh;
}

.title {
  font-family: jedi;
  grid-column: 2 / 3;
  color: rgb(143, 114, 75);
}

i {
  cursor: pointer;
}

.fa-stream,
.fa-chevron-circle-left {
  color: bisque;
  font-size: 1.5rem;
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
}

.fa-chevron-circle-left {
  left: 10.2rem;
  color: rgb(115, 115, 179);
}

.fa-stream:hover {
  color: rgb(154, 103, 28);
}

.fa-chevron-circle-left:hover {
  color: rgb(87, 87, 177);
}

@font-face {
  font-family: jedi;
  src: url('../../assets/fonts/STJEDISE.TTF');
}
</style>
