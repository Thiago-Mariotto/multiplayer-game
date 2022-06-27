
export type ServerToClientEvents = {
  connectPlayer: (player: any) => any;
  playerMovement: (players: any) => any;
}

export type ClientToServerEvents = {
  connectPlayer: (data: any) => any;
  movement: (movement: any) => void;
  playerMovement: (players: any) => void;
}

export type InterServerEvents = {
  playerMovement: (players: any) => void;
}

export type SocketData = {
  id: string;
  nickname: string;
}