const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    
    if(command === 'ping') {
    message.channel.send('Pong desu!');
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'r!commands') {
    message.channel.sendMessage('Come back later!');
  } 
    
});

client.login(process.env.BOT_TOKEN);
