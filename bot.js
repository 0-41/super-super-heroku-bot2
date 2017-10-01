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
client.on('guildMemberAdd', member => {
let wlcm = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setDescription(`نورت السيرفر بوجودك  `)
.setThumbnail(member.user.avatarURL)
.setImage('صورة الترحيب')
.setColor('RANDOM')
client.channels.get('ايدي روم الترحيب').send(wlcm);
});

client.login(process.env.BOT_TOKEN);
