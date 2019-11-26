const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`
${client.emojis.get("647760202875142154")} Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : !otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)
Eğer Herşey Zorsa Siteden Kolayca Ayarla : https://www.mcadventuretime.com/dc/`
)
 
 if(!kanal) return message.channel.send(`
${client.emojis.get("647760202875142154")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.
Eğer Herşey Zorsa Siteden Kolayca Ayarla : https://www.mcadventuretime.com/dc/
`)
 
  message.channel.send(`Bu özellik başarıyla kapatıldı. :hayirr:`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["otorol-kapat", "otorolkapat"], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-kapat',
  description: 'taslak', 
  usage: 'Otorol-ayarla'
};
