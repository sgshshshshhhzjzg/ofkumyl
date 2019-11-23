const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komut sunucu sahibine özeldir!')
  const kanal = message.mentions.channels.first()
  
  if (!kanal)  {
    return message.channel.send(`
${client.emojis.get("647760202875142154")} Bancı kanalını Ayarlamak İçin, Bancı Verilecek kanalü Etiketlemelisiniz
Örnek: \`!yasaklama-yetkilisi @bansorumlusu\`

`)
  }
  message.channel.send(`${client.emojis.get("647746144155467786")} ${kanal} kanalü Olan Her Kullanıcı İnsanları !ban Komutu İle Banlayabilicektir kanalü Verirken Dikkatli Olunuz.`)
  db.set(`yasaklamaKanal_${message.guild.id}`, kanal.id)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yasaklama-kanal-ayarla',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};