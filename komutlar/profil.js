const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.RichEmbed()
 
 .setAuthor(message.author.tag, message.author.avatarURL)
.setColor("RED")
.setThumbnail(message.author.avatarURL)
.addField(":bust_in_silhouette: Ad", message.author.tag)
 .addField(client.emojis.get("649963065697107978") + " Puan", "0")
 .addField(":game_die: ID", message.author.id)
 .addField(":rosette: Durumu", message.guild.members.filter(m => 
                                                            m.presence.status()))
 
 return message.channel.send(Embed)
  }
 
    const Embed2 = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setColor("RED")
.setThumbnail(message.author.avatarURL)
.addField(":bust_in_silhouette: Ad", message.author.tag)
.addField(client.emojis.get("649963065697107978") + " Puan", db.fetch(`goldpuan_${message.author.id}`)) 
.addField(":game_die: ID", message.author.id)

 
 return message.channel.send(Embed2)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profıl"],
  permLevel: 0
};

module.exports.help = {
  name: "profil",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
