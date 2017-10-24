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
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico", "ecchi", 'chinchin', 'chinpo', 'panties', 'pantyshot', 'lewd', 'HENTAI,' 'OCHINCHIN', 'OPPAI', 'BOKU NO PICO', 'ECCHI', 'CHINCHIN', 'CHINPO', 'PANTIES', 'panty shot', 'Hentai', 'Ochinchin', 'Oppai', 'Boku no Pico', 'Boku no pico', 'Ecchi', 'Chinchi', 'Chinpo', 'Panties', 'Panty shot', 'LEWD', 'Lewd', 'lood'];

if (message.author.bot) return;
    
if( swearWords.some(word => message.content.includes(word)) ) {
  const lewd1 = {
  "embed": {
    "url": "https://i.imgur.com/XoYgHyi.jpg"
  }
};
message.channel.sendMessage("Lewd desu!", { embed });;
}
    
});

client.on('message', message => {
const swearWords = ["i love rinnybot", 'I love Rinnybot', 'I love rinnybot', 'I LOVE RINNYBOT'];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const lenny = ["r!lenny"];
if( lenny.some(word => message.content === (word)) ) {
  message.delete(100);
  message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
}
    
});

client.login(process.env.BOT_TOKEN);
