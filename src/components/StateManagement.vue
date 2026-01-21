<script>
import StateManagementCptA from "./StateManagementCptA.vue";
import StateManagementCptB from "./StateManagementCptB.vue";

export default {

  components: {
    StateManagementCptA,
    StateManagementCptB,
  }
}
</script>

<template>
  <div>
    <StateManagementCptA />
  </div>
  <div>
    <StateManagementCptB />
  </div>
</template>

<style scoped>
  div {
    margin-top: 10px;
  }
</style>