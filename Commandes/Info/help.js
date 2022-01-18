const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  const embed = new MessageEmbed()
    .setTitle("__MES COMMANDES__")
    .setDescription("Commandes de modération : e!modo \nCommandes d'économie : e!eco \nCommandes RP : e!rp \nSupport : e!support \nInvite : e!invite")
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "help",
  description: "voir les commandes du bot"
}