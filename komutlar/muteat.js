const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms");


exports.run = async(client, message, args) => {
  const mutel = db.fetch(`muteliRol_${message.guild.id}`);
  const rol = db.fetch(`muteRol_${message.guild.id}`);
  const log = db.fetch(`muteLog_${message.guild.id}`);
  if (!log) return
  if (!rol) return
  if (!mutel) return
  
  if (message.member.roles.has(rol)) {
    const kisi = message.mentions.users.first()
    const sebep = args[1]
  	let muteTime = args[2];

    if (!kisi) {
      return message.reply(`Susturulacak Kullanıcıyı Etiketlemelisin.
Etiketliyorsan Bu Hatayı Alıyorsan O Üyenin Görebildiği Bir Kanalda Susturmayı Denemelisin`)
    }
    
    if (!sebep) {
      return message.reply(`Hata: Sunucuda susturulacak kişiyi veya susturma sebebini yazmadın!`)
    }
    
    message.channel.send(`\`\`\`diff
- Yetkili: ${message.author.tag}
- Susturulan: ${kisi.username}
- Süre: ${muteTime.replace("s", " Saniye").replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")}
- Sebep: ${sebep}
\`\`\``)
    client.channels.get(log).send(`${kisi} - <@${message.author.id}> Tarafından ${sebep} Nedeniyle ${muteTime.replace("s", " Saniye").replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")} Boyunca Sunucuda Susturuldu. ${client.emojis.get("647746144155467786")}`)  
    message.guild.members.get(kisi.id).addRole(mutel)
    setTimeout(function(){
		message.guild.members.get(kisi.id).removeRole(mutel);
		client.channels.get(log).send(`${kisi} - <@${message.author.id}> Tarafından ${sebep} Nedeniyle ${muteTime.replace("s", " Saniye").replace("m", " Dakika").replace("h", " Saat").replace("d", " Gün")} Boyunca Susturulan Kişinin Susturulması Açıldı. ${client.emojis.get("647746144155467786")}`)  
	}, ms(muteTime));
  } else {
    return message.reply("Mute Atabilmek İçin Sunucu Sahibinin Ayarladığı Role Sahip Olmalısınız.")
  } 
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tempmute", "geçicisustur", "geçici-sustur", "mute"],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};