<script>
import Author from "./Author.js";

export default {

  data() {
    let arthurRimbaud = new Author("Arthur", "Rimbaud");

    return {
      author: arthurRimbaud
    }
  }
}
</script>

<template>
  <h1> My Favourite Author </h1>
  <div>
    <label>First Name : </label>{{ author.firstName }}
  </div>
  <div>
    <label>Last Name : </label>{{ author.lastName }}
  </div>
</template>

<style scoped>
</style>
