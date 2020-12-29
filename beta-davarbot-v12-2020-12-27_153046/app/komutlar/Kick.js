const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.members.first();
  let sebep = args.slice(1).join(" ");

  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(
      "Bu Komutu Kullanabilmek için '**ÜYELERİ_AT**' yetkisine sahip olmalısınız"
    );

  if (!kullanıcı) return message.channel.send("Bir Kullanıcı Etiketlemelisin!");
  if (!sebep) {
    sebep = "Sebep Belirtilmedi!";
  }
  let dcs = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setDescription(
      "**__Atılan Kullanıcı:__** <@" +
        kullanıcı.id +
        ">\n\n **__Atan Yetkili:__** <@" +
        message.author.id +
        ">\n\n**__Atılma Sebebi:__** `" +
        sebep +
        "`"
    )
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp();
  message.delete();
  message.channel.send(dcs);
  kullanıcı.kick(sebep);
};
module.exports.conf = {
  aliases: ["Kick"]
};

module.exports.help = {
  name: "kick"
};
