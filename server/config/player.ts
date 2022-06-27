import { Player, Position } from '../entities/player';
import { SocketData } from '../entities/socketio';

function generatePosition(min: number, max: number): Position {
	const x = Math.floor(Math.random() * (max - min + 1)) + min;
	const y = Math.floor(Math.random() * (max - min + 1)) + min;

	return { x, y };
}

function generateColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

export function createPlayer(data: SocketData): Player {
	const randPosition = generatePosition(0, 9);
	const playerColor = generateColor();
	console.log(randPosition);

	const player: Player = {
		id: data.id,
		position: {
			y: randPosition.y,
			x: randPosition.x
		},
		size: 1,
		color: playerColor
	};

	console.log(player);

	return player;
}

export const updatePlayer = (players: Player[], id: string, movement: { x: number, y: number }) => {
	players.forEach((p) => {
		if (p.id === id) {
			const nextXPosition = p.position.x + movement.x;
			const nextYPosition = p.position.y + movement.y;
			const maxPosition = 10;

			if (movement.x && nextXPosition >= 0 && nextXPosition < maxPosition) {
				p.position.x += movement.x;
			}

			if (movement.y && nextYPosition >= 0 && nextYPosition < maxPosition) {
				p.position.y += movement.y;
			}

			return;
		}
	});

	return players;
};