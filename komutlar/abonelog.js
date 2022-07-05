const { MessageActionRow, MessageButton, MessageEmbed, Client, Permissions } = require("discord.js");
const db = require('croxydb');

module.exports = {
	name: 'abone-log',
	description: 'abonelog',
	execute: async(message, args, client) => {
        let abonelog = message.mentions.channels.first();
        if(!message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return message.channel.send(":x: Yeterli yetkiye sahip **değilsin**");
        if(!abonelog) return message.channel.send(":x: Bir abone log belirtin.");
        await db.set(`abonelog_${message.guild.id}`, abonelog.id);
        message.channel.send(":white_check_mark: Başarılıyla **abone log** ayarlandı. Ayarlanan **abone log**: " + "<#" +  abonelog + ">");
	},
};