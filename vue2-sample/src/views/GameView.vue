<template>
  <div class="GameBoardView">
    <GameBoard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameBoard from '@/components/GameBoard.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'GameBoardView',
  components: {
    GameBoard
  }
})
</script>
