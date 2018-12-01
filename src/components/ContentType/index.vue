<template>
  <table>
    <tbody>
      <tr class="table-headers">
        <th class="table-header">NAME</th>
      </tr>
      <tr
        class="table-data"
        v-for="item in headers"
        :class="{'table-data-active': (activeRow===item.name)}"
        @click="selectCard(item.name)"
      >
        <td>{{item.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ContentType",
  props: ["headers"],
  data() {
    return {
      activeRow: ""
    };
  },
  methods: {
    selectCard(name) {
      this.$emit("selectedCard", name);
      this.activeRow = name;
    },
    searchList() {
      if (this.inputValue.length < 2) {
        return this.$props.headers;
      } else {
        const filtered = this.$props.headers.filter(item =>
          item.name.toLowerCase().includes(this.inputValue)
        );
        return filtered;
      }
    }
  },

  computed: {
    setData() {
      return this.searchList();
    }
  }
};
</script>

<style scoped>
table {
  margin: auto 0 auto 3rem;
  grid-column: 1 / 2;
  justify-self: start;
  width: 13rem;
}

tbody {
  border-radius: 0.5rem;
  display: block;
  height: 40rem;
  overflow-y: scroll;
  justify-self: start;
}

td {
  padding: 0.2rem 1rem;
}

tr {
  cursor: pointer;
  color: #748394;
  font-size: 1.4rem;
  padding: 1rem;
  background-color: #2d3846;
}

tr:hover {
  color: rgb(181, 181, 141);
  background-color: #374f55;
}

tr:nth-child(1) {
  color: #5c6a7b;
  font-size: 1.4rem;
  background-color: #3d4857;
}

.table-data-active {
  background-color: #435168;
  color: #7d9ada;
}
</style>