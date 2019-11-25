const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
	message.guild.createChannel()
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["geçicikanaloşustur"],
	permLevel: '4',
	kategori: 'yetkili'
}

exports.help = {
	name: 'geçici-kanal-oluştur',
	description: '',
	usage: ''
}