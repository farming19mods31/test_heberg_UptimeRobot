const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const sale = new db.table("Sale");

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permission requise pour effectuer cette action !");

  let user = message.mentions.members.first();

  if(isNaN(args[2])) return;
  await sale.subtract(`Sale_${message.guild.id}_${user.id}`, args[2]);

  const embed = new MessageEmbed()
    .setDescription(`${message.author} vient de donnner ${args[2]}€ d'argent sale à ${user} !`)
    .setColor('ffff00')
    .setFooter(message.author.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "remove-sale",
  description: "commande pour enlever de l'argent sale à un membre ."
}