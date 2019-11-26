const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
  if (!db.fetch(`kayitKanal_${message.guild.id}`)) {
  return message.channel.send(`İsim Temizliği İçin Öncelikle Kayıt Sistemini Açmalısınız`)
}
  db.set(`isimtemizleyiciK_${message.guild.id}`, "aktif")
  message.channel.send(`isim temizleyici aktiftir.`)
 }
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
