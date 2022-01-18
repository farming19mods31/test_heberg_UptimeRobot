const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  const action = args.slice(0).join(' ') || 'Aucun action fournie'

  const embed = new MessageEmbed()
    .setTitle("Action personnalisée :")
    .setDescription(`${message.author} réalise l'action suivante : \n\n${action}`)
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "action",
  description: "créer une action personnalisable"
};