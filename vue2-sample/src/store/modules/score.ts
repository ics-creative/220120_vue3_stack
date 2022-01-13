import { Player } from '@/logics/GameType'
import { Module } from 'vuex'

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

/** ゲーム勝敗履歴を管理するストアです */
export const scoreStore: Module<State, undefined> = {
  namespaced: true,
  state: {
    winners: []
  },
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
  mutations: {
    setWinners(state, winners: Player[]) {
      state.winners = winners
    }
  },
  actions: {
    /** ゲーム結果を追記します */
    addWinner(ctx, payload: { winner: Player }) {
      ctx.commit('setWinners', [...ctx.state.winners, payload.winner])
    }
  }
}
