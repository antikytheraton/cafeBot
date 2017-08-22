'use strict';
const BootBot = require('bootbot');
const request = require('request');

const bot = new BootBot({
  accessToken: 'EAAEiGPuQ5ywBAOB1ym3kCkvCgbT7B5W9UqBaHLl3iRkw7RkfVgZAIKSLXAvfSZCV2WLYxdRhvGt3ZAcgncDfT8jrtSc6kNL3TZCUR3gOal7T0E79VWtEd68S0fl1FzMfPlPzlL5SeBcm55VECEhwFCXqNeK3doMvNH6fzlTRJXbWlNbUaOZAX',
  verifyToken: 'un cafe papu',
  appSecret: '14080078491f6e5e5feb0429ced912e8'
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
		request.post('http://192.168.43.203/makeCoffe');
		chat.say('Que tal? :D', { typing: true });
		console.log("Preparando tu cafe");
	});
});

bot.hear([/(turn )?((encender|enciende)|on)( the| el)?( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Encendiendo LED').then(() => {
		request.post('http://192.168.43.203/ledON');
		chat.say('lol', { typing: true });
	});
});

bot.hear([/(turn )?(apaga(r)?|off)( the| el)?( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Apagando LED').then(() => {
		request.post('http://192.168.43.203/ledOFF');
		chat.say(':(', { typing: true });
	});
});

bot.hear(['blink', 'parpadear', /blink( led)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Blinking LED').then(() => {
		request.post('http://192.168.43.203/blink');
		chat.say(':O', { typing: true });
	});
});

bot.start();