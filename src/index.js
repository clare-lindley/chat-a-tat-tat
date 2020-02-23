import express from "express";
import {createServer} from "http";
const app = express();
const http = createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => console.log('listening on *:3000'));

let helloWorld = 'Hello world';

console.log(`${helloWorld} this is some ES6 JavaScript code`);