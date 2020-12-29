const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  var yetkililist = [
    "747434686120460328",
    "592040836091347012",
    "557984047683600450",
    "561825628186345472",
    "760178539260674178",
    "760178150767722557",
    "760178529722957824"
  ];
  yetkililist = await yetkililist.filter(b => msg.member.roles.cache.has(b));
  if (!yetkililist[0])
    return msg.reply("Bu komudu kullanabilmen için yetkili olman gerekiyor");
  let sebep = args.slice(1).join(" ");
  let user = msg.guild.member(
    msg.mentions.users.first() || msg.guild.members.cache.get(args[0])
  );
  let uyarikanal = client.channels.cache.get("750719609073827892");
  if (!user) return msg.reply("Kullanıcı Etiketlemedin");
  if (!sebep) return msg.reply("Sebep Belirtmedin!");
  if (user.roles.cache.has("561238752912211969")) {
    if (user.roles.cache.has("561619272615591961")) {
      if (user.roles.cache.has("568897872150659072")) {
        msg.channel.send(
          `**${msg.author.username}**, **${user.author.username}** adlı kişide uyarı 3 var`
        );
      } else {
        user.roles.add("568897872150659072");
        msg.channel.send(
          `**${msg.author.username}**, **${user.author.username}** adlı kişide **uyarı 3** verildi`
        );
        const ozelmesajuyari = new Discord.MessageEmbed()
          .setColor("#FF4D4D")
          .setTimestamp()
          .addField("Uyarı verildi", `**${msg.author.username}**, **${user.author.username}** adlı kişiye **uyarı 3** verilme sebebi : ${sebep}`);
        uyarikanal.send(ozelmesajuyari);
      }
    } else {
      user.roles.add("561619272615591961");
      msg.channel.send(
        `**${msg.author.username}**, **${user.author.username}** adlı kişide **uyarı 2** verildi`
      );
      const ozelmesajuyari = new Discord.MessageEmbed()
        .setColor("#FF4D4D")
        .setTimestamp()
        .addField(
          "Uyarı verildi",
          `**${msg.author.username}**, **${user.author.username}** adlı kişiye **uyarı 2** verilme sebebi : ${sebep}`
        );
      uyarikanal.send(ozelmesajuyari);
    }
  } else {
    user.roles.add("561238752912211969");
    msg.channel.send(
      `**${msg.author.username}**, **${user.author.username}** adlı kişide **uyarı 1** verildi`
    );
    const ozelmesajuyari = new Discord.MessageEmbed()
          .setColor("#FF4D4D")
          .setTimestamp()
          .addField("Uyarı verildi", `**${msg.author.username}**, **${user.author.username}** adlı kişiye **uyarı 1** verilme sebebi : ${sebep}`);
        uyarikanal.send(ozelmesajuyari);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyarı", "uyar"],
  permLevel: 0
};

exports.help = {
  name: "uyarı"
};
