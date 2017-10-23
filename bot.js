const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === 'r!ping') {
    message.channel.sendMessage('Pong desu!');
  }
});

client.on('message', message => {
    if (message.content === 'r!commands') {
    message.channel.sendMessage('Come back later!');
  } 
    
});

client.login(config.token);
