<template>
  <div class="GameBoard">
    <div class="message">
      <span>{{ message }}</span>
      <router-link v-if="$store.getters['game/isEnded']" to="/">
        トップに戻る
      </router-link>
    </div>

    <div class="board">
      <div class="cell" v-for="cellNo in 9" :key="cellNo">
        <BoardCell
          :stone="$store.state.game.board[cellNo - 1]"
          @place="placeStone(cellNo - 1)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { playerName } from '@/logics/playerName'
import Vue from 'vue'
import BoardCell from './BoardCell.vue'

export default Vue.extend({
  name: 'GameBoard',
  components: { BoardCell },
  computed: {
    /** ゲームの状況を説明するメッセージ */
    message() {
      if (this.$store.getters['game/isEnded']) {
        return this.$store.state.game.winner
          ? `${playerName(this.$store.state.game.winner)}の勝ちです！`
          : '引き分けです。'
      }
      return `${playerName(this.$store.state.game.currentTurn)}のターンです。`
    }
  },
  methods: {
    /** マスに石を置いてゲームを進めます */
    async placeStone(cellIndex: number) {
      // すでにゲームが終わっているならそれ以上置かせない
      if (this.$store.getters['game/isEnded']) return
      await this.$store.dispatch('game/placeStone', { place: cellIndex })
      // 勝者が決まったら勝敗を記録
      const winner = this.$store.state.game.winner
      if (winner) {
        this.$store.dispatch('score/addWinner', { winner })
      }
    }
  },
  mounted() {
    this.$store.dispatch('game/newGame')
  }
})
</script>

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
