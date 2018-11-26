<template>
  <table>
  <div>Characters</div>
    <tbody>
      <tr class=table-headers>
        <th v-for="key in speciesKeys" class="table-header">{{key}}</th>
        </tr>
      <tr v-for="species in speciesList">
        <td>{{species.name}}</td>
        <td>{{species.designation}}</td>
        <td>{{species.language}}</td>
        <td>{{species.classification}}</td>
        <td>{{species['average height']}}</td>
        <td>{{species['average lifespan']}}</td>
        <td>{{species['eye colors']}}</td>
        <td>{{species['skin colors']}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { speciesScrape } from '../../../utilities/dataCleaner.js';

export default {
  name: 'Species',

  data() {
    return {
      speciesList: null,
      speciesKeys: null
    };
  },

  async mounted() {
    let data = [];
    let next;
    const response = await fetch('https://swapi.co/api/species');
    const result = await response.json();
    data = [...data, ...result.results];
    next = result.next;
    while (next) {
      const resp = await fetch(next);
      const resu = await resp.json();
      next = resu.next;
      data = [...data, ...resu.results];
    }
    this.speciesList = data.map(species => speciesScrape(species));
    this.speciesKeys = Object.keys(this.speciesList[0]).map(key =>
      key.toUpperCase()
    );
  }
};
</script>