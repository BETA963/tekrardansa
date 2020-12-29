const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        "❌ Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmalısın! ❌"
      )
    );
  const üye =
    message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  if (!üye)
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        "❌ Sunucudan yasaklamak istediğiniz kişiyi etiketleyin ya da ID'sini yazın. ❌"
      )
    );
  const sebep = args[1] || `Sebep Girilmedi`;
  const sebep2 = args[2] || ``;
  const sebep3 = args[3] || ``;
  const sebep4 = args[4] || ``;
  const sebep5 = args[5] || ``;
  const sebep6 = args[6] || ``;
  let kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (kullanıcı.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        "❌ Hata! `Üyeleri Yasakla` iznine sahip kişileri yasaklayamam. ❌"
      )
    );

  message.guild.members.ban(üye);
  const embed = new Discord.MessageEmbed()
    .setTitle(`🚨 **${message.guild.name}** 🚨`)
    .setDescription(`**<@${üye.id}> Adlı kullanıcı sunucudan yasaklandı!**`)
    .addField(`🧑 Yasaklayan Yetkili: 🧑`, `**<@${message.author.id}>**`)
    .addField(
      `🔎 Yasaklanma Sebebi: 🔍`,
      `**${sebep} ${sebep2} ${sebep3} ${sebep4} ${sebep5} ${sebep6}**`
    )
    .setThumbnail(
      "https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509"
    )
    .setTimestamp();
  return message.channel.send(embed);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla", "banla"],
  permLevel: 0
};

module.exports.help = {
  name: "ban",
  description: " Sebepli Ban",
  usage: "ban"
};
