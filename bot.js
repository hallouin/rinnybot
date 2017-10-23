const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === (config.prefix + 'ping')) {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong desu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});

client.on('message', message => {
    if (message.content === (config.prefix + 'commands')) {
    message.channel.sendMessage('Come back later!!');
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

client.login(process.env.BOT_TOKEN);
