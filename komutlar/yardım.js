const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setAuthor("MC-AT", client.user.avatarURL)
 .setTitle(`[MC-AT BOT](https://discordapp.com/invite/hqA9tNF)`)
 .setDescription(`
**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!küfüraç\`
Botu davet etmek için: \`!davet\`
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
