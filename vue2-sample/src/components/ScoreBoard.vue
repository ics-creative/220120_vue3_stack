<template>
  <div class="ScoreBoard">
    <div class="player">
      <span class="name">{{ p1Name }}</span
      >…
      <span class="socre">{{ p1ScoreText }}</span>
    </div>
    <div class="player">
      <span class="name">{{ p2Name }}</span
      >…
      <span class="socre">{{ p2ScoreText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { playerName } from '@/logics/playerName'
import Vue from 'vue'
export default Vue.extend({
  name: 'ScoreBoaed',
  computed: {
    p1Name() {
      return playerName('p1')
    },
    p2Name() {
      return playerName('p2')
    },
    p1ScoreText() {
      const score = this.$store.getters['score/scoreP1']
      return `${score.win}勝 ${score.lose}敗`
    },
    p2ScoreText() {
      const score = this.$store.getters['score/scoreP2']
      return `${score.win}勝 ${score.lose}敗`
    }
  }
})
</script>
