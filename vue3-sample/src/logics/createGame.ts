import { GameState, Player } from './GameType'

export const createGame = (firstTrun: Player = 'p1'): GameState => {
  return {
    winner: undefined,
    currentTurn: firstTrun,
    board: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ]
  }
}
