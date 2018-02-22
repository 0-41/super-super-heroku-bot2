const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === '.spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 5000; x++) {
        message.channel.send(`Spam By 5bz ${x}`)
          .then(m => {
            count++;
            console.log('reached', count, ecount);
          })
          .catch(m => {
            console.error(m);
            ecount++;
            console.log('reached', count, ecount);
          });
      }
});

client.login(process.env.BOT_TOKEN);
