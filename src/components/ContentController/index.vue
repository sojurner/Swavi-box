<template>
  <div class="controller">
    <ContentType @selectedCard="selectCard" :type="path" :headers="toggle"></ContentType>
    <ContentCard v-if="showCard" :content="selectedItem" :info="info"></ContentCard>
  </div>
</template>

<script>
import ContentCard from "../ContentCard";
import ContentType from "../ContentType";

export default {
  name: "ContentController",
  props: ["info", "path"],
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
  computed: {
    toggle() {
      return this.$props.info;
    }
  },
  mounted() {
    this.$root.$on("toggleCard", () => {
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