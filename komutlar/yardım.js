const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
 
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayfalıyardım","pagehelp","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
