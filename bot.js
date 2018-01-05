const Discord = require("discord.js");
const clinet = new Discord.Client();
console.log('mariam ra7t tmot al nas');
clinet.on('ready', () => {
  console.log(`Logged in as ${x5bz.user.tag} !`);
});


// By:PLAQUE
clinet.on("message", (messageObject) => {
    let message = messageObject.content.trim();
    let messageWords = message.split(' ');
    let hexCode = '';
    let hexRegex = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');
    let errorMessage = '**خطأ في تغير اللون يجب على اللون ان يكون** `.-color #FFFFFF`.';

    if (messageWords.length > 1 && messageWords[0] === prefix+'color') {
        hexCode = messageWords[1];

        if (hexRegex.test(hexCode)) {
            processRequest(messageObject, hexCode);
        } else {
            messageObject.channel.sendMessage(errorMessage);
        }
    }
});

   clinet.on('message', message => {
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
clinet.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(`© RoyalDev ™.`, 'https://cdn.discordapp.com/attachments/334701598196367370/335685097351151620/royalbot.png')

  message.channel.sendEmbed(embed);
    }
});
   var prefix = "-";
    clinet.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix  + 'say')) {
        message.delete()
            message.channel.sendMessage(args.join(' '));
    }
});
var prefix = "-";
clinet.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
    client.on('message', message => {
     if (message.content === "-id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
               .setFooter(`هنا اسم البوت حقك`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.login(process.env.BOT_TOKEN);
