
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

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         اسم سيرفر OGS (:

                                 [ https://discord.gg/NaSCNd ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         OGS server (:

                                 [ https://discord.gg/NaSCNd ] **`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
