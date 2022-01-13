import { Player } from '@/logics/GameType'
import { defineStore } from 'pinia'

type State = {
  /** 勝者の履歴 */
  winners: Player[]
}

/** 勝者の履歴から指定したプレーヤーの勝敗数をカウントして返します */
const getScoreFor = (winners: Player[], player: Player) => {
  const winCount = winners.filter((p) => p === player).length
  return {
    win: winCount,
    lose: winners.length - winCount
  }
}

export const useScoreStore = defineStore({
  id: 'score',
  state: (): State => ({
    winners: []
  }),
  getters: {
    /** プレーヤー1の勝敗数を取得します */
    scoreP1(state) {
      return getScoreFor(state.winners, 'p1')
    },
    /** プレーヤー2の勝敗数を取得します */
    scoreP2(state) {
      return getScoreFor(state.winners, 'p2')
    }
  },
  actions: {
    /** ゲーム結果を追記します */
    addWinner(winner: Player) {
      this.winners = [...this.winners, winner]
    }
  }
})
