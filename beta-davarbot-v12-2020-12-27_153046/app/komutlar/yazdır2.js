const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if ((message.author.id !== "444095448425299977", "631189057862631496"))
    return message.channel.send(
      "⚠️Üzgünüm bu komutu sadece BETA ve botun kodlamacıları test etmek için kullanabilir⚠️"
    );
  let mesaj = params.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply("Yazmam için herhangi bir şey yazmalısın.");
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField(message.author.username, mesaj);
  message.delete();
  return message.channel.send(ozelmesajuyari);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "yazdır2",
  description: "komutları gösterir",
  usage: "yazdır2"
};
