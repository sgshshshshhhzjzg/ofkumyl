const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  
  args.amount = Math.abs(args.amount);
  let messages = await message.channel.fetchMessages({
    limit: args.amount && args.amount < 100 ? args.amount : 100
  });

   if (args.bots) {
    messages = messages.filter(message => message.author.bot);
  }
  if (args.nonpinned) {
    messages = messages.filter(message => !message.pinned);
  }
  if (args.time) {
    let requiredTimestamp = message.createdTimestamp - (args.time * 60 * 1000);
    messages = messages.filter(message => message.createdTimestamp >= requiredTimestamp);
  }


  let clearedMessages = await message.channel.bulkDelete(messages, true);
  
  if (!clearedMessages.size) {
    return message.channel.send("En Az `1 - 400` Arasında Bir Tam Sayı Değeri Girmelisiniz.")
  }


  message.channel.send({`I've cleared ${clearedMessages.size}


  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};