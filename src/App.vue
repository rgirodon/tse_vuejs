<script>
import Author from "./Author.js";
import AuthorComponent from "./components/AuthorComponent.vue";

export default {

  components: {
    AuthorComponent
  },

  data() {
    let authors = [
      new Author("Victor", "Hugo", 1802),
      new Author("Paul", "Verlaine", 1844),
      new Author("Arthur", "Rimbaud", 1854),
      new Author("Albert", "Camus", 1913),
    ];

    return {
      authors: authors
    }
  }
}
</script>

<template>
  <AuthorComponent v-for="author in authors" :authorProperty="author" />
</template>

<style scoped>
</style>
