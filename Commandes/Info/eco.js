const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  const embed = new MessageEmbed()
    .setTitle("__ÉCONOMIE__")
    .setDescription("Voir son compte en banque : e!money \n\nRetirer de l'argent : e!with <montant> \n\nDéposer de l'argent : e!dep <montant> \n\nAjouter de l'argent à un membre : e!add-money <membre> <montant> \n\nRetirer de l'argent à un membre : e!remove-money <membre> <montant> \n\nRéinitialiser l'argent d'un membre : e!reset-money <membre> \n\nAjouter de l'argent sale à un membre : e!add-sale <membre> <montant> \n\nRetirer de l'argent sale à un membre : e!remove-sale <membre> <montant>")
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "eco",
  description: "voir les commandes d'économie"
}