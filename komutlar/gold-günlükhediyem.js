const Discord = require('discord.js');
const db = require('quick.db')
const fs = require("fs")
const ms = require("ms")
exports.run = async (client, message,args) => {
      let kullanildii = JSON.parse(fs.readFileSync('./ghediye.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {

let kod31 = "1";
  let kod = "123456789"
  for(var k = 0; k < 3; k++) {
    kod31 = (kod31 + kod.charAt(Math.floor(Math.random() * kod.length)));
  }
 
  db.add(`goldpuan_${message.author.id}`, kod31)
  message.channel.send(kod31)
    
  fs.writeFile('./ghediye.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./ghediye.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('24h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.reply("Bu özelliği `(24)` Saat içinde yalnızca 1 kez kullanabilirsiniz")
  }
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