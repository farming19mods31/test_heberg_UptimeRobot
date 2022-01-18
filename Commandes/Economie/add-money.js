const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permission requise pour effectuer cette action !");

  let user = message.mentions.members.first();

  if(isNaN(args[2])) return;
  await bank.add(`banque_${message.guild.id}_${user.id}`, args[2]);

  const embed = new MessageEmbed()
    .setDescription(`${message.author} vient de donnner ${args[2]}€ à ${user} !`)
    .setColor('ffff00')
    .setFooter(message.author.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "add-money",
  description: "Commande pour ajouter de l'argent à un membre ."
}