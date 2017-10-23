const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === (config.prefix + 'ping')) {
    message.channel.sendMessage('Pong desu!');
  }
});

client.on('message', message => {
    if (message.content === (config.prefix + 'commands')) {
    message.channel.sendMessage('Come back later!!');
  } 
    
});

client.on('message', message => {
const swearWords = ["hentai", "ochinchin", "oppai"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Lewd desu!");
  // Or just do message.delete();
    
}
    
});
client.login(process.env.BOT_TOKEN);
