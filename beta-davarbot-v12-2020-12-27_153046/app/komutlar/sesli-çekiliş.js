const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      "**Bu Komutu Kullana Bilmek İçin `Sunucuyu Yönet` Yetkisi Gerekli!**"
    );
  if (!message.member.voice.channel)
    return message.reply(
      "**Bu Komutu Kullana Bilmek İçin Sesli Kanalda Olman Gerekli!**"
    );
  let odul = args.slice(0).join(" ");
  if (!odul) return message.reply("**Bir Ödül Yazman Gerek!**");

  let obj = message.member.voice.channel.members.cache.map(mr => mr.id);
  const sonuç = obj[Math.floor(Math.random() * obj.length)];

  let cse = new Discord.MessageEmbed()
    .setTitle("🎉 Winner Winner")
    .setColor("GREEN")
    .setThumbnail(message.guild.iconURL())
    .setDescription(
      `**Kazanan: <@${sonuç}>\nSeslide Çekiliş Yapan: ${message.author}\nÖdül: \`${odul}\`**`
    )
    .setFooter("Programmed by AloneDark")
    .setTimestamp();
  message.channel.send(cse);
};
module.exports.conf = {
  aliases: ["sesçekiliş"]
};

module.exports.help = {
  name: "ses-çekiliş"
};
