const db = require("wio.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (message.author.id !== "444095448425299977")
    return message.reply("Bu Komudu Sadece **BETA#7215** kullanabilir");
  if (!args[0])
    return message.channel.send(
      `Aç yada kapat yazmalısın!! Örnek: **!sa-as aç**`
    );

  if (args[0] === "aç") {
    db.set(`ssaass_${message.guild.id}`, "acik");
    message.channel.send(
      `Artık bot Sa diyince As diyecek. Kapatmak için "\`!sa-as kapat\`" yazmalısın.`
    );
  }

  if (args[0] === "kapat") {
    db.set(`ssaass_${message.guild.id}`, "kapali");
    message.channel.send(`Artık biri sa diyince cevap vermicek.`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sa-as-sistemi"],
  permLevel: 0,
  kategori: "Ayarlar"
};

exports.help = {
  name: "sa-as",
  description: "Sa As ayarlarsın.",
  usage: "sa-as"
};
