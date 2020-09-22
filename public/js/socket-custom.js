// vinculado al front
let socket = io();

//escuchar sucesos
socket.on('connect', function () {
	console.log('conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('Connection Server Lost');
});

//escucha mensajes
socket.on('enviarMensaje', function (data) {
	console.log(`${data.usuario} dice: ${data.mensaje}`);
});

// enviar informacion
// socket.emit(
// 	'enviarMensaje',
// 	{
// 		usuario: 'Juan',
// 		mensaje: ' Hola Mundo',
// 	},
// 	function (resp) {
// 		console.log('server: ', resp);
// 	}
// );
