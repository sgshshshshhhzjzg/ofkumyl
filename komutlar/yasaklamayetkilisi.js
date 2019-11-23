const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(yashinu, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komut sunucu sahibine özeldir!')
  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    return message.channel.send(`
:hayirr: Bancı Rolünü Ayarlamak İçin, Bancı Verilecek Rolü Etiketlemelisiniz
`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yasaklamayetklisi',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};