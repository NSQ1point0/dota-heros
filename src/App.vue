<template>
  <div id="nav">
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("herosDataLoader")
  }
}
</script>

<style lang="scss">
@import "./assets/scss/custom.scss";
</style>
