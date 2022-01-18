const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.members.first();

  if(isNaN(args[2])) return;
  await bank.subtract(`banque_${message.guild.id}_${message.author.id}`, args[2])
  await bank.add(`banque_${message.guild.id}_${user.id}`, args[2]);

  const embed = new MessageEmbed()
    .setDescription(`${message.author} vient de payer ${args[2]}€ à ${user} !`)
    .setColor('ffff00')
    .setFooter(message.author.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "pay",
  description: "commande pour payer un membre ."
}