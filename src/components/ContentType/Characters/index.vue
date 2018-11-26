<template>
  <table>
  <div>Characters</div>
    <tbody>
      <tr class=table-headers>
        <th v-for="key in characterKeys" class="table-header">{{key}}</th>
        </tr>
      <tr v-for="char in characterList">
        <td>{{char.name}}</td>
        <td>{{char.height}}</td>
        <td>{{char.mass}}</td>
        <td>{{char.gender}}</td>
        <td>{{char['eye color']}}</td>
        <td>{{char['skin color']}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { characterScrape } from '../../../utilities/dataCleaner.js';

export default {
  name: 'Characters',
  data() {
    return {
      characterList: null,
      characterKeys: null
    };
  },
  async mounted() {
    let data = [];
    let next;
    const response = await fetch('https://swapi.co/api/people');
    const result = await response.json();
    data = [...data, ...result.results];
    next = result.next;
    while (next) {
      const resp = await fetch(next);
      const resu = await resp.json();
      next = resu.next;
      data = [...data, ...resu.results];
    }
    this.characterList = data.map(char => characterScrape(char));
    this.characterKeys = Object.keys(this.characterList[0]).map(key =>
      key.toUpperCase()
    );
  }
};
</script>

<style scoped>
.table-headers {
  color: gray;
}

tr:nth-child(even) {
  font-size: 1.4rem;
  background-color: #7d7d7d;
  color: #414141;
}

tr:nth-child(odd) {
  color: #9a9a9a;
  font-size: 1.4rem;
  background-color: #4f4f4f;
}

table {
  width: 90%;
  margin: auto;
}

tbody {
  display: block;
  height: 40rem;
  overflow-y: scroll;
}
</style>