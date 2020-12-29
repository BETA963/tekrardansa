const Discord = require("discord.js");

exports.run = function(client, message) {
  const h = client.emojis.cache.get("731169067959844906");
  const hn = client.emojis.cache.find(emoji => emoji.name === "boost");
  message.channel.send(`${h}SUNUCUYA TAKVİYE (BOOTS) YAPANLAR İÇİN AYRICALIKLAR${h}

${hn} Özel ses ve yazı kanalı
${hn} Özel müzik kanalı
${hn} Özel renk rolleri (!renk <renk>)
${hn} Roblox da istediğiniz oyunda vip server (300 robux altı)
${hn} İsminizi değiştirebilirsiniz (Uygunsuz isimler koyarsanız ban yersiniz)

${h}SUNUCUYA TAKVİYE (BOOTS) YAPANLARA TEŞEKKÜR EDERİM${h}`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["boost"],
  permLevel: 4
};

exports.help = {
  name: "boost",
  description: "Avatarınızı gösterir",
  usage: "boost"
};
