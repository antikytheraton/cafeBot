'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAEiGPuQ5ywBAOreuUlrZBEArtaQu4rsdtfZCKTmXu87DhDH6ksoh7xlKJ7YuXuJ9fpD6Nb0c9ccAZCCKqdobRTQOUAopILiW3yho2B6ZAirBGDpnvJKofGw01owSy5sSx9i17SZCPOhB0raEqOxQor8W95kQmVTaBQQ2ijxPtJQ2DAymBEzo',
  verifyToken: 'un cafe papu',
  appSecret: '14080078491f6e5e5feb0429ced912e8'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();