const Discord = require("discord.js");
const client = new Discord.Client();
 
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
client.login(process.env.BOT_TOKEN);

