<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useGameStore } from '@/stores/game'
import { playerName } from '@/logics/playerName'
import BoardCell from './BoardCell.vue'
import { useScoreStore } from '@/stores/score'

// Piniaのストアを読み込む
const game = useGameStore()
const score = useScoreStore()

/** ゲームの状況を説明するメッセージ */
const message = computed(() => {
  if (game.isEnded) {
    return game.winner
      ? `${playerName(game.winner)}の勝ちです！`
      : '引き分けです。'
  }
  return `${playerName(game.currentTurn)}のターンです。`
})

/** マスに石を置いてゲームを進めます */
const placeStone = (cellIndex: number) => {
  // すでにゲームが終わっているならそれ以上置かせない
  if (game.isEnded) return
  game.placeStone(cellIndex)
  // 勝者が決まったら勝敗を記録
  const winner = game.winner
  if (winner) {
    score.addWinner(winner)
  }
}
onMounted(() => game.newGame())
</script>

<template>
  <div class="GameBoard">
    <div class="message">
      <span>{{ message }}</span>
      <router-link v-if="game.isEnded" to="/">トップに戻る</router-link>
    </div>

    <div class="board">
      <div class="cell" v-for="cellNo in 9" :key="cellNo">
        <BoardCell
          :stone="game.board[cellNo - 1]"
          @place="placeStone(cellNo - 1)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.GameBoard {
  .board {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    gap: 8px;
  }
}
</style>
