const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if (!db.fetch(`ototag_${message.guild.id}`)) {
  return message.channel.send(`İsim Temizliği İçin Öncelikle Ototag Sistemini Açmalısınız`)
}
  db.set(`isimtemizleyici_${message.guild.id}`, "akitf")
  message.channel.send(`isim temizleyici aktiftir.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["isimtemizleyiciaç"], 
  permLevel: 0
};

exports.help = {
  name: 'isim-temizleyici-aç',
  description: 'sayaç', 
  usage: 'sayaç'
};
