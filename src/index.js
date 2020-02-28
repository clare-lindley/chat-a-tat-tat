import express from "express";
import {createServer} from "http";
const app = express();
const http = createServer(app);

// This is a route handler for the root URL '/'
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

// async
http.listen(3000, () => console.log('listening on *:3000'));

// sync
let helloWorld = 'Hello world';
const helloFunction = () => console.log(`${helloWorld} removed`);
helloFunction();