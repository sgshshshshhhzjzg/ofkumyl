const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let mesaj = args.slice(0).join(' ');
if (message.content.includes("-uye-")) {
  return message.channel.send(client.emojis.get("647760202875142154") + `İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: \`!isim-sistemi [-uye-]\` yada \`!isim-sistemi [-uye-]|[-yas-]\``) 
}
  if (mesaj.length <= 5) {
return message.channel.send(client.emojis.get("647760202875142154") + `İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: \`!isim-sistemi [-uye-]\` yada \`!isim-sistemi [-uye-]|[-yas-]\``) 
}

db.set(`isimsistemi_${message.guild.id}`, mesaj)
  message.channel.send(`
Oto Tag Sistemi Ayarlanmıştır.
Unutmayın Sunucuya Yeni Katılan Kullanıcılar içindir. Kapatmak İçin \`!ototagkapat\``)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["isimsistemi"], 
  permLevel: 0
};

exports.help = {
  name: 'isim-sistemi',
  description: 'sayaç', 
  usage: 'sayaç'
};
