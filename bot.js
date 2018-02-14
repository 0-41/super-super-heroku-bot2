const Discord = require("discord.js");
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./credits.sqlite");
 
var x3 = "رتبة شرير"
client.on('message', message => {
if (message.content === x3) {
message.member.addRole(message.guild.roles.find("name", "►شہريہر◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});

var x4 = "رتبة شيطان"
client.on('message', message => {
if (message.content === x4) {
message.member.addRole(message.guild.roles.find("name", "►شہيہطہان◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x5 = "رتبة بطل خارق"
client.on('message', message => {
if (message.content === x5) {
message.member.addRole(message.guild.roles.find("name", "►بہطہل خہأرقہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x6 = "رتبة الساحر"
client.on('message', message => {
if (message.content === x6) {
message.member.addRole(message.guild.roles.find("name", "►سہأحہر◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x7 = "رتبة غول"
client.on('message', message => {
if (message.content === x7) {
message.member.addRole(message.guild.roles.find("name", "►غولہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x8 = "رتبة مصاصي الدماء"
client.on('message', message => {
if (message.content === x8) {
message.member.addRole(message.guild.roles.find("name", "►مـصآص ﮃمـآء◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x9 = "رتبة القرصان"
client.on('message', message => {
if (message.content === x9) {
message.member.addRole(message.guild.roles.find("name", "►قہرصہأنہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x10 = "رتبة هنتر صياد"
client.on('message', message => {
if (message.content === x10) {
message.member.addRole(message.guild.roles.find("name", "►هنتہر صيہاد◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x11 = "رتبة مستذئب"
client.on('message', message => {
if (message.content === x11) {
message.member.addRole(message.guild.roles.find("name", "►مہسہتہذئبہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x12 = "رتبة ساموراي"
client.on('message', message => {
if (message.content === x12) {
message.member.addRole(message.guild.roles.find("name", "►سہامورايہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x13 = "رتبة نينجا"
client.on('message', message => {
if (message.content === x13) {
message.member.addRole(message.guild.roles.find("name", "►نيہنجہا◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
var x14 = "رتبة طالب مدرسي"
client.on('message', message => {
if (message.content === x14) {
message.member.addRole(message.guild.roles.find("name", "►طُآلُِبَ مدِرٍسي◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});

         client.on('message', message => {
            if (message.content === 'رتب') {
              message.reply('رتبة طالب مدرسي.');
              message.channel.sendFile("./ProBot_851y.jpg");
               

            }
});

client.on("message", (message) => {
if (message.content.startsWith("f!ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("f!cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});
client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["كل زق","كلب","حمار","الشتيمه الي تريد منعه"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("**ممنوع السب**"); 
  }
});

const prefix = "-";
client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, credits,) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "SoOoN")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } else

  if (message.content.startsWith(prefix + "credits")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply('Sorry your :credit_card: balance is $0.');
      message.reply( 'Your Balance is ' +  `${row.points}` + '$' + ' :credit_card:');
    });
  }
});

client.login(process.env.BOT_TOKEN);

