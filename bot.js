
const Discord = require("discord.js");
const client = new Discord.Client();


client.on('message', message => {
  if (message.content.startsWith('رتبة فورتنايت')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "fortniet"));
 
 }
 });
client.on('message', message => {
  if (message.content.startsWith('رتبة افرواتش')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "overwatch"));
 }
 });
client.on('message', message => {
  if (message.content.startsWith('رتبة سي اس قو')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "CS GO"));
 }
 });
client.on('message', message => {
  if (message.content.startsWith('رتبة رينبو 6')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Rainbow Six SIEGE"));
 }
 });
client.on('message', message => {
  if (message.content.startsWith('رتبة لول')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "League of Legends"));
 }
 });
client.on('message', message => {
  if (message.content.startsWith('رتبة اقاريو')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "3rb.be"));
 }
 });
        client.on("message", message => {
    var prefix = "!";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(".clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(embed4);
                            }
                          }
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send('  يمكن صُدفه تخلق الصُحبه الجميله .حـــيّاك :black_heart:"  https://discord.gg/kY9Xyve')

}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
