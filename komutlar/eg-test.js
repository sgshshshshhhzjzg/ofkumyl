const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://cdn.discordapp.com/attachments/649581228835602432/650052923728068628/unknown.png`, async(err, image) => {
    await image.resize(794, 598)
        var font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        await image.print(font, 272, 349, "3 GÜN");
    Jimp.read(user.avatarURL, async(err, avatar) => {
        await avatar.resize(275, 275) 
      await image.composite(avatar, 269, 39).write(`./resimler/kralol/kralol-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/kralol/kralol-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['topaz'], 
  permLevel: 0
};

exports.help = {
  name: 'top-az',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};