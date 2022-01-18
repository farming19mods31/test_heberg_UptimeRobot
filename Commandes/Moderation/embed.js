const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Vous n'avez pas la permission requise pour effectuer cette commande")

  const message_to_say = args.slice(0).join(' ') || 'Aucun message fournie'

  const embed = new MessageEmbed()
    .setColor('ffff00')
    .setDescription(message_to_say)
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

	message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "embed",
  description: "envoyer un message en embed"
};