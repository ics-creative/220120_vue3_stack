import { createGame } from '@/logics/createGame'
import { GameState } from '@/logics/GameType'
import { placeStone } from '@/logics/placeStone'
import { Module } from 'vuex'

export const gameStore: Module<GameState, undefined> = {
  namespaced: true,
  state: createGame(),
  getters: {
    isEnded: (state) =>
      // 勝敗が決まっている
      state.winner !== undefined ||
      // 全てのマスが埋まっている
      state.board.every((cell) => cell !== undefined)
  },
  mutations: {
    /** ゲームをリセットします */
    reset(state) {
      const blankGame = createGame()
      state.board = blankGame.board
      state.currentTurn = blankGame.currentTurn
      state.winner = blankGame.winner
    },
    /** ゲーム状態を変更します */
    setGame(state, game: GameState) {
      state.board = game.board
      state.currentTurn = game.currentTurn
      state.winner = game.winner
    }
  },
  actions: {
    newGame(ctx) {
      // ストアをリセット（初期状態に戻す）
      ctx.commit('reset')
    },
    placeStone(ctx, payload: { place: number }) {
      ctx.commit('setGame', placeStone(ctx.state, payload.place))
    }
  }
}
