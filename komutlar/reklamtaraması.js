const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, msg, args) => {
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord.gg|discord.me|discordapp.com|discord.io|discord.tk)/g.test(member.user.presence.game.name));

            msg.channel.send(members.map(member => `${member}`).join("\n") || "Kimse oynuyor yerine reklam koymamış.")

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-taraması'],
    permLevel: 0,
}

exports.help = {
    name: 'reklamtaraması',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}
