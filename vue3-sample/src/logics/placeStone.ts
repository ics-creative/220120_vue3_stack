import { BoardState, GameState, Player } from './GameType'

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const detectWinner = (board: BoardState): Player | undefined => {
  for (const line of LINES) {
    const stones = line.map((index) => board[index])
    if (stones.every((stone) => stone === 'p1')) return 'p1'
    if (stones.every((stone) => stone === 'p2')) return 'p2'
  }
  return undefined
}

export const placeStone = (state: GameState, place: number): GameState => {
  if (state.winner) return state
  const isValidPlace = place >= 0 && place < state.board.length
  const isAlreadyPlaced = state.board[place] !== undefined
  if (!isValidPlace || isAlreadyPlaced) return state

  const board = [...state.board] as BoardState
  board[place] = state.currentTurn

  return {
    winner: detectWinner(board),
    board,
    currentTurn: state.currentTurn === 'p1' ? 'p2' : 'p1'
  }
}
