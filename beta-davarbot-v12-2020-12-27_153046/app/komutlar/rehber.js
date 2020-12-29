const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("**Özelden rehber mi çağırıyorsun hadi amaa!**");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    if (talkedRecently.has(message.author.id)) {
    message.channel.send(
      "Bu komudu sadece 1 Saate bir kullanabilirsin. **" +
        message.author.username +
        "**"
    );
  } else {
    client.channels.cache.get("747881090471166064").send(
      "**" +
      `${message.author}` + //  bi dakika hemen bakıyorum ona bende v12 yi biraz unuttum :D en kötü <@id> yapacağız
        "** rehber çağırıyor" +
        " <@&557984515302096927> \n" +
        "https://discord.com/channels/557981420782616607/" +
        message.channel.id +
        "/" +
        message.id
    );
    const sunucubilgi = new Discord.MessageEmbed()
      .setAuthor(message.author.username + " Rehber geliyor!!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("");
    return message.channel.send(sunucubilgi);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 3600000);
  }
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "rehber",
  description: "rehber çağarır",
  usage: "rehber"
};
