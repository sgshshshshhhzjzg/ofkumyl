const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.RichEmbed()
     .setAuthor("MC-EŞEK",client.user.avatarURL)
     .setTitle('MC-EŞEK BOT')
     .setURL('https://discord.gg/bWjWHK')
     .setColor('BLUE')
     .setDescription(`
Rol Sistemi Kullanımı
**Rolleri Yönet Yetkisini Üyeye Vermeden Rol Verme Sistemi!**
Komutunuz Kısmına Oluşturduğunuz Komutu Girmezseniz Çalışmaz.
Örnek \`!rol-komut-oluştur bayanüye\` Yaptınız Diyelim
Onu Editlemek İçin \`!rol-yetkilisi-ayarla bayanüye @rolyetkilisi\``) 
     .addField(`• \`!rol-komut-oluştur Komut\`》`, `
Komutu Oluşturunuz Oluşturulan Komut !komutunuz @üye Şeklinde Çalışacaktır
`)
     .addField(`• \`!rol-düzenle komutunuz\`》`, '```Sunucuda birisi 10 dakika içerisinde belirlenen sayının üzerinde ban atarsa o üyeyi sunucundan atar. (kickler) Yönetici yetkisini ve botlarıda görür. (TAM KORUMA İÇİN İDEALDİR) ```')
     .addField(`• \`!rol-log-kanal komutunuz #kanal\`》`,'```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla kanal silerse üye sunucudan atılır.```')
     .addField(`• \`!rol-yetkilisi-ayarla komutunuz @rol\`》`,'```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla rol silinirse silen üye sunucudan atılır.```') 
     .addField(`• \`!rol-verilecek-ayarla komutunuz @rol\`》`,'Ban koruma özelliğini açar kapatır.')
     .addField(`• \`!rol-otomatik-silinecek-ayarla komutunuz @rol\`》`,'Kanal koruma özelliğini açar kapatır.')
     .addField(`• \`!rol-komutları\`》`,'Rol koruma özelliğini açar kapatır.') 
     .addField(`• \`!rol-komut-sil komutunuz\`》`,'Sunucunuzun verilerini veritabanından siler. (ayarları baştan yapmanız gerekir)')
     .addField(`• \`!Komutunuz @üye\`》`,'Spambot korumasını gösterir.')
     .addField(`• \`!Komutunuzsil @üye\`》`,'Sunucuya katılan üyelerin güvenilir olup olmadığını gösterir.')
     .setFooter('© STARK-ZEHİR',client.user.avatarURL)
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolsistemi','rolsistem'],
  permLevel: 0
};

module.exports.help = {
  name: 'rol-sistemi',
  description: '',
  usage: ''
};