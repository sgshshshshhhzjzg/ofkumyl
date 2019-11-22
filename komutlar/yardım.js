const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setAuthor("MC-AT", client.user.avatarURL)

 .setDescription(`
[MC-AT BOT](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!küfüraç\`
Botu davet etmek için: \`!davet\`
`)
 .addField("!komutlar (13)", `
herkesin kullanabileceği standart komutlar;
\`botbilgi\`,\`davet\`,\`oyver\`,\`gold\`,\`webpanel\`,\`sunucu-pp\`,\`profil\`,\`kredim\`,\`p-market\`,\`p-menü\`,\`puanım\`,\`ayarlar\`
`)
 .addField("!eğlence (9)", `
herkesin kullanabileceği eğlence komutları;
\`kralol\`,\`maymunol\`,\`yılanol\`,\`adamol\`,\`kediol\`,\`aşk\`,\`token\`,\`tokat\`
`)
 .setFooter("© Mcadventuretime.com", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
