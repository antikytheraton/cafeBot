'use strict';
const BootBot = require('bootbot');
const request = require('request');

const bot = new BootBot({
  accessToken: 'ACCESS_TOKEN',
  verifyToken: 'VERIFY_TOKEN',
  appSecret: 'APP_SECRET'
});

bot.hear([/(hola|holi|hello|hi)( bot| chatbot| amigo| papu)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hola, soy coffeBot').then(() => {
		chat.say('Que opinas de un cafe?', { typing: true });
	});
});

bot.hear([/(quiero|prepara(me)?|make( me)?)?( un| a)?(caf[ée]|coffe)( papu| amigo)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Preparando...').then(() => {
		request.post('http://172.20.10.2/makeCoffe');
		chat.say('Que tal? :D', { typing: true });
		console.log("Preparando tu cafe");
	});
});

bot.hear([/(turn )?((encender|enciende)|on)( the| el)?( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Encendiendo LED').then(() => {
		request.post('http://172.20.10.2/ledON');
		chat.say('lol', { typing: true });
	});
});

bot.hear([/(turn )?(apaga(r)?|off)( the| el)?( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Apagando LED').then(() => {
		request.post('http://172.20.10.2/ledOFF');
		chat.say(':(', { typing: true });
	});
});

bot.hear(['blink', 'parpadear', /blink( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Blinking LED').then(() => {
		request.post('http://172.20.10.2/blink');
		chat.say(':O', { typing: true });
	});
});

bot.start();