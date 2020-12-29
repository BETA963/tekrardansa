const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
  

    
  if (!message.member.roles.cache.has("764145903421358131")) return message.channel.send('Polis olmayan biri baskın atamaz');
    const ayy = client.emojis.cache.find(emoji => emoji.name === "begone");
  const ayy1 = client.emojis.cache.find(emoji => emoji.name === "deathtoU");
  const ayy2 = client.emojis.cache.find(emoji => emoji.name === "coolsmirk");
  const ayy3 = client.emojis.cache.find(emoji => emoji.name === "b3ta");
  
    message.channel.send(`${ayy} BASKIN`);
    message.channel.send(`${ayy1} ELLER YUKARI BEYLER`);
    message.channel.send(`${ayy2} YAT AŞAĞI YAT YAT`);
    message.channel.send(`${ayy3} BAN`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['baskın'],
  permLevel: 0,
  kategori: "eğlence",
};

exports.help = {
  name: 'baskın',
  description: 'İstediğin kanala baskın atarsın',
  usage: 'baskın',
 
};