import dotenv from 'dotenv';
import express from 'express';
import * as http from 'http';
import { Server, Socket } from 'socket.io';
import { createPlayer, updatePlayer } from './config/player';
import { Player } from './entities/player';
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from './entities/socketio';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
let players: Array<Player> = [];

app.use(express.static('../public'));

io.on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
	console.log(`${socket.id} now is connected`);
	const data = {
		id: socket.id,
		nickname: socket.id
	};

	const newPlayer = createPlayer(data);
	players.push(newPlayer);

	io.emit('connectPlayer', players);

	socket.on('movement', (movement) => {
		players = updatePlayer(players, socket.id, movement);
		io.emit('playerMovement', players);
	});

	socket.on('disconnect', () => {
		console.log(`${socket.id} now is disconnected`);
		players = players.filter((p) => p.id !== socket.id);
		io.emit('connectPlayer', players);
	});
});

server.listen(port, () => console.log(`App running on port  ${port}!`));