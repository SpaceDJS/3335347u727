const { MessageActionRow, MessageButton, MessageEmbed, Client, Permissions } = require("discord.js");
const db = require('croxydb');


module.exports = {
	name: 'abone-yetkili',
	description: 'aboneyetkili',
	execute: async(message, args, client) => {
        let aboneyetkili = message.mentions.roles.first();
        if(!message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return message.channel.send(":x: Yeterli yetkiye sahip **değilsin**");
        if(!aboneyetkili) return message.channel.send(":x: Bir abone yetkili rol belirtin.");
        await db.set(`aboneyetkili_${message.guild.id}`, aboneyetkili.id);
        message.channel.send(":white_check_mark: Başarılıyla **abone yetkili** ayarlandı. Ayarlanan **abone yetkili:** " + "<@&" + aboneyetkili + ">");	},
};