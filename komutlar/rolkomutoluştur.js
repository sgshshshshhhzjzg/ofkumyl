const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
const komut = args[0]  

if (komut.length <= 1) {
  return message.channel.send(`Komutunuz En Az \`1\` Haneli Olmalıdır.`)
}
     db.set(`${komut}_${message.guild.id}`, "aktif")
     message.channel.send(`
Rol Sistemi İçin Komutunuz Başarıyla Oluşturuldu Komutunuz **!${komut}**

Komutu Kullanmak İçin Öncelikle Ayarlarını Yapmalısınız
Bu Komutu Ayarlamak İçin \`!rol-düzenle ${komut}\` Yazınız
Tüm Komutları Görmek İçinde \`!rol-komutlar\` Komutunu Giriniz
Eğer Silmek İsterseniz \`!rol-komut-sil ${komut}\`
`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolkomutoluştur'],
  permLevel: 0
};

module.exports.help = {
  name: 'rol-komut-oluştur',
  description: '',
  usage: ''
};