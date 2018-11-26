<template>
<div class="home-page">
  <p>Swavi-Box</p>
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
        this.icon_class = 'far fa-times-circle';
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
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 1fr 3fr 1fr;
}
</style>
