const Discord = require("discord.js");
const db = require("wio.db");
const client = new Discord.Client();
const express = require("express");
const app = express();
const fs = require("fs");
new Discord.GuildMember(client);
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Programmed By AloneDark");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS Yükleyici_______________________________________________________________
const ayarlar = require("./ayarlar.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});

client.login(ayarlar.token);

//BOTUN OYNUYOR Kısmı________________________________________________________________https://
client.on("ready", () => {
  client.user.setActivity(`#TeamDavar`);
});

//_____________KOMUTLAR_______________________________
//sa-as sistemi

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', async () => {

  await wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.get("642771492005740544");
    logChannel.send(`${member.user.tag} aramıza katıldı! Kullandığı davet linki **${invite.code}**, daveti oluşturan **${inviter.tag}**. Bu daveti **${invite.uses}** kişi kullandı.`);
  });
});

client.on("ready", async a => {
  var guild = client.guilds.cache.get("557981420782616607");
  const rekor = client.channels.cache.get("760488506647773194");
  const channel2 = client.channels.cache.get("760488503795515403");
  const channel1 = client.channels.cache.get("760488500633272373");
  var interval = setInterval(async a => {
    var guildMembers = await guild.fetch();
    let rekoronline = await db.fetch(`aktif{member.guild.id}`);
    channel1.setName(`Üye Sayısı ${guild.memberCount.toLocaleString()}`);
    if (rekoronline !== null) {
      if (rekoronline < guildMembers.approximatePresenceCount) {
        channel2.setName(`Aktif Üye ${guildMembers.approximatePresenceCount}`);
        db.set(`aktif{member.guild.id}`, guildMembers.approximatePresenceCount);
        rekor.setName(`Rekor Aktif Üye ${guildMembers.approximatePresenceCount}`);
        console.log(`Rekor!! ${guildMembers.approximatePresenceCount}`)
      } else {
        channel2.setName(`Aktif Üye ${guildMembers.approximatePresenceCount}`);
        console.log(`Rekor yok ${guildMembers.approximatePresenceCount}`)
      }
    } else {
      db.set(`aktif{member.guild.id}`, guildMembers.approximatePresenceCount);
    }
  }, 180000);
});

var sayi = (1, 2, 3, 4, 5, 6, 7, 8, 9);

const degisim = async guild => {
  const channel1 = client.channels.cache.get("760488500633272373");
  channel1.setName(`Üye Sayısı ${guild.memberCount.toLocaleString()}`);
};

client.on("guildMemberAdd", member => degisim(member.guild));
client.on("guildMemberRemove", member => degisim(member.guild));

client.on("message", async msg => {
  if (
    msg.content.includes("discord.gg/") ||
    msg.content.includes("discordapp.com/invite/") ||
    msg.content.includes("www.") ||
    msg.content.includes("https://") ||
    msg.content.includes(".com") ||
    msg.content.includes(".net")
  ) {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
    if (msg.content.includes("roblox.com")) return;
    if (msg.content.includes("www.youtube.com")) return;
    if (msg.content.includes("gif")) return;
    if (msg.content.includes("youtu.be")) return;
    if (msg.content.includes("cdn.discordapp.com")) return;
    if (msg.member.hasPermission("KICK_MEMBERS")) return;
    client.users.cache
      .get("444095448425299977")
      .send(
        "Sunucuda uygunsuz link paylaşan biri var sanırım.\nİsim: <@" +
          msg.member.id +
          ">\nMesaj: `" +
          msg.content +
          "`"
      );
    msg.delete();
    //}
  }
  if (msg.content == "!sayisaymacareset") {
    db.set(`sayi_${msg.guild.id}`, 0);
    msg.channel.send("Sıfırlandı").then(msg => {
      msg.delete({ timeout: 3000 });
    });
  }
  if (msg.channel.id == "999999999999999999999") {
    if (msg.author.bot) return;
    if (
      msg.content.charAt(0) == 1 ||
      msg.content.charAt(0) == 2 ||
      msg.content.charAt(0) == 3 ||
      msg.content.charAt(0) == 4 ||
      msg.content.charAt(0) == 5 ||
      msg.content.charAt(0) == 6 ||
      msg.content.charAt(0) == 7 ||
      msg.content.charAt(0) == 8 ||
      msg.content.charAt(0) == 9 ||
      msg.content.charAt(0) == 10
    ) {
      //
      if (db.fetch(`sayi_${msg.guild.id}`) == msg.content - 1) {
        console.log("bildi");
        db.set(`sayi_${msg.guild.id}`, msg.content);
      } else {
        msg.channel
          .send(
            "Yanlış rakam girdin doğrusu " +
              db.fetch(`sayi_${msg.guild.id}`) -
              1 +
              " Olacaktı"
          )
          .then(msg => {
            msg.delete({ timeout: 3000 });
          });
      }
    } else {
      msg.channel.send("rakam girlna").then(msg => {
        msg.delete({ timeout: 3000 });
      });
    }
  }
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm"
    ) {
      try {
        return msg.reply("**Aleyküm Selam, Hoşgeldin :)** ");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});
//uyarı
client.on("message", async msg => {
  if (msg.content.startsWith("-mute")){}
});
//Capslock engelleme sistemk
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(
                `✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`
              )
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
// BİRİ BOOST BASINCA MESAJ
const logs = require("discord-logs");
logs(client);

client.on("guildMemberBoost", member => {
  let kanal = client.channels.cache.get("642775958306291713");
  kanal.send(
    `${member.user.tag} kullanıcısı Sunucumuza Boost bastı teşekkür ederiz!`
  );
  member.send(
    `${member.guild.name} sunucusuna boost bastığın için teşekkürler!`
  );
});
// RESİMLER
client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.attachments.size < 0) return;

  function extension(attachment) {
    let imageLink = attachment.split(".");
    let typeOfImage = imageLink[imageLink.length - 1];
    let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return "";
    return attachment;
  }
  let image =
    message.attachments.size > 0
      ? await extension(message.attachments.array()[0].url)
      : null;
  if (!image) return;
  console.log(message.attachments.size);

  // db.push(`linkler.${message.guild.id}.${message.author.id}`, {imagee: image})
});
