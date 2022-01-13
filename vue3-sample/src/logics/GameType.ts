/** プレーヤー */
export type Player = 'p1' | 'p2'
/** セルの状態：まだ石が置かれていない場合undefined */
export type StoneState = Player | undefined
/** 盤面の全セルの状態 */
export type BoardState = [
  StoneState,
  StoneState,
  StoneState,
  StoneState,
  StoneState,
  StoneState,
  StoneState,
  StoneState,
  StoneState
]
/** ゲーム状態 */
export type GameState = {
  /** 現在の盤面 */
  board: Readonly<BoardState>
  /** このゲームの勝者。未定の場合undefined */
  winner: Player | undefined
  /** 現在のターン */
  currentTurn: Player
}
