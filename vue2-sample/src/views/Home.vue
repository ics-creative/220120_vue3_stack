<template>
  <div class="home">
    <HomeTitle />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeTitle from '@/components/HomeTitle.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HomeTitle
  }
})
</script>
