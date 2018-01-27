const Discord = require("discord.js");
const client = new Discord.Client();
 
var x2 = "رتبة ساموراي"
client.on('message', message => {
if (message.content === x2) {
message.member.addRole(message.guild.roles.find("name", "►سہامورايہ◄"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});
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


client.login(process.env.BOT_TOKEN);

