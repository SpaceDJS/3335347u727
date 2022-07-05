const { MessageActionRow, MessageButton, MessageEmbed, Client, Permissions } = require("discord.js");

const db = require('croxydb');

module.exports = {
	name: 'abone-rol',
	description: 'abonerol',
	execute: async(message, args, client) => {
        let abonerol = message.mentions.roles.first();
        if(!message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return message.channel.send(":x: Yeterli yetkiye sahip **değilsin**");
        if(!abonerol) return message.channel.send(":x: Bir abone rol belirtin.");
        await db.set(`abonerol_${message.guild.id}`, abonerol.id);
        message.channel.send(":white_check_mark: Başarılıyla **abone rol** ayarlandı. **Ayarlanan abone rol:** " + "<@&" + abonerol + ">");
	},
};