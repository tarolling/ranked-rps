const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Pool } = require('pg');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'rps_game',
    password: 'your_password',
    port: 5432,
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('play', async (move) => {
        // Handle game logic here
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));