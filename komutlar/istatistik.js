const Discord = require('discord.js');
const moment = require('moment')
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  
  let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
    }
      var ban = message.guild.fetchBans();
 let guild = message.guild;


   const embed = new Discord.RichEmbed()
   .setColor("15f153")
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setThumbnail(message.guild.iconURL)
   .addField('İsim kısaltması:', message.guild.nameAcronym, true)
   .addField('Sunucu ID:', message.guild.id, true)  
   .addField('Ana kanal:', message.guild.defaultChannel,true)
   .addField('AFK kanalı:', message.guild.afkChannel, true)
   .addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`,true)
   .addField('Güvenlik Seviyesi:', message.guild.verificationLevel, true)
   .addField('Ban Sayısı:',ban.size,false)
   .addField('Kanal Sayısı: ['+message.guild.channels.size+']', `:sound: ${message.guild.channels.filter(chan => chan.type === 'voice').size} :speech_balloon: ${message.guild.channels.filter(chan => chan.type === 'text').size}`, true)
   .addField('Üye Bilgisi : ['+message.guild.memberCount+']', `${message.guild.members.filter( member => member.user.bot).size} bot | ${message.guild.memberCount} üye`, false)
   .addField('Sunucu Bölgesi:', message.guild.region, true) 
   .addField('Rol sayısı',message.guild.roles.size,true)
   .addField('Sahibi:', message.guild.owner+` (${message.guild.ownerID})`, false)
   .addField('Oluşturulma Tarihi', `${günler[moment(message.guild.createdAt).format('DD')]}, ${aylar[moment(message.guild.createdAt).format('MM')]}  ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`,false)
   .addField('Oluşturma tarihi:', message.guild.createdAt, false)
   .addField(`Üye Bilgisi : [${message.guild.memberCount}]`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
  

 
   const roller = new Discord.RichEmbed()
   .setColor('15f153')
   .setDescription(`Tüm Roller: `+message.guild.roles.filter(r => r.name).map(r => r).join(', '))
   
   const emojiler = new Discord.RichEmbed()
   .setColor('15f153')
   .setDescription(`Tüm Emojiler:`+ message.guild.emojis.map(e=>e.toString()).join(" "))
   message.channel.send({embed});
   message.channel.send(roller);
   message.channel.send(emojiler)
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'test',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'bilgi'
 };