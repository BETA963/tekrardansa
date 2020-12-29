const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bug = args.join(" ").slice(0);
  let user = message.author.username;
  let guild = message.guild.name;
  let guildid = message.guild.id;
  let kanal = message.channel.name;
  let channel = bot.channels.cache.get("784895140094672905");

  let embed = new Discord.MessageEmbed()
    .setTitle("Report")
    .setThumbnail("")
    .addField("Bug", bug)
    .addField("Report Eden", user, true)
    .addField("Sunucu", guild, true)
    .addField("Sunucu ID", guildid, true)
    .addField("Kanal", kanal, true)
    .setColor("RED");
  // QEQO DAVARBOT
  message.channel.send("**Bug Report Başarı İle İletildi.**");
  channel.send(embed).then(i => i.react("⏳"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bug-bildir"
  // DAVAR ADAMDIR XD
};
