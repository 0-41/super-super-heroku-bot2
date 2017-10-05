const Discord = require('discord.js');
const client = new Discord.Client();

   client.on('message', message => {
     if (message.content === "-help") {
message.author.send(".Best Commands" + `  **
 ".General Commands"
🔧               -ping | سرعة الأتصال
🔧               -id | معلومــات عــن حســابــك
🔧               -say | يكرر الكلام الذي تقولة
🔧               -avatar | صورتك في الدسكورد
🔧               -embed | يكرر الكلام بطريقة أخرى 
".Server Commands" 
🔧               -server | معلومات عن السيرفر
🔧               -clear | حذف الرسائل 
)
".Bot Commands", 
🔧               -bot | عدد السيرفرات التي تستخدم البوت
".support"
© Made By :RoyalDev ™.
**`);
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
    if (message.content.startsWith("ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You Dont Have **BAN_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        guildMember.ban(7).then((member) => {
            message.channel.send(member.displayName + " Banned From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant ban this member`);
        });
    }
});



  


client.login(process.env.BOT_TOKEN);
