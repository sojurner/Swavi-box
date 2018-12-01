<template>
  <div>
    <h2 class="type-title">{{type.toUpperCase()}}</h2>
    <table>
      <tbody>
        <tr class="table-headers">
          <input
            class="type-search"
            :value="inputValue"
            type="text"
            placeholder="Search"
            @input="inputValue = $event.target.value"
            @keyup="searchList"
          >
        </tr>
        <tr
          class="table-data"
          v-for="item in setData"
          :class="{'table-data-active': (activeRow === item.name)}"
          @click="selectCard(item.name)"
        >
          <td>{{item.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ContentType",
  props: ["headers", "type"],
  data() {
    return {
      activeRow: "",
      inputValue: ""
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
.type-title {
  position: absolute;
  left: 0;
  right: 0;
  top: 6rem;
  margin: 0 -11rem 0 0rem;
  font-size: 2rem;
  color: #b9b5b5;
}

.type-search {
  background-color: #748394;
  color: white;
  font-size: 1.5rem;
}

table {
  margin: 2rem 0 auto 0;
  grid-column: 1 / 2;
  justify-self: start;
  width: 13rem;
  position: absolute;
  top: 0;
}

tbody {
  padding-top: 1rem;
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
  width: 13rem;
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