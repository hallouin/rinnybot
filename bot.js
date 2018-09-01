const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const yt = require('ytdl-core');

client.on('ready', () => {
    console.log('Rinnybot is here!');
});

client.on('message', message => {
    if(message.content.indexOf(config.prefix) !== 0) return;
    
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
    if(command === "rinnybotpleasesay") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
});

client.on('message', message => {
    if (message.content === (config.prefix + 'ping')) {
    message.channel.sendMessage("Pong desu! " + `\`${Date.now() - message.createdTimestamp}\`` + "ms");
  }
});

client.on('message', message => {
        if (message.author.bot) return;
    if( message.content.startsWith(config.prefix + 'tank' )) {
    
    let msg = message.content;
    let argString = msg.substr( msg.indexOf(' ') + 1 );
    let response = argString.split(' ');
    const rng = Math.floor(Math.random()*response.length)+1;
    const tank = response

    message.channel.sendMessage("I'm feeling like " + { tank[rng] } + "is up for the challenge!");
  }
});

client.on('message', message => {
        if (message.author.bot) return;
    if( message.content.startsWith(config.prefix + 'support' )) {
    
    let msg = message.content;
    let argString = msg.substr( msg.indexOf(' ') + 1 );
    let response = argString.split(' ');
    const rng = Math.floor(Math.random()*response.length)+1;
    const tank = response

    message.channel.sendMessage("I need healing, " + { tank[rng] } + "!");
  }
});

client.on('message', message => {
        if (message.author.bot) return;
    if( message.content.startsWith(config.prefix + 'dps' )) {
    
    let msg = message.content;
    let argString = msg.substr( msg.indexOf(' ') + 1 );
    let response = argString.split(' ');
    const rng = Math.floor(Math.random()*response.length)+1;
    const tank = response

    message.channel.sendMessage("Quick, " + { tank[rng] } + "! Get on the damn point!");
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
    if (message.content === (config.prefix + 'yookey') || message.content == (config.prefix + 'dudele') || message.content === ('Rinny what is a dudele') || message.content == ('Rinny what did yookey say')) {
message.channel.sendMessage("i dudeled my dude today but my brother dudeled on my dude and ruined the dudele of my dude im so same my dudel is messed up now but my other dude dudeled something for my dude i was dudeling so my dude is happy now, my other dude also dudeled me dudeling my dude so im good. i still miss my dudele but at least me and my dude and my other dude is happy from the dudeles my other dude dudeled. but yuki is going to dudele all of my dudes death so im sad again. im going to dudele all my dudes except for my waif dude yuki so i can make my dudes happy. i hope my brother doesnt dudele on my dudeles again, that would make my dudes and i so sad");
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
    const user = message.mentions.members.first();
const imageArray = ["http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-1.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-16.gif", "https://m.popkey.co/fca5d5/bXDgV.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-19.gif", "http://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-12.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460988091-6e86cd666a30fcc1128c585c82a20cdd.gif"];
const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage(user + ", you got a hug from " + message.author.username + "!", { embed });
}
});

client.on('message', message => {
    
if (message.content.startsWith(config.prefix + 'pat')) {

const rng = Math.floor(Math.random()*6)+1;
    const user = message.mentions.members.first();
const imageArray = ["http://cdn-ak.f.st-hatena.com/images/fotolife/p/pema/20121222/20121222134229.gif", "http://i.imgur.com/eOJlnwP.gif", "https://media.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif", "https://media.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif", "http://data.whicdn.com/images/88714749/original.gif", "https://pa1.narvii.com/6390/a7cdeac333cc02e456f8851cb3ea70dc6306cc1f_hq.gif"];
const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage(user + ", you were patted by " + message.author.username + "!", { embed });
}
});

client.on('message', message => {
if (message.content.startsWith(config.prefix + 'poke')) {

const rng = Math.floor(Math.random()*6)+1;
    const user = message.mentions.members.first();
const imageArray = ["https://k39.kn3.net/taringa/5/6/3/9/8/8/9/kukury/EF2.gif", "https://i.pinimg.com/originals/bf/55/12/bf55122ccfae1e283ceafea81657aa43.gif", "http://gifimage.net/wp-content/uploads/2017/08/poke-gif-16.gif", "https://i.pinimg.com/originals/ec/d5/db/ecd5db48f5bdfb9b67f86f2094554839.gif", "https://33.media.tumblr.com/66980aebf476906cdeaef32948ead3b5/tumblr_mibugnXqaz1rx1dfqo1_500.gif"];
const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage(user + ", you were poked by " + message.author.username + "!", { embed });
}
});

client.on('message', message => {
    if (message.author.bot) return;
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico", "ecchi", 'chinchin', 'chinpo', 'panties', 'pantyshot', 'lewd', 'Hentai', 'HENTAI', 'Ochinchin', 'OCHINCHIN', 'Oppai', 'OPPAI', 'Boku no Pico', 'BOKU NO PICO', 'Boku no pico', 'Ecchi', 'ECCHI', 'panty shot', 'PANTIES', 'PANTY SHOT', 'LEWD', 'LOOD', 'Lewd', 'Lood'];
if( swearWords.some(word => message.content.includes(word)) ) {
    const rng = Math.floor(Math.random()*6)+1;
    const imageArray = ["https://anime4fun299.files.wordpress.com/2014/12/trinity-seven-episode-9-1.gif", "http://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-8-1.gif", "http://i0.kym-cdn.com/photos/images/original/000/994/901/67a.gif", "http://gifimage.net/wp-content/uploads/2017/08/lewd-anime-gif-6-1.gif", "https://i.imgur.com/SaGnoAr.gif", "http://i0.kym-cdn.com/photos/images/original/000/746/820/fed.gif"];
    const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

message.channel.sendMessage("Lewd desu!", { embed });
}
});

client.on('message', message => {
        if (message.author.bot) return;
const swearWords = ["i love rinnybot", "I love rinnybot", "I love rinny bot", "i love rinny bot", "I love Rinnybot", "i love Rinnybot", "I LOVE RINNYBOT", "i love you rinnybot", "I LOVE YOU RINNYBOT", "we love you rinnybot", "we love rinnybot", "I love @Rinnybot", "i love @Rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
   const rng = Math.floor(Math.random()*6)+1;
   const imageArray = ["http://i.imgur.com/8UNPSqN.gif", "https://i.pinimg.com/originals/60/bd/28/60bd28e041d83ed07ac88e00d30843d5.gif", "https://i.pinimg.com/originals/0b/a4/d9/0ba4d92a005c69ef3bd6254c423ef4a5.gif", "https://i.pinimg.com/originals/01/e2/ea/01e2eabe71ba07db14a50878bc7ac20d.gif", "http://data.whicdn.com/images/225809250/original.gif"];
    const embed = {
  "image": {
    "url": (imageArray[rng])
}
};

    message.reply("I love you too! ♡ (⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", { embed });
}
    
});

client.on('message', message => {
    if (message.author.bot) return;
if( message.content.startsWith(config.prefix + '8ball' )) {
    const rng = Math.floor(Math.random()*12)+1;
    const response = ["Surely it is so!", "Yep!", "For sure!", "I'm not so sure...", "Probably not.", "Nope, definitely not.", "I'm sure of it!", "Perhaps if you tell me you love Rinnybot, then yes!", "I can't really tell right now.", "No no no nope", "Of course!", "I think it's better not to say..."];

message.channel.sendMessage(response[rng]);

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
