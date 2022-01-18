const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");
const cash = new db.table("Liquide");

module.exports.run = async (client, message, args) => {

  let user = message.author ;

  if(isNaN(args[0])) return;
  await bank.subtract(`banque_${message.guild.id}_${user.id}`, args[0]);
  await cash.add(`liquide_${message.guild.id}_${user.id}`, args[0]);

  const embed = new MessageEmbed()
    .setDescription(`${user} viens de retirer ${args[0]}€ !`)
    .setColor('ffff00')
    .setFooter(user.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "with",
  description: "commande pour retirer de l'argent sur son compte bancaire ."
};