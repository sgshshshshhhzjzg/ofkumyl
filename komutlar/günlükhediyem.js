const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
let kod31 = "1";
  let kod = "123456789"
  for(var k = 0; k < 3; k++) {
    kod31 = (kod31 + kod.charAt(Math.floor(Math.random() * kod.length)));
  }
 
  db.add(`goldpuan_${message.author.id}`, kod31)
  message.channel.send(kod31)

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['günlükhediyem', "günlükhediye", "günlük-hediye"],
  permLevel: 0
};

module.exports.help = {
  name: 'günlük-hediyem',
  description: '',
  usage: ''
};