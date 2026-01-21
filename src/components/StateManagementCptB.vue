<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
    <button @click="store.incrementSimple()">
        From B (simple increment) : {{ store.count }}
    </button>
</template>

<style scoped>
</style>