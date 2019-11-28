const Discord = require('discord.js');
const db = require('quick.db')
const fs = require('fs')
exports.run = async (client, message,args) => {
const komut = args[0]  

if (komut.length <= 1) {
  return message.channel.send(`Komutunuz En Az \`1\` Haneli Olmalıdır.`)
}
  if (db.fetch(`rolkomutkullanim_${message.guild.id}`) >= 1) {
  let komutvarsa = JSON.parse(fs.readFileSync("./komut.json", "utf-8"))
  let komutvarmi = komutvarsa[message.guild.id].komutlar
if (komutvarmi.includes(komut)) {
  return message.channel.send(`
Aynı Komutu Daha Önce Kullandığınızı Görüyorum Lütfen Onu Yapılandırın
Örnek Ayar \`!rol-düzenle ${komut}\``)
}
  }
  
      let komutt = JSON.parse(fs.readFileSync("./komut.json", "utf8"));
        komutt[message.guild.id] = {
            komutlar: komut
        };
        fs.writeFile("./komut.json", JSON.stringify(komutt), (err) => {
            if (err) console.log(err);
        });
     db.set(`rolkomut-${komut}_${message.guild.id}`, "aktif")
     db.add(`rolkomutkullanim_${message.guild.id}`, 1)
     message.channel.send(`
Rol Sistemi İçin Komutunuz Başarıyla Oluşturuldu Komutunuz **!${komut}**

Komutu Kullanmak İçin Öncelikle Ayarlarını Yapmalısınız
Bu Komutu Ayarlamak İçin \`!rol-düzenle ${komut}\` Yazınız
Tüm Komutları Görmek İçinde \`!rol-komutlar\` Komutunu Giriniz
Eğer Silmek İsterseniz \`!rol-komut-sil ${komut}\`
`)
  
  /*
  let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let role = autorole[member.guild.id].sayi
      */
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