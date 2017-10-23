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

client.on("message", async message => {
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong desu! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

client.login(process.env.BOT_TOKEN);
