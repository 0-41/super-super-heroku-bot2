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
isloom.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
 member.send(message.content.substr(3));
});
if (message.content.split(' ')[0] == '-broadcast')
message.guild.members.forEach( member => {
member.send(message.content.substr(10));
});
});




client.login(process.env.BOT_TOKEN);
