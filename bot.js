const Discord = require("discord.js");
const client = new Discord.Client();
 
var x1 = "رتبة ساموراي"
client.on('message', message => {
if (message.content === x1) {
message.member.addRole(message.guild.roles.find("name", "ساموراي"));
const embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('Requested by:', "<@" + message.author.id + ">")
.setDescription(`تم`)
message.channel.sendEmbed(embed).then(message => {message.delete(3000)})
    }
});


client.login(process.env.BOT_TOKEN);

