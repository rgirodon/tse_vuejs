<script>
export default {
  data() {
    return {
      title: "Authors with Vue Router"
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/authors">Go to Auhtors page</router-link>
    <router-link to="/state_mgmt">Go to State management page</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
a + a {
  margin-left: 10px;
}
</style>
