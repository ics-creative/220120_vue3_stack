<template>
  <div id="app">
    <ScoreBoard />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ScoreBoard from './components/ScoreBoard.vue'
export default Vue.extend({
  name: 'App',
  components: { ScoreBoard }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
