const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const yt = require('ytdl-core');

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if (message.content === (config.prefix + 'ping')) {
    message.channel.sendMessage("Pong desu! " + `\`${Date.now() - message.createdTimestamp}\`` + "ms");
  }
});

client.on('message', message => {
    if (message.content === (config.prefix + 'commands')) {
const embed = {
  "title": "`r!ping`",
  "description": "Responds with `Pong desu!` Will include numerical value for ping (ms) soon.",
  "color": 9059670,
  "fields": [
    {
      "name": "`r!commands` , `r!command` , `r!help`",
      "value": "Displays a list of commands available for use with Rinnybot."
    },
       {
      "name": "`r!yes`",
      "value": "(ﾟｰﾟ)(｡_｡)"
    },
      {
      "name": "`r!no`",
      "value": "(･_･ 三 ･_･) "
    },
    {
      "name": "`r!nope`",
      "value": "=͟͟͞͞(　 ω )=͟͟͞͞　³ ³"
    },
    {
      "name": "`r!teehee`",
      "value": "(ﾉ≧ڡ≦)"
    },
    {
      "name": "`r!gimme`",
      "value": "(੭ु´･ω･`)੭ु⁾⁾"
    },
    {
      "name": "`r!hug` or `r!hug @user`",
      "value": "꒰๑*´ᗜ`*꒱*›◡‹꒱꒱"
    }
  ]

};
    message.delete(100)
    message.author.sendMessage("Here are my list of commands!", { embed }); 
} 
});

client.on('message', message => {
    if (message.content === (config.prefix + 'command')) {
const embed = {
  "title": "`r!ping`",
  "description": "Responds with `Pong desu!` Will include numerical value for ping (ms) soon.",
  "color": 9059670,
  "fields": [
    {
      "name": "`r!commands` , `r!command` , `r!help`",
      "value": "Displays a list of commands available for use with Rinnybot."
    },
       {
      "name": "`r!yes`",
      "value": "(ﾟｰﾟ)(｡_｡)"
    },
      {
      "name": "`r!no`",
      "value": "(･_･ 三 ･_･) "
    },
    {
      "name": "`r!nope`",
      "value": "=͟͟͞͞(　 ω )=͟͟͞͞　³ ³"
    },
    {
      "name": "`r!teehee`",
      "value": "(ﾉ≧ڡ≦)"
    },
    {
      "name": "`r!gimme`",
      "value": "(੭ु´･ω･`)੭ु⁾⁾"
    },
    {
      "name": "`r!hug` or `r!hug @user`",
      "value": "꒰๑*´ᗜ`*꒱*›◡‹꒱꒱"
    }
  ]

};
    message.delete(100)
    message.author.sendMessage("Here are my list of commands!", { embed }); 
} 
});

client.on('message', message => {
    if (message.content === (config.prefix + 'help')) {
    const embed = {
  "title": "`r!ping`",
  "description": "Responds with `Pong desu!` Will include numerical value for ping (ms) soon.",
  "color": 9059670,
  "fields": [
    {
      "name": "`r!commands` , `r!command` , `r!help`",
      "value": "Displays a list of commands available for use with Rinnybot."
    },
       {
      "name": "`r!yes`",
      "value": "(ﾟｰﾟ)(｡_｡)"
    },
      {
      "name": "`r!no`",
      "value": "(･_･ 三 ･_･) "
    },
    {
      "name": "`r!nope`",
      "value": "=͟͟͞͞(　 ω )=͟͟͞͞　³ ³"
    },
    {
      "name": "`r!teehee`",
      "value": "(ﾉ≧ڡ≦)"
    },
    {
      "name": "`r!gimme`",
      "value": "(੭ु´･ω･`)੭ु⁾⁾"
    },
    {
      "name": "`r!hug` or `r!hug @user`",
      "value": "꒰๑*´ᗜ`*꒱*›◡‹꒱꒱"
    }
  ]

};
    message.delete(100)
    message.author.sendMessage("Here are my list of commands!", { embed }); 
} 
});

client.on('message', message => {
    if (message.content === (config.prefix + 'yes')) {
   const embed = {
  "image": {
    "url": "http://25.media.tumblr.com/tumblr_mbqui4CyUm1riu78lo1_500.gif"
  }
};
message.channel.sendMessage("Yes!", { embed });
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'no')) {
   const embed = {
  "image": {
    "url": "http://media.giphy.com/media/VYwLv746owIkU/giphy.gif"
  }
};
message.channel.sendMessage("No!", { embed });
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'nope')) {
   const embed = {
  "image": {
    "url": "https://media.giphy.com/media/pXPBrb74aJhUQ/giphy.gif"
  }
};
message.channel.sendMessage("NOPE NOPE NOPE", { embed });
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'teehee')) {
   const embed = {
  "image": {
    "url": "http://pa1.narvii.com/5591/2efc311fd908344b01ed7a3723d8f066bb267246_hq.gif"
  }
};
message.channel.sendMessage("TEEHEE (ﾉ≧ڡ≦)", { embed });
}
    
});

client.on('message', message => {
    if (message.content === (config.prefix + 'gimme')) {
   const embed = {
  "image": {
    "url": "http://data.whicdn.com/images/82274594/original.gif"
  }
};
message.channel.sendMessage({ embed });
}
    
});

client.on('message', message => {
    
if (message.content.startsWith(config.prefix + 'hug')) {

const rng = Math.floor(Math.random()*6)+1;
const imageArray = ["http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-1.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-16.gif", "https://m.popkey.co/fca5d5/bXDgV.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-19.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-12.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460988091-6e86cd666a30fcc1128c585c82a20cdd.gif"];
const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage("You got a hug from " + message.author.username + "!", { embed });
}
});

client.on('message', message => {
    if (message.author.bot) return;
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico", "ecchi", 'chinchin', 'chinpo', 'panties', 'pantyshot', 'lewd', 'Hentai', 'HENTAI', 'Ochinchin', 'OCHINCHIN', 'Oppai', 'OPPAI', 'Boku no Pico', 'BOKU NO PICO', 'Boku no pico', 'Ecchi', 'ECCHI', 'panty shot', 'PANTIES', 'PANTY SHOT', 'LEWD', 'LOOD', 'Lewd', 'Lood'];
if( swearWords.some(word => message.content.includes(word)) ) {
    const rng = Math.floor(Math.random()*6)+1;
    const imageArray = ["https://i.imgur.com/qknrvCO.gif", "http://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-8-1.gif", "https://media.giphy.com/media/xnmArcgSzKbo4/giphy.gif", "http://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-6-1.gif", "https://i.imgur.com/SaGnoAr.gif", "http://i0.kym-cdn.com/photos/images/original/000/746/820/fed.gif"];
const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage("Lewd desu!", { embed });
}
});

client.on('message', message => {
const swearWords = ["i love rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["I love rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["i love Rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["I love Rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["I LOVE RINNYBOT"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["I LOVE YOU RINNYBOT"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

client.on('message', message => {
const swearWords = ["i love you rinnybot"];
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
