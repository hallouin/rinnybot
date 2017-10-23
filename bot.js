const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === 'r!ping') {
    	message.channel.sendMessage('pong desu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms');
  	}
    
});
    
client.on('message', message => {
    if (message.content === 'r!commands') {
const m = await message.channel.send("Ping?");
    m.edit(`Pong desu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
    
});

client.login(process.env.BOT_TOKEN);
