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
    if (message.content === (config.prefix + 'yes')) {
   const embed = {
  "image": {
    "url": "http://25.media.tumblr.com/tumblr_mbqui4CyUm1riu78lo1_500.gif"
  }
};
message.channel.sendMessage("Yes!", { embed });;
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'no')) {
   const embed = {
  "image": {
    "url": "http://media.giphy.com/media/VYwLv746owIkU/giphy.gif"
  }
};
message.channel.sendMessage("No!", { embed });;
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'nope')) {
   const embed = {
  "image": {
    "url": "https://media.giphy.com/media/pXPBrb74aJhUQ/giphy.gif"
  }
};
message.channel.sendMessage("NOPE NOPE NOPE", { embed });;
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'teehee')) {
   const embed = {
  "image": {
    "url": "http://pa1.narvii.com/5591/2efc311fd908344b01ed7a3723d8f066bb267246_hq.gif"
  }
};
message.channel.sendMessage("TEEHEE (ﾉ≧ڡ≦)", { embed });;
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'gimme')) {
   const embed = {
  "image": {
    "url": "http://cloud-3.steamusercontent.com/ugc/387667044028600527/E7AF53FA26A3F8C1749555A80FFA0706F73A4651/"
  }
};
message.channel.sendMessage({ embed });;
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'hug')) {
   const embed1 = {
  "image": {
    "url": "https://media.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif"
  }
};
           const embed2 = {
  "image": {
    "url": "https://media.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif"
  }
};
           const embed3 = {
  "image": {
    "url": "https://78.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_500.gif"
  }
};
           const embed4 = {
  "image": {
    "url": "http://i.imgur.com/p7beIyD.gif"
  }
};
           const embed5 = {
  "image": {
    "url": "https://i.pinimg.com/originals/bf/b5/be/bfb5bed89f8c09bf53eab687eb3f9404.gif"
  }};
        
if (rng === 1) {message.channel.sendMessage({ embed1 });
} else 
    if (rng === 2) {message.channel.sendMessage({ embed2 });
} else 
    if (rng === 3) {message.channel.sendMessage({ embed3 });
} else 
    if (rng === 4) {message.channel.sendMessage({ embed4 });
} else 
    if (rng === 5) {message.channel.sendMessage({ embed5 });
}
    
});

client.on('message', message => {
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico", "ecchi", 'chinchin', 'chinpo', 'panties', 'pantyshot', 'lewd'];
if( swearWords.some(word => message.content.includes(word)) ) {
  const embed = {
  "image": {
    "url": "https://i.imgur.com/XoYgHyi.jpg"
  }
};
message.channel.sendMessage("Lewd desu!", { embed });;
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
if( lenny.some(word => message.content === (word)) ) {
  message.delete(100);
  message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
}
    
});

client.login(process.env.BOT_TOKEN);
