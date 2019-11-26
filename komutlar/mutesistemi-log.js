const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
   if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {

 if(!kanal) return message.channel.send(`
${client.emojis.get("647760202875142154")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.
Eğer Herşey Zorsa Siteden Kolayca Ayarla : https://www.mcadventuretime.com/dc/
`)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Mute Sistemi▬▬▬▬▬▬▬▬▬
║► ${client.emojis.get("647746144155467786")} Mute Sistemi Log Kanalı Aktif Edildi.
║► ${client.emojis.get("647746144155467786")} Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
 
  db.set(`muteLog_${message.guild.id}`, kanal.id) 
  }
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["mute-sistemi-log"], 
  permLevel: 0
};

exports.help = {
  name: 'mutesistemilog',
  description: 'sayaç', 
  usage: 'sayaç'
};
