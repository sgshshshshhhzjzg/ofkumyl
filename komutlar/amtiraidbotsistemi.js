const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
const sec = args[0]  

if (!sec) {
  message.reply(`
Anti Raid Bot Sistemi Nedir?
Eğer Açarsanız Sunucu Sahibinin İzni Olmadan Sunucuya Başka Bot Sokmaz. Giren Botlar Otomatik Atılır.
Örnek Kullanımı \`!anti-raid-bot-sistemi aç/kapat #logkanalı\`
`)
}
  
  if (sec == "aç" && sec == "on") {
    const kanal = message.mentions.roles.first()
    if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
    message.channel.send()
  }
  }
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sayac-bb-msg'], 
  permLevel: 0
};

exports.help = {
  name: 'sayac-bb-msg',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};