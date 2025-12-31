<script>
import Author from "../Author.js";
import AuthorComponent from "./AuthorComponent.vue";

export default {

  components: {
    AuthorComponent
  },

  data() {
    let victorHugo = new Author("Victor", "Hugo", 1802);
    let paulVerlaine = new Author("Paul", "Verlaine", 1844);
    let arthurRimbaud = new Author("Arthur", "Rimbaud", 1854);

    return {
      author1: victorHugo,
      author2: paulVerlaine,
      author3: arthurRimbaud
    }
  }
}
</script>

<template>
  <AuthorComponent :authorProperty="author1" />
  <AuthorComponent :authorProperty="author2" />
  <AuthorComponent :authorProperty="author3" />
</template>

<style scoped>
</style>