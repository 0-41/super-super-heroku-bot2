const Discord = require("discord.js");
const x5bz = new Discord.Client();
console.log('mariam ra7t tmot al nas');
x5bz.on('ready', () => {
  console.log(`Logged in as ${x5bz.user.tag} !`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/q7X8hCD ***'
]
 x5bz.on('message', message => {
 if (message.content.startsWith('.مريم')) {

 
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("👧")
  }
});
var prefix="!";
let fetchMember = (guild, userResolvable, callback) => {
    if (typeof callback !== 'function') {
        return;
    }

    guild.fetchMember(userResolvable)
        .then((response) => callback(response));
};

let processRequest = (msg, hex) => {
    let guild = msg.guild;
    let author = msg.author;

    fetchMember(guild, author, (response) => {
        createGuildRole(response, hex, msg)
    });
};

let createGuildRole = (guildMember, hex, msg) => {
    let guild = guildMember.guild;
    let newRole = {
        name: `color-${guildMember.user.username}`,
        color: hex
    };
    let existingRole = null;

    existingRole = guild.roles.find('name', newRole.name);

    if (existingRole) {
        existingRole.edit(newRole)
            .then((roleData) => {
                msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`);
                assignGuildMemberRole(guildMember, existingRole, msg);
            });
    } else {
        guild.createRole(newRole)
            .then((role) => {
                msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`);
                assignGuildMemberRole(guildMember, role, msg);
            });
    }
};

let assignGuildMemberRole = (guildMember, role, msg) => {
    guildMember.addRole(role)
        .then((member) => {
            let savedRole = member.roles.find('name', role.name);
            setRolePosition(guildMember, savedRole, msg);
        });
};

let setRolePosition = (guildMember, role, msg) => {
    let guild = guildMember.guild;
    let highestPriorityPosition = guildMember.guild.roles.size - 2;

    role.setPosition(highestPriorityPosition)
        .then((role) => {
            console.log('Successfully moved position.');
            msg.channel.sendMessage(`**ثم تغير اللون بنجاح**`)
        })
        .catch((err) => {
            console.log('Failed to move position');
            console.error(err);
        });
};

// By:PLAQUE
x5bz.on("message", (messageObject) => {
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
const Discord = require("discord.js");
const x5bz = new Discord.Client();

x5bz.on("ready", () => {
  console.log("tt");
  bot.user.setGame('With Oliver');

});



x5bz.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = x5bz.channels.find('name', 'chat');
  let muteRole = x5bz.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'chat'**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(x5bz.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      x5bz.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      x5bz.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

});
x5bz.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`Welcome To 5bz Support!`,'.color number','Owner: @iiPixelSA ??| 5bz#0003','PRIVATE BOT!','https://discord.gg/q7X8hCD'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        x5bz.user.setGame(setGame[i],`http://www.twitch.tv/v5bz`);
    }, ms);

});
var x1 = ".color 1"
var x2 = ".color 2"
var x3 = ".color 3"
var x4 = ".color 4"
var x5 = ".color 5"
var x6 = ".color 6"
var x7 = ".color 7"
var x8 = ".color 8"
var x9 = ".color 9"
var x10 = ".color 10"
x5bz.on('message', message => {
	if (message.content === x1) {
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x2) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x3) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x4) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x5) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x6) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x7) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x8) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x9) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === x10) {
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.author.avatarURL)
	.setFooter('Nice Color!', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.addField('Requested by:', "<@" + message.author.id + ">")
  .setDescription(`تم تغيير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	message.react("??")
	}
if (message.content === ".colors") {
	const embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setFooter('5bz | Color', 'http://www.freeiconspng.com/uploads/color-icon-png-13.png')
	.setDescription(`Type: .color number`)
	.setImage('https://cdn.discordapp.com/attachments/336524558884536322/346371813720457216/colors.png')
	message.channel.sendEmbed(embed);
	message.react("??")
	}
});
x5bz.login(process.env.BOT_TOKEN);
