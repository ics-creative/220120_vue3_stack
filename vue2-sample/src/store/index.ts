import Vue from 'vue'
import Vuex from 'vuex'
import { gameStore } from './modules/game'
import { scoreStore } from './modules/score'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    game: gameStore,
    score: scoreStore
  }
})
