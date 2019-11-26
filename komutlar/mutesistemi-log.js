const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("EŞŞEK-AT", client.user.avatarURL)
.setColor('BLUE')
.setTitle(`MC-EŞŞEK BOT`)
.setURL("https://discord.gg/jRzZB7")
.addField(`• \`!mute-sistemi-log #kanal\`》`, "Mute Atılınca Hangi Kanala Log Tutulsun")
.addField(`• \`!mute-sistemi-yönetici @susturmayetkilisi\`》`, `Susturma Yetkilisini Seçersiniz
Bu Role Sahip İnsanlar Başka İnsanları Susturabilir.`)
.addField(`• \`!mute-sistemi-muteli @susturulmuş\`》`, `
Üye İsim Sistemi Özgürce Yerleştirin Değişkenler -uye- -yas-
Susturulmuş Üyelere Verilecek Otomatik Rol.
`)
.addField(`• \`!sustur | !mute | !sürelisustur | !tempmute\`》`, `
Komutları İle Susturabilirsiniz Örnek Kullanım.
\`!sustur @üye 10m\`
10s = 10 Saniye
10m = 10 Dakika
10h = 10 Saat
10d = 10 Gün
Maximum 30 Günlük Susturma Atılabilir
`)
.addField(`• \`!unmute | !susturmakaldır\`》`, `
Komutları İle Susturmayı Çözebilirsiniz Örnek Kullanım.
\`!unmute @üye affedildi\``)
.setDescription(`
Susturma Sistemi
**Üyeleri Süreli Susturma Sistemidir.**
Örnek \`!sustur @üye 10m\` Yaparsanız Üyeyi 10 Dakika Susturur.
`)
.setFooter('© STARK-ZEHİR',client.user.avatarURL)

 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["mute-sistemi"], 
  permLevel: 0
};

exports.help = {
  name: 'mutesistemi',
  description: 'sayaç', 
  usage: 'sayaç'
};
