const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');


exports.run = async (client, message, args) => {

  
    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(`Bunun için \`EMOJILERI YONET\` yetkisine sahip olman gerek.`).then(m => m.delete(5000).catch());
    message.delete().catch()
const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(client.emojis.get("647733808447225866") + "| Doğru Kullanım: `!yükle emoji-linki emoji-adı`")
  if (!args[0]) return message.channel.send(embed)
    if (!args[1]) return message.channel.send(embed)
 if(message.guild.emojis.filter(e => e.animated).size == 50){
   const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(client.emojis.get("647733808447225866") + "| Hareketli emoji eklemek için yeriniz kalmamış!")
         return message.channel.send(embed);
         }else
         if(message.guild.emojis.filter(e => !e.animated).size == 50){
           const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(client.emojis.get("647733808447225866") + "| Emoji eklemek için yeriniz kalmamış!")
         return message.channel.send(embed);
         
         }
         if(message.guild.emojis.filter(e => e.name.toLowerCase() === args[1].toLowerCase()).size > 0){
           const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(client.emojis.get("647733808447225866") + `${args[1]} adına sahip başka bir emoji var!`) 
           return message.channel.send(embed)
        }
         message.guild.createEmoji(args[0], args.slice(1).join(" ")).then(e => {
            const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(client.emojis.get("647733787769307136") + "| " + "**" + args[1] + "** adlı emoji yüklendi")
         return message.channel.send(embed);
         message.channel.send(embed).catch(error => {
             let e = new Discord.RichEmbed()
             .setColor("BLUE")
             .setTitle(`Hata.`)
             .setDescription(`
             **Hata Sebebleri Şunlardan Kaynaklı Olabilir;**
             1) Emoji boyutu 128 kb nin üstünde olabilir..
             2) Geçersiz link girmiş olabilirsiniz.
             `)
             return message.channel.send(e)
         });
    })  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emojiyükle", "emoji-yükle"],
    permLevel: 0
    
  };
  
  exports.help = {
    name: 'emogeyükle',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar'
  };
