const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
 const banl = db.fetch(`banlimit_${message.guild.id}`);
  const rol = db.fetch(`yasaklamaRol_${message.guild.id}`);
  const log = db.fetch(`yasaklamaLog_${message.guild.id}`);
  if (!log) return;
  if (!rol) return;
  if (!banl) return;
  
  if (message.member.roles.has(rol)) {
    
  } 
    return message.reply("Ban Atabilmek İçin Sunucu Sahibinin Ayarladığı Role Sahip Olmalısınız.")
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};