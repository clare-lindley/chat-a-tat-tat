'use strict';

import express from 'express';
import {createServer} from 'http';
import io from 'socket.io';
const app = express();
const http = createServer(app);
const socket = io(http);

// This is a route handler for the root URL '/'
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

socket.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log(`message: ${msg}`);
    });

    socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(3000, () => console.log('listening on *:3000'));


let helloWorld = 'Hello world';
const helloFunction = () => console.log(`${helloWorld} removed`);
helloFunction();