const Discord = require('discord.js'); 
 
exports.run = async(client, msg, args) => {
 
 if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription("Doğru kullanım: `!yavaş-mod [0-∞]`")
              .setColor("RANDOM")
            msg.channel.send({embed: embed})
            return
          }
  
if (isNaN(limit)) {
  var s = new Discord.RichEmbed()
  .setDescription("Doğru kullanım: `!yavaş-mod [0-∞]`")
  .setColor("RANDOM")
  msg.channel.send({embed: s});
    return
}
  
if (limit > 300) {
  var x = new Discord.RichEmbed()
  if (db.has(`premium_${msg.guild.id}`) == false) {
  return   msg.reply(`5 Dakika Üstü İçin Sunucunuzun Premium Olması Gerekiyor (6 Saate Kadar Uzatabilirsiniz.).
Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\`
  } else {

  }
`);
    return
}
    var e = new Discord.RichEmbed()
    .setDescription(`Yazma süre limiti **${limit}** Saniye olarak ayarlanmıştır!`)
    .setColor("RANDOM")
    msg.channel.send({embed: e})
  
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaşmod"],
  permLevel: 0
};

module.exports.help = {
  name: 'slowmode',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
