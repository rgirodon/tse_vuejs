<script>
import { useCounterStore } from '../store.js';
import { mapState } from 'pinia';
import { mapActions } from 'pinia';

export default {
  
  computed: {
    ...mapState(useCounterStore, ["count"])
  },

  methods : {
    ...mapActions(useCounterStore, ['incrementSimple']),
  }
}
</script>

<template>
    <button @click="incrementSimple()">
        From B (simple increment) : {{ count }}
    </button>
</template>

<style scoped>
</style>