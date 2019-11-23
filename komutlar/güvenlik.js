const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.RichEmbed()
     .setAuthor("MC-EŞEK",client.user.avatarURL)
     .setTitle('MC-EŞEK BOT')
     .setURL('https://discord.gg/bWjWHK')
     .setColor('BLUE')
     .addField('Sunucu koruma sistemlerinin bulunduğu bölüm;','!koruma-log #logkanal')
     .addField(' ```Koruma kayıtlarının gönderileceği kanalı belirler.``` ','!koruma-banlimit <sayı>')
     .addField('!koruma-kanallimit <sayı>','```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla kanal silerse üye sunucudan atılır.```')
     .addField('!koruma-rollimit <sayı>','```30 dakika içerisinde bir üye tarafından belirtilen sayıdan fazla rol silinirse silen üye sunucudan atılır.```') 
     .addField('!koruma-banlimit-sistemi <aç/kapat>','Ban koruma özelliğini açar kapatır.')
     .addField('!koruma-kanal-sistemi <aç/kapat>','Kanal koruma özelliğini açar kapatır.')
     .addField('!koruma-rollimit-sistemi <aç/kapat>','Rol koruma özelliğini açar kapatır.') 
     .addField('!koruma-sistemi-sil','Sunucunuzun verilerini veritabanından siler. (ayarları baştan yapmanız gerekir)')
     .addField('!spambotkorumasi','Spambot korumasını gösterir.')
     .addField('!güvenlikseviyesi','Sunucuya katılan üyelerin güvenilir olup olmadığını gösterir.')
     .setFooter('© STARK-ZEHİR',client.user.avatarURL)
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlikseviyesi'],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik-seviyesi',
  description: 'Bratva STARK',
  usage: 'STARKtan hediye :)'
};