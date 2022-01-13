<script lang="ts" setup>
import { playerName } from '@/logics/playerName'
import { useScoreStore } from '@/stores/score'
const store = useScoreStore()
</script>

<template>
  <div class="ScoreBoard">
    <div class="player">
      <span class="name">{{ playerName('p1') }}</span
      >…
      <span class="socre">{{
        `${store.scoreP1.win}勝 ${store.scoreP1.lose}敗`
      }}</span>
    </div>
    <div class="player">
      <span class="name">{{ playerName('p2') }}</span
      >…
      <span class="socre">{{
        `${store.scoreP2.win}勝 ${store.scoreP2.lose}敗`
      }}</span>
    </div>
  </div>
</template>
