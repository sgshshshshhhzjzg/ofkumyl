const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  console.log(await db.fetch(`kufurKanal_${message.guild.id}`))
  
  await db.delete(`kufurKanal_${message.guild.id}`)
  message.channel.send(`<@${message.author.id}> Bu özellik **sadece bu kanalda** aktif edildi.`)
  
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfürkapat"],
  permLevel: 0
};

module.exports.help = {
  name: 'küfür-kapat',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
