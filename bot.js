
const Discord = require("discord.js");
const client = new Discord.Client();



client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`اوز عمك يا  تيربو يا ابن القحبه ذي بداية الحرب ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.login(process.env.BOT_TOKEN);
