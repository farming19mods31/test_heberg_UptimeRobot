module.exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(`${message.author} vous n'avez pas la permission requise pour effectuer la commande !`);

  const member = message.mentions.members.first() ;

  if(!member) return message.channel.send(`${message.author} veuillez mentionner un utilisateur !`)

  const reason = args.slice(1).join(' ') || 'Aucun raison fournie'
  
  await member.ban({reason})

  message.delete()

  message.channel.send(`${member.username} a été banni par ${message.author} pour la raison suivante : \n${reason}`)
};

module.exports.help = {
  name: "ban",
  description: "bannir un membre"
};