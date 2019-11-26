const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`ototag_${message.guild.id}`)) {
  return message.channel.send(`İsim Temizliği İçin Öncelikle Ototag Sistemini Açmalısınız`)
}
  db.set(`isimtemizleyici_${message.guild.id}`, "aktif")
  message.channel.send(`isim temizleyici aktiftir.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isimtemizleyiciaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
