const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if (!db.fetch(`kayitKanal_${message.guild.id}`)) {
  return message.channel.send(`İsim Temizliği İçin Öncelikle Kayıt Sistemini Açmalısınız`)
}
  db.set(`isimtemizleyiciK_${message.guild.id}`, "aktif")
  message.channel.send(`isim temizleyici aktiftir.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isim-temizleyici-ac',
  description: 'sayaç', 
  usage: 'sayaç'
};
