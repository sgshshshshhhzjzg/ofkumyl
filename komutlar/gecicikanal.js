const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  message.guild.createChannel("Geçici Sohbet", "category").then(kategori => {
    message.guild.createChannel("Sohbet Oluştur", "voice").then(ses => {
    ses.setParent(kategori.id)
    db.set(`geciciKategori_${message.guild.id}`, kategori.id)
      db.set(`geciciKanal_${message.guild.id}`, ses.id)
  })
  })
  message.channel.send("Başarıyla geçici kanal sistemi aktif edildi! " + client.emojis.get("647746144155467786"))
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["geçicikanaloluştur"],
	permLevel: 0,
	kategori: 'yetkili'
}

exports.help = {
	name: 'geçici-kanal-oluştur',
	description: '',
	usage: ''
}