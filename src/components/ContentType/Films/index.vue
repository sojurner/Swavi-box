

<template>
  <div class="film-container">
    <p v-for="film in films">
    <span class="film-episode">Ep. {{film.episode}} :</span>
    <span @click="selectFilm(film)" class="film-title">  {{film.title}}</span>
    </p>
    <!-- <FilmContents></FilmContents> -->
  </div>
</template>

<script>
import axios from 'axios';
import { filmScrape } from '../../../utilities/dataCleaner.js';

export default {
  name: 'films',
  // components: {
  //   FilmContents
  // },
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
  mounted() {
    axios.get('https://swapi.co/api/films').then(response => {
      const modifiedFilms = response.data.results
        .map(film => {
          return filmScrape(film);
        })
        .sort((a, b) => a.episode - b.episode);
      this.films = modifiedFilms;
    });
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