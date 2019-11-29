const Discord = require('discord.js');
const db = require('quick.db')
const fs = require("fs")
const ms = require("ms")
exports.run = async (client, message,args) => {

   
  if (db.fetch(`goldpuan_${message.author.id}`) >= 45000) {
let kod31 = "";
  kod31 = (kod31 + Math.floor(Math.random() * 46));
  
 
 db.add(`goldsure_{message.author.id}`, kod31)
 return message.channel.send(kod31)
    
  }
  
  return message.reply("Puanınız Yetersizdir.")
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pgarnet', "garnetkasa", "pgarnetkasa"],
  permLevel: 0
};

module.exports.help = {
  name: 'p-garnet',
  description: '',
  usage: ''
};