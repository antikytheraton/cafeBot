'use strict';
const BootBot = require('bootbot');
const request = require('request');

const bot = new BootBot({
  accessToken: 'EAAEiGPuQ5ywBACFvHYBZAl0UaJFBy5CZAdvEMkCOiZBO6dzeBjLxIP7Xq8P8qvSUlF7RzkyCFnwiq7xyVZBkU5oTnfDhyClWjQetVRwySTNJLP6ZBcB9Mlbo09Hl82r7ZCLrGauXt04ZAoWVW6JNHQUe8FoZAzl64bB4NKfCQDv9csQI4yugra3t',
  verifyToken: 'un cafe papu',
  appSecret: '14080078491f6e5e5feb0429ced912e8'
});

// bot.on('message', (payload, chat) => {
//   const text = payload.message.text;
//   chat.say(`Echo: ${text}`);
// });

bot.hear(['hola', 'hello', 'hi', 'holi', /holi( bot)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hola, soy coffeBot').then(() => {
		chat.say('Que opinas de un cafe?', { typing: true });
	});
});

bot.hear(['on', 'encender', /encender( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Encendiendo LED').then(() => {
		chat.say('lol', { typing: true });
		request.post('http://192.168.0.147/ledON');
	});
});

bot.hear(['off', 'apagar', /apagar( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Apagando LED').then(() => {
		chat.say(':(', { typing: true });
		request.post('http://192.168.0.147/ledOFF');
	});
});

bot.hear(['blink', 'parpadear', /blink( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Blinking LED').then(() => {
		chat.say(':O', { typing: true });
		request.post('http://192.168.0.147/blink');
	});
});

bot.start();