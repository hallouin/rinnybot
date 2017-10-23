const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === 'r!ping') {
const m = await message.channel.sendMessage("Ping?");
    m.edit(`Pong desu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});

client.on('message', message => {
    if (message.content === 'r!commands') {
    message.channel.sendMessage('Come back later!');
  } 
    
});

client.login(process.env.BOT_TOKEN);
