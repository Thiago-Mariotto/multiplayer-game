
export interface ServerToClientEvents {
  connectPlayer: (player: any) => any;
  playerMovement: (players: any) => any;
}

export interface ClientToServerEvents {
  connectPlayer: (data: any) => any;
  movement: (movement: any) => void;
  playerMovement: (players: any) => void;
}

export interface InterServerEvents {
  playerMovement: (players: any) => void;
}

export interface SocketData {
  id: string;
  nickname: string;
}