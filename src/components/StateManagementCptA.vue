<script>
import { useCounterStore } from '../store.js';
import { mapState, mapStores } from 'pinia';
import { mapActions } from 'pinia';

export default {

  computed: {
    ...mapState(useCounterStore, ["count"])
  },

  methods : {
    ...mapActions(useCounterStore, ['incrementDouble']),
  }
}
</script>

<template>
    <button @click="incrementDouble()">
        From A (double bonus) : {{ count }}
    </button>
</template>

<style scoped>
</style>