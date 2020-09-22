const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

// IO = esta es la comunicacion con el backend
//configuraciion de sockets par usarlo en un archivo externo
module.exports.io = socketIO(server);
require('./sockets/socket');

//* Procesos del lado del servidor
// cuando se inicia la app, o cuando se cierra un tabss

server.listen(port, (err) => {
	if (err) throw new Error(err);

	console.log(`Servidor corriendo en puerto ${port}`);
});
