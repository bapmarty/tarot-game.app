const express = require("express");
const http = require("http");
const port = process.env.API_PORT_INTERNAL || 3000;

// IMPORT API ROUTES
const index = require("./routes/index");

// Import listeners
const initListeners = require("./listeners");

// INIT SERVER AND EXPRESS APP
const app = express();
const server = http.createServer(app);

// CALL ROUTES
app.use(index);

// INIT socket.io
const io = require("socket.io")(server, {
	transports: ['websocket', 'polling', 'flashsocket']
});

initListeners(io);



server.listen(port, () => console.log(`Listening on port ${port}`));