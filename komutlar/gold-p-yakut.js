const Discord = require('discord.js');
const db = require('quick.db')
const fs = require("fs")
const ms = require("ms")
exports.run = async (client, message,args) => {

   
  if (db.fetch(`goldpuan_${message.author.id}`) >= 10000) {
let kod31 = "";
  let kod = "123456789"
  for(var k = 0; k < 1; k++) {
    kod31 = (kod31 + kod.charAt(Math.floor(Math.random() * kod.length)));
  }
 
 db.add(`goldsure_{message.author.id}`, kod31)
 return message.channel.send(kod31)
    
  }
  
  return message.reply("Puanınız Yetersizdir.")
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pyakut', "yakutkasa", "pyakutkasa"],
  permLevel: 0
};

module.exports.help = {
  name: 'p-yakut',
  description: '',
  usage: ''
};