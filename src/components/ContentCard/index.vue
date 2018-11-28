<template>
  <div class="content-card">
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
  props: ["content"]
};
</script>

<style scoped>
.content-card {
  grid-column: 2 / 3;
  justify-self: start;
  text-align: left;
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.5rem;
}

.values {
  color: rgb(250, 250, 229);
}

.property {
  color: rgb(186, 186, 186);
}
</style>