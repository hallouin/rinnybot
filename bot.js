const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    
if(command === 'ping') {
  message.channel.sendMessage('Pong!');
} else 
if (command === 'blah') {
  message.channel.sendMessage('Meh.');
}
    
});

client.login(process.env.BOT_TOKEN);
