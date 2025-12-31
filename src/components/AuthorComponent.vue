<script>
import Author from "../Author.js";

export default {

  props: {
    authorProperty: Author
  },

  data() {

    return {
      author: this.authorProperty,
      bookToAdd: ""
    }
  },

  methods: {
    addBook() {
      this.author.addBook(this.bookToAdd);
      this.bookToAdd = "";
    }
  },

  computed: {
    authorHasWrittenBooks() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
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
  <div>
    <label>Has ever written a book : </label>{{ authorHasWrittenBooks }}
  </div>
  <div v-if="author.isClassic()">CLASSIC</div>
  <h2>Books</h2>
  <ul>
    <li v-for="book in author.books">
      {{ book }}
    </li>
  </ul>

  <div>
    <p>Add a book :</p>
    <input v-model="bookToAdd" />
    <button @click="addBook">Add</button>
  </div>

</template>

<style scoped>
h1 {
  color: rgb(151, 192, 216);
}
label {
  font-weight: bold;
}
</style>