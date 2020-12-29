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
  if (!sebep) return msg.reply("Sebep Belirtmedin!");
  if (!user) return msg.reply("Kullanıcı Etiketlemedin");
  if (user.roles.cache.has("561238752912211969")) {
    if (user.roles.cache.has("561619272615591961")) {
      if (user.roles.cache.has("568897872150659072")) {
        user.roles.remove("568897872150659072");
        const ozelmesajuyari = new Discord.MessageEmbed()
          .setColor("#73FF00")
          .setTimestamp()
          .addField(
            "Uyarı Alındı",
            `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 3**'ünü sildi : ${sebep}`
          );
        uyarikanal.send(ozelmesajuyari);
        msg.channel.send(
          `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 3**'ünü sildi`
        );
        return;
      }
      user.roles.remove("561619272615591961");
      const ozelmesajuyari = new Discord.MessageEmbed()
        .setColor("#73FF00")
        .setTimestamp()
        .addField(
          "Uyarı Alındı",
          `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 2**'sini sildi : ${sebep}`
        );
      uyarikanal.send(ozelmesajuyari);
      msg.channel.send(
        `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 2**'sini sildi`
      );
      return;
    }
    user.roles.remove("561238752912211969");
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("#73FF00")
      .setTimestamp()
      .addField(
        "Uyarı Alındı",
        `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 1**'ini sildi : ${sebep}`
      );
    uyarikanal.send(ozelmesajuyari);
    msg.channel.send(
      `**${msg.author.username}**, **${user}** adlı kişinin **uyarı 1**'ini sildi`
    );
    return;
  } else {
    msg.channel.send(
      `**${msg.author.username}**, **${user}** adlı kullanıcınız zaten uyarısı yok`
    );
    return;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyarıal", "uyarıkaldır", "unuyarı"],
  permLevel: 0
};

exports.help = {
  name: "uyarıal"
};
