const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require("wio.db");
const talkedRecently = new Set();
exports.run = async (receivedMessage, msg, args) => {
  var yetkililist = [
    //return msg.channel.send("Renk değiştirmek için booster olman gerek");
    "750044775079477309",
    "748933991180271747",
    "748933383584874497",
    "750044946282709023",
    "595600751586181120",
    "566662420173684736",
    "565565294844575754",
    "744682896086007878",
    "750423930078101525",
    "773942598355910698",
    "557984664510529536"
  ];
  const yetkili = new Discord.MessageEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL())
    .setColor("RANDOM")
    .setTimestamp()
    .addField(
      "Bu komudu kullanmak için aşağıdaki yetkilerden en az birine sahip olman gerekiyor.",
      "<@&750044775079477309>\n" +
        "<@&748933991180271747>\n" +
        "<@&748933383584874497>\n" +
        "<@&750044946282709023>\n" +
        "<@&595600751586181120>\n" +
        "<@&566662420173684736>\n" +
        "<@&565565294844575754>\n" +
        "<@&744682896086007878>\n" +
        "<@&750423930078101525>\n" +
        "<@&773942598355910698>\n" +
        "<@&557984664510529536>\n"
    );
  yetkililist = await yetkililist.filter(b => msg.member.roles.cache.has(b));
  console.log(yetkililist);
  if (!yetkililist[0]) return msg.channel.send(yetkili);
  let user = args[0];
  let reason = args.slice(1).join(" ");
  const renkler = new Discord.MessageEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL())
    .setColor("RANDOM")
    .setTimestamp()
    .addField(
      "Renkler",
      "<@&773118083706388480>\n<@&774381853871702068>\n<@&774381612103499808>\n<@&774381587374538752>\n<@&774381722464026634>\n<@&774381853384769586>\n<@&774381760052985866>\n<@&774381611138547742>\n**Kullanım : !renk <RENK>**"
    );

  if (!args[0]) return msg.channel.send(renkler);
  console.log(args);
  var roleList = [
    "774381853871702068",
    "774381612103499808",
    "774381587374538752",
    "774381722464026634",
    "774381853384769586",
    "774381760052985866",
    "774381611138547742"
  ];
  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(
      "Bu komudu sadece 1 Saate bir kullanabilirsin. **" +
        msg.author.username +
        "**"
    );
  } else {
    roleList = await roleList.filter(b => msg.member.roles.cache.has(b));

    await msg.member.roles.remove(roleList).catch(console.error);
    if (args == "mavi") {
      if (!msg.member.roles.cache.has("773118083706388480")) {
        msg.member.roles.add("773118083706388480").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "pembe") {
      if (!msg.member.roles.cache.has("774381853871702068")) {
        msg.member.roles.add("774381853871702068").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "kırmızı") {
      if (!msg.member.roles.cache.has("774381612103499808")) {
        msg.member.roles.add("774381612103499808").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "yeşil") {
      if (!msg.member.roles.cache.has("774381587374538752")) {
        msg.member.roles.add("774381587374538752").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "sarı") {
      if (!msg.member.roles.cache.has("774381722464026634")) {
        msg.member.roles.add("774381722464026634").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "beyaz") {
      if (!msg.member.roles.cache.has("774381853384769586")) {
        msg.member.roles.add("774381853384769586").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "siyah") {
      if (!msg.member.roles.cache.has("774381760052985866")) {
        msg.member.roles.add("774381760052985866").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
    if (args == "turuncu") {
      if (!msg.member.roles.cache.has("774381611138547742")) {
        msg.member.roles.add("774381611138547742").catch(console.error);
        msg.channel.send("Renginiz " + args + " olarak ayarlandı");
        talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 3600000);
      }
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["renk"],
  permLevel: 0
};

exports.help = {
  name: "renk",
  description: "",
  usage: "renk"
};
