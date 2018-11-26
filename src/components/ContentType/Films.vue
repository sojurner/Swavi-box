

<template>
  <div>
    <p v-for="film in films">
    <button @click="selectFilm(film)">{{film.title}}</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import { filmScrape } from '../../utilities/dataCleaner.js';

export default {
  name: 'films',
  data() {
    return {
      films: null
    };
  },
  methods: {
    selectFilm(film) {
      this.$root.$emit('filmCrawl', film);
    }
  },

  mounted() {
    axios.get('https://swapi.co/api/films').then(response => {
      const modifiedFilms = response.data.results.map(film => {
        return filmScrape(film);
      });
      this.films = modifiedFilms;
    });
  }
};
</script>