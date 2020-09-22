const { io } = require('../server');

io.on('connection', (client) => {
	console.log('usuario conectado');

	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: 'Bienvenido a esta APP',
	});

	client.on('disconnect', () => {
		console.log('usuario desconectado');
	});

	//Escuchar al cliente
	client.on('enviarMensaje', (data, callback) => {
		console.log(data);

		client.broadcast.emit('enviarMensaje', {
			usuario: data.usuario,
			mensaje: data.mensaje,
		});

		// if (message.usuario) {
		// 	callback({
		// 		resp: 'todo bien',
		// 	});
		// } else {
		// 	callback({
		// 		resp: 'todo mal',
		// 	});
		// }
	});
});
