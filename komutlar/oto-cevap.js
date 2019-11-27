const Discord = require('discord.js'); 
const db = require('quick.db'); 

exports.run = async (client, message, args) => { 
  
  
  var x = "İsimli Oto Cevap Başarıyla Oluşturuldu!"
  var y = `${args[0]} yazıldığında, {cevap} olarak cevap verecektir!`
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın!`); 
    
  if (!args[0]) return message.reply("Lütfen cevap verilecek eylemin adını yazın!")
  if (!args.slice(1).join(' ')) return message.reply("Lütfen bişey yazıldığında verilecek cevabı yazın!")
    
  
    
  let obj = JSON.parse('{"'+args[0]+'":"'+args.slice(1).join(' ')+'"}')
  
  var i = db.push(`komut_${message.guild.id}`, obj)
  

    var embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor("BLUE")
   .setTitle(`${args[0]} ${x}`) 
   .setDescription(y.replace("{cevap}", args.slice(1).join(' '))) 
    message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otocevapekle',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};