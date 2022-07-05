const { MessageActionRow, MessageButton, MessageEmbed, Client, Permissions } = require("discord.js");

const db = require('croxydb');

module.exports = {
	name: 'yardım',
	description: 'abonerol',
	execute: async(message, args, client) => {
        let embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("SpaceCodes")
        .setDescription(`
        \`!abone-rol @rol\` Abone **rolü **ayarlarsınız.
        \`!abone-log #log\` Abone **logu **ayarlarsınız.
        \`!abone-yetkili @rol\` Abone **yetkilisini** ayarlarsınız.
        `)
        .setFooter("youtube.com/spacecodes")
        message.channel.send({ embeds: [embed] });
	},
};