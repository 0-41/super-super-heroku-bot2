const Discord = require('discord.js');
const x5bz = new Discord.Client();

x5bz.on('message', function(message) {
    if(message.content.startsWith(='support')) {
        let guild = message.mentions.members.first();
                          let ZmA = new x5bz.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: تم إضافة رتبة الدعم الفني لك__**')
        message.member.addRole(message.guild.roles.find('name', 'Support'));
                    message.channel.send({embed:ZmA});
    }
});
x5bz.login(process.env.BOT_TOKEN);
