const Discord = require("discord.js");

exports.run = async (client, message) => {
  const rules = new Discord.MessageEmbed()

    .setColor("RED")
    .addField(`📃TEMEL KURALLAR📃`, [
      `
**Üyeleri rahatsız etmek yasaktır** // 2 saat Mute + Uyarı
**Üyelere istenmeyen şeyleri yapmak yasaktır** // 4 saat Mute + Uyarı
**Üyereri kışkırtmak yasaktır** // 6 saat Mute + Uyarı
**Üyelere ırkçı söylemler yasaktır** // Sınırsız BAN
**Üyleri tehdit edecek sözler yasaktır** // 12 saat Mute + Uyarı
**Kavga etmek yasaktır** // 6 saat Mute + Uyarı
**Konuşurken diğer üyeleri rahatsız etmek yasaktır** // 2 saat Mute + Uyarı
**Kavga ederken üyelerden telefon numarası istemek adres istemek yasaktır** // 12 saat Mute + Uyarı
**Üyelerle alay etmek yasaktır** // 12 saat Mute + Uyarı
**Dini değerlere saygısızlık yasaktır** // Sınırsız BAN
**Sunucu kalitesini düşüren tavırlar sergilemek yasaktır** // 1 Hafta BAN
**Sürekli rol istemek yasaktır** // 3 saat Mute
**Robux istmek yasaktır** // 2 saat Mute + Uyarı
**Kanalları yanlış kullanmak yasaktır** // 2 saat Mute
**Cinsel konular hakkında konuşmak** // 5 saat Mute + Uyarı
      
 `
    ]);

  message.delete();
  //message.react("?");

  return message.channel.send(rules).then(keleS => keleS.react("?"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rules"],
  permLevel: 0
};

exports.help = {
  name: "kurallar",
  description: "Hazır kuralları kanalınıza atar.",
  usage: "<prefix>kurallar/rules"
};
