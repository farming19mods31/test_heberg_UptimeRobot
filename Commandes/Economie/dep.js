const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");
const cash = new db.table("Liquide");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.author ;

  if(isNaN(args[0])) return;
  await bank.add(`banque_${message.guild.id}_${user.id}`, args[0]);
  await cash.subtract(`liquide_${message.guild.id}_${user.id}`, args[0]);

  const embed = new MessageEmbed()
    .setDescription(`${user} viens de déposer ${args[0]}€ !`)
    .setColor('ffff00')
    .setFooter(user.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "dep",
  description: "Commande pour déposer de l'argent en banque"
}