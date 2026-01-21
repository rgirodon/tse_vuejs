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
    <button @click="store.incrementDouble()">
        From A (double bonus) : {{ store.count }}
    </button>
</template>

<style scoped>
</style>