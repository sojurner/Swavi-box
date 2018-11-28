<template>
  <table>
    <div></div>
    <tbody>
      <tr class="table-headers">
        <th v-for="key in Object.keys(data[0])" class="table-header">{{key.toUpperCase()}}</th>
      </tr>
      <tr v-for="item in data">
        <td v-for="key in Object.keys(data[0])">{{item[key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["data", "headers"],
  name: "contentType"
};
</script>

<style scoped>
tr:nth-child(even) {
  font-size: 1.4rem;
  background-color: #343f51;
  color: #6e88c2;
}

tr:nth-child(even):hover {
  color: rgb(181, 181, 141);
  background-color: #374f55;
}

tr:nth-child(odd) {
  color: #5c6a7b;
  font-size: 1.4rem;
  background-color: #2d3846;
}

tr:nth-child(odd):hover {
  background-color: rgb(53, 75, 75);
  color: #74938a;
}

table {
  margin: auto;
}

tbody {
  border-radius: 0.5rem;
  display: block;
  height: 40rem;
  overflow-y: scroll;
}
</style>