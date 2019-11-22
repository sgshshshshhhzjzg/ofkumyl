const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  console.log(await db.fetch(`kufurKanal_${message.guild.id}`))
  if (await db.fetch(`kufurKanal_${message.guild.id}`).includes(message.channel.id) && await db.fetch(`kufurKanal_${message.guild.id}`) == message.channel.id) {
    return message.channel.send(`<@${message.author.id}> Sanırım bu özellik zaten açıkmış :)`)
  }
  
  await db.push(`kufurKanal_${message.guild.id}`, message.channel.id)
  message.channel.send(`<@${message.author.id}> Bu özellik **sadece bu kanalda** aktif edildi.`)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfüraç"],
  permLevel: 0
};

module.exports.help = {
  name: 'küfür-aç',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
