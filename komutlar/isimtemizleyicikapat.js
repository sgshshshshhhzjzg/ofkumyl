const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if (!db.fetch(`isimtemizleyici_${message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
}
  db.delete(`isimtemizleyici_${message.guild.id}`)
  message.channel.send(`isim temizleyici aktif değildir.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isimtemizleyicikapat',
  description: 'sayaç', 
  usage: 'sayaç'
};
