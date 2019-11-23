const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
 const banl = db.fetch(`banlimit_${message.guild.id}`);
  const rol = db.fetch(`yasaklamaRol_${message.guild.id}`);
  const log = db.fetch(`yasaklamaKanal_${message.guild.id}`);
  if (!log) return;
  if (!rol) return;
  if (!banl) return;
  
  if (message.member.roles.has(rol)) {
    const kisi = message.mentions.users.first()
    const sebep = args[1]
    if (!kisi) {
      return message.reply(`, Banlanıcak Kullanıcıyı Etiketlemelisin.
Etiketliyorsan Bu Hatayı Alıyorsan O Üyenin Görebildiği Bir Kanalda Banlamayı Denemelisin`)
    }
    
    if (!sebep) {
      return message.reply(`Hata: Sunucudan banlancak kişiyi veya ban sebebini yazmadın!`)
    }
    client.channels.get()//@* AirRoll | Bratva Edward STARK - @! Zehir Vevo た Tarafından test Nedeniyle Sunucudan Yasaklandı. :ban:
  } 
    return message.reply("Ban Atabilmek İçin Sunucu Sahibinin Ayarladığı Role Sahip Olmalısınız.")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};