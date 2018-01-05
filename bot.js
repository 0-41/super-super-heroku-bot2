const Discord = require("discord.js");
const x5bz = new Discord.Client();
x5bz.on('ready', () => {
  x5bz.user.setGame(`By: iiPixelSA`,'https://www.twitch.tv/v5bz');
  console.log('Im Ready!');
x5bz.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bc')){
 if(!message.author.id === '256055323167555595') return;
message.channel.sendMessage('تم , جار أرسال الرسالة')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})

x5bz.login(process.env.BOT_TOKEN);
