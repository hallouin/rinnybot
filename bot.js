const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYouTubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const config = require("./config.json");

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

bot.on('ready', () => {
    console.log('Rinnybot is here!');
});

bot.on('message', function (message) {
    const member = message.member;
    const msg = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(" ");

    var queue = [];
    var isPlaying = false;
    var dispatcher = null;
    var voiceChannel = null;
    var skipReq = 0;
    var skippers = [];

    if(msg.startsWith(prefix + 'play')){
        if(member.voiceChannel || bot.guilds.get('322517098846748673').voiceConnection != null) {
        if(queue.length > 0 || isPlaying){
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(videoInfo) {
                    if(err) throw new Error(err);
                    message.reply(' The song: **' + fetchVideoInfo.title + "** has been added to the queue list.");
                });
            });
        } else {
            isPlaying = true;
            getID(args, function(id){
                queue.push("placeholder");
                playMusic(id, message);
                    message.reply(' your song(s) has been added to the queue.');
            });
        }
        } else {
            message.reply('You must be in a voice channel!');
        }
        const msg = message.content.toLowerCase();
    } else if(msg.startsWith(prefix + 'skip')){
        if(skippers.indexOf(message.author.id) == -1){
            skippers.push(message.author.id);
            skipReq++;
            //if(skipReq >= Math.floor((voiceChannel.members.size - 1) / 2)) {
                skip_song(message);
                message.reply('You have skipped the current song.');
            //    message.reply(' your skip has been added.');
            //} else {
            //    message.reply(' your skip has been added. You need **' + Math.ceil((voiceChannel.members.size - 1) / 2) - skipReq + "** more skips.");
            //}
            //} else {
            //    message.reply(' you already voted to skip you cheeky bastard.')

        }

    }


});

var queue = [];function skip_song(message){
    dispatcher.end();
    if(queue.length > 1) {
        playMusic(queue[0], message);
    } else {
    skipReq = 0
    skippers = [];

    }

}

function playMusic(id, message){
    voiceChannel = message.member.voiceChannel;    voiceChannel.join().then(function (connection){
        stream = ytdl("https://www.youtube.com/watch?v=" + id, {
            filter: 'audioonly'

        });

        skipReq = 0;
        skippers= [];        dispatcher = connection.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            var queue = [];
            queue.shift();
            if(queue.length == 0) {
                queue = [];
                isPlaying = false;
            } else {
                playMusic(queue[0], message);

            }

        });

    });

}

function getID(str, cb) {
    if(isYoutube(str)){
        cb(getYouTubeID(str));
    } else {
        search_video(str, function(id) {
            cb(id);

        });

    }

}

function add_to_queue(strID) {
    if(isYoutube(strID)) {
        queue.push(getYouTubeID(strID));
    } else {
        queue.push(strID);

    }

}

function search_video(query, callback) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        callback(json.items[0].id.videoID);

    });

}

function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1;}

bot.on('message', message => {
    if (message.content === (config.prefix + 'ping')) {
    message.channel.sendMessage('Pong desu!');
  }
});

bot.on('message', message => {
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

bot.on('message', message => {
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

bot.on('message', message => {
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

bot.on('message', message => {
    if (message.content === (config.prefix + 'yes')) {
   const embed = {
  "image": {
    "url": "http://25.media.tumblr.com/tumblr_mbqui4CyUm1riu78lo1_500.gif"
  }
};
message.channel.sendMessage("Yes!", { embed });
}
    
});

bot.on('message', message => {
    if (message.content === (config.prefix + 'no')) {
   const embed = {
  "image": {
    "url": "http://media.giphy.com/media/VYwLv746owIkU/giphy.gif"
  }
};
message.channel.sendMessage("No!", { embed });
}
    
});

bot.on('message', message => {
    if (message.content === (config.prefix + 'nope')) {
   const embed = {
  "image": {
    "url": "https://media.giphy.com/media/pXPBrb74aJhUQ/giphy.gif"
  }
};
message.channel.sendMessage("NOPE NOPE NOPE", { embed });
}
    
});

bot.on('message', message => {
    if (message.content === (config.prefix + 'teehee')) {
   const embed = {
  "image": {
    "url": "http://pa1.narvii.com/5591/2efc311fd908344b01ed7a3723d8f066bb267246_hq.gif"
  }
};
message.channel.sendMessage("TEEHEE (ﾉ≧ڡ≦)", { embed });
}
    
});

bot.on('message', message => {
    if (message.content === (config.prefix + 'gimme')) {
   const embed = {
  "image": {
    "url": "http://data.whicdn.com/images/82274594/original.gif"
  }
};
message.channel.sendMessage({ embed });
}
    
});

bot.on('message', message => {
const swearWords = ["r!hug"];
if( swearWords.some(word => message.content.includes(word)) ) {
   const embed = {
  "image": {
    "url": "https://media.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif"
  }
};
message.channel.sendMessage({ embed });
}
    
});

bot.on('message', message => {
    if (message.author.bot) return;
const swearWords = ["hentai", "ochinchin", "oppai", "boku no pico", "ecchi", 'chinchin', 'chinpo', 'panties', 'pantyshot', 'lewd', 'Hentai', 'HENTAI', 'Ochinchin', 'OCHINCHIN', 'Oppai', 'OPPAI', 'Boku no Pico', 'BOKU NO PICO', 'Boku no pico', 'Ecchi', 'ECCHI', 'panty shot', 'PANTIES', 'PANTY SHOT', 'LEWD', 'LOOD', 'Lewd', 'Lood'];
if( swearWords.some(word => message.content.includes(word)) ) {
  const embed = {
  "image": {
    "url": "https://i.imgur.com/XoYgHyi.gif"
  }
};
message.channel.sendMessage("Lewd desu!", { embed });
}
    
});

bot.on('message', message => {
const swearWords = ["i love rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["I love rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["i love Rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["I love Rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["I LOVE RINNYBOT"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["I LOVE YOU RINNYBOT"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const swearWords = ["i love you rinnybot"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("I love you too! ♡");
}
    
});

bot.on('message', message => {
const lenny = ["r!lenny"];
if( lenny.some(word => message.content === (word)) ) {
  message.delete(100);
  message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
}
    
});

bot.login(process.env.BOT_TOKEN);
