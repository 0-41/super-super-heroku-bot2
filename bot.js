const Discord = require('discord.js');
const client = new Discord.Client();

  client.on('message', message => {
    if (message.content.startsWith("avatar")) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${message.mentions.users.first().avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



  


client.login(process.env.BOT_TOKEN);
