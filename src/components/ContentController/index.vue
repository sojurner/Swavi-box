<template>
  <div class="controller">
    <ContentType @selectedCard="selectCard" :headers="info.map(item => {return {name: item.name}})"></ContentType>
    <ContentCard v-if="showCard" :content="selectedItem"></ContentCard>
  </div>
</template>

<script>
import ContentCard from "../ContentCard";
import ContentType from "../ContentType";

export default {
  name: "ContentController",
  props: ["info"],
  data() {
    return {
      selectedItem: null,
      showCard: false
    };
  },
  components: { ContentCard, ContentType },
  methods: {
    selectCard(name) {
      this.selectedItem = this.$props.info.find(item => item.name === name);
      this.showCard = true;
    }
  },
  mounted() {
    this.$root.$on("toggleCard", () => {
      console.log("called");
      this.showCard = false;
    });
  }
};
</script>

<style scoped>
.controller {
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: 10rem 1fr;
}
</style>