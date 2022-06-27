export type Position = {
  x: number,
  y: number
}

export type Player = {
  id: string,
  nickname?: string,
  position: Position
  size: number,
  color: string
}

