<template>
  <div class="film-container">
    <p v-for="film in films">
    <span class="film-episode">Ep. {{film.episode}} :</span>
    <span @click="selectFilm(film)" class="film-title">  {{film.title}}</span>
    </p>
  </div>
</template>

<script>
import { filmScrape } from '../../utilities/dataCleaner.js';
export default {
  name: 'films',
  data() {
    return {
      films: null,
      filmContent: null
    };
  },
  methods: {
    selectFilm(film) {
      this.$root.$emit('filmCrawl', film);
    }
  },
  async mounted() {
    const response = await fetch('https://swapi.co/api/films');
    const result = await response.json();
    const modifiedFilms = result.results
      .map(film => {
        return filmScrape(film);
      })
      .sort((a, b) => a.episode - b.episode);
    this.films = modifiedFilms;
  }
};
</script>

<style scoped>
.film-container {
  text-align: left;
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  margin-left: 2rem;
}
.film-episode {
  color: rgb(176, 176, 176);
}
.film-title {
  color: rgb(215, 199, 179);
}
</style>