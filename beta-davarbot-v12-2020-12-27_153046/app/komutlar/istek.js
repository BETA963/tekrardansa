const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bug = args.join(" ").slice(0);
  let user = message.author.username;
  let guild = message.guild.name;
  let guildid = message.guild.id;
  let kanal = message.channel.name;
  let channel = bot.channels.cache.get("784897899124883496");

  let embed = new Discord.MessageEmbed()
    .setTitle("Yeni Bir iStEk")
    .setThumbnail("")
    .addField("İstek", bug)
    .addField("İsteği isteyen", user, true)
    .addField("Sunucu", guild, true)
    .addField("Sunucu ID", guildid, true)
    .addField("Kanal", kanal, true)
    .setColor("BLUE");

  message.channel.send("**İsteğiniz başarıyla gönderildi teşekkür ederiz**");
  channel.send(embed).then(i => i.react("✔️"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["İstek"],
  permLevel: 0
};

exports.help = {
  name: "istek"
};
