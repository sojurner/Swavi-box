<template>
  <div class="content-cards">
    <section class="content-section" v-for="key in Object.keys(content)">
      <span class="property">{{key.toUpperCase()}} :</span>
      {{' '}}
      <span class="values">{{content[key]}}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContentCard",
  props: ["content", "info"]
};
</script>

<style scoped>
.content-cards {
  grid-column: 2 / 3;
  justify-self: start;
  text-align: left;
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.5rem;
  background-color: rgba(65, 65, 65, 0.893);
  padding: 0 8rem;
  border-radius: 0.5rem;
}

.values {
  color: rgb(237, 237, 210);
  font-size: 2rem;
}

.property {
  color: rgb(169, 169, 169);
  margin-right: 2rem;
}
</style>