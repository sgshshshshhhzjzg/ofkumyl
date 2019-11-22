const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfüraç"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
