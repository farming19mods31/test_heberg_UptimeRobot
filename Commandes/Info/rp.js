const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  const embed = new MessageEmbed()
    .setTitle("__ROLEPLAY__")
    .setDescription("Action personnalisée : e!action <votre action>")
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "rp",
  description: "voir les commandes de roleplay"
}