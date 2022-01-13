import { Player } from './GameType'

export const playerName = (p: Player) => ({ p1: '◯', p2: '×' }[p])
