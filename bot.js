const Discord = require('discord.js');
const client = new Discord.Client();
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
if(command === 'ping') {
  message.channel.send('Pong!');
} else 
if (command === 'blah') {
  message.channel.send('Meh.');
}
    
});

client.login(process.env.BOT_TOKEN);
