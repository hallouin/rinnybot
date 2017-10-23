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
    message.channel.sendMessage('Under construction now (ᴗ˳ᴗ)｡｡｡zzz');
  } 
    
});

client.on('message', message => {
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Lewd desu!");
}
    
});

client.on('message', message => {
const swearWords = ["i love rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const lenny = ["r!lenny"];
if( lenny.some(word => message.content.includes(word)) ) {
  message.delete(1000);
  message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
}
    
});

client.on('message', message => {
   if (message.content.startsWith(config.prefix + "say")) {
      message.delete(1000); //Supposed to delete message
      message.channel.sendMessage(message.content.slice(5, message.content.length));
   }
});

client.login(process.env.BOT_TOKEN);
