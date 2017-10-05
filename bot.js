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

bot.on("ready", () => {
  console.log("tt");
  bot.user.setGame('With Oliver');

});



bot.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = bot.channels.find('name', 'chat');
  let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'chat'**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

});


client.login(process.env.BOT_TOKEN);
