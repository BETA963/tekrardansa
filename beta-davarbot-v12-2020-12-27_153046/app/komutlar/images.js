const Discord = require("discord.js");
const data = require("wio.db");

exports.run = async (client, message, args) => {
  const ss = new Discord.MessageEmbed();
  let asd = [];

  const images =
    (await data.fetch(`linkler.${message.guild.id}.${message.author.id}`)) ||
    [];
  for (let codare of images) {
    let kodare = codare.imagee;
    console.log(codare);
    asd.push(kodare);
  }
  message.channel.send(`DM kutuna bak!`);
  message.author.send(`İşte resimlerin:`);
  asd.forEach(c => {
    const asdd = new Discord.MessageAttachment(c);
    message.author.send(asdd);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "images"
};
