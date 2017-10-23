const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong desu!');
  	}
    
});
    
client.on('message', message => {
    if (message.content === 'commands') {
    	message.sendMessage('Come back later!');
  	}
    
});

client.login(process.env.BOT_TOKEN);
