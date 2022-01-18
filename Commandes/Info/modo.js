const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  const embed = new MessageEmbed()
    .setTitle("__MODERATION__")
    .setDescription("Bannir un membre : e!ban <membre> <raison>\n\nExpulser un membre : e!kick <membre> <raison> \n\nSupprimer des messages : e!clear <nombre de message> \n\nPour envoyer un message via le bot : e!say <message> \n\nPour envoyer un embed : e!embed <message> \n\nPour créer un sondage : e!sondage <message>")
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "modo",
  description: "voir les commandes de modération"
}