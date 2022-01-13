import { createGame } from '@/logics/createGame'
import { placeStone } from '@/logics/placeStone'
import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'game',
  state: () => createGame(),
  getters: {
    isEnded: (state) =>
      state.winner !== undefined ||
      state.board.every((cell) => cell !== undefined)
  },
  actions: {
    newGame() {
      this.$reset()
    },
    placeStone(place: number) {
      this.$state = placeStone(this, place)
    }
  }
})
