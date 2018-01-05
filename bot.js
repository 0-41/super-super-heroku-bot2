const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
  client.user.setGame(`Hi Im Streaming !`,`www.twitch.tv/v5bz`);
});
clinet.on('message', message => {
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
