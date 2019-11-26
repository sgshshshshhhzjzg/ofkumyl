const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
if (!args[0]) {
return message.channel.send(`ototag Kullanımı Örnek \`!ototag 🔱| -uye-\``) 
  
}
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["tag-sistemi"], 
  permLevel: 0
};

exports.help = {
  name: 'tag-sistemi',
  description: 'sayaç', 
  usage: 'sayaç'
};
