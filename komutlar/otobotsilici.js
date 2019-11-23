const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  db.push(`botsilici_${message.guild.id}`, message.channel.id)
  message.reply(`**Sadece bu sohbet kanalında** tüm botların mesajlarını bot mesaj attıktan **2 dakika** sonra sileceğim şu anda bu özellik aktif. ${client.emojis.get("647746144155467786")}
Sunucunuzun sohbet temizliği için bunu kullanıyorsunuz.`)
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'oto-bot-silici-aç',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
