const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Vous n'avez pas la permission requise pour effectuer cette commande")

  const message_to_say = args.slice(0).join(' ') || 'Aucun message fournie'

  message.delete()

	message.channel.send(message_to_say)
};

module.exports.help = {
  name: "say",
  description: "envoyer un message"
};