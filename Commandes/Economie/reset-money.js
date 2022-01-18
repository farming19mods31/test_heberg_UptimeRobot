const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");
const cash = new db.table("Liquide");
const sale = new db.table("Sale");

module.exports.run = async (client, message, args) => {

	let user = message.mentions.members.first() || message.author;

	let banque = bank.delete(`banque_${message.guild.id}_${user.id}`)

	let liquide = cash.delete(`liquide_${message.guild.id}_${user.id}`)

	let Sale = sale.delete(`Sale_${message.guild.id}_${user.id}`)

	const embed = new MessageEmbed()
		.setDescription(`${message.author} a réinitialisé l'argent de ${user}`)
		.setColor('ffff00')
		.setFooter(message.author.username)
		.setTimestamp()

	message.delete()

	message.channel.send({embeds : [embed]})
};

module.exports.help = {
  name: "reset-money",
	description: "commande pour réinitialiser un compte bancaire !"
};