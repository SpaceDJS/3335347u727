const { MessageActionRow, MessageButton, MessageEmbed, Client } = require("discord.js");
const db = require('croxydb');


module.exports = {
	name: 'abone',
	description: 'deneme',
	execute: (message, args, client) => {

            let abonerol = db.fetch(`abonerol_${message.guild.id}`);
            if(!abonerol) return message.channel.send(":x: Abone rol ayarlı **değil!** **Abone sistemi** komutları için:** " + config.prefix + "abone yardım**")
            
            let abonelog = db.fetch(`abonelog_${message.guild.id}`);
            if(!abonelog) return message.channel.send(":x: Abone log ayarlı **değil!** **Abone sistemi** komutları için:** " + config.prefix + "abone yardım**")
            
            let aboneyetkili = db.fetch(`aboneyetkili_${message.guild.id}`);
            if(!aboneyetkili) return message.channel.send(":x: Abone yetkili ayarlı **değil!** **Abone sistemi** komutları için:** " + config.prefix + "abone yardım**")
           
            let abonesayi = db.fetch(`abonesayi_${message.author.id}`);
            if(!abonesayi) abonesayi = "0";
            if(!message.member.roles.cache.has(aboneyetkili)) return message.channel.send(":x: Yeterli yetkiye sahip **değilsin**");
           let abonekisi = message.mentions.members.first();
           if(!abonekisi) return message.channel.send(":x: Bir **üye** etiketle.");
           let embedd = new MessageEmbed()
           .setColor("GREEN")
           .setTitle(":white_check_mark: | Başarılı!")
           message.channel.send({ embeds: [embedd] });
           db.add(`abonesayi_${message.author.id}`, 1);
           abonekisi.roles.add(abonerol)

           let embeds = new MessageEmbed()
           .setColor("BLUE")
           .setTitle("Aramıza Yeni Bir Abone Katıldı!")
           .setDescription(`
           Abone verilen kişi: ${abonekisi}
           Abone veren yetkili: ${message.author}**(${abonesayi})**
           `)
           
           message.guild.channels.cache.get(abonelog).send({ embeds: [embeds] });
	},
};