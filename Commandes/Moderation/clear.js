module.exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has('DELETE_MESSAGES')) return message.reply("Vous n'avez pas la permission requise pour effectuer cette commande !")
  
  const amount = args.join(" ");

  if(!amount) return message.channel.send("Veuillez indiquer un nom btre de message à supprimer !");

  if(amount > 100) return message.channel.send("Vous ne pouvez suuprimer que 100 messsages à la fois !")

  if( amount < 1) return message.channel.send("Vous devez ssupprimer au moins 1 message !")

  await message.channel.messages.fetch({limit: amount}).then(messages => {
    message.channel.bulkDelete(messages
  )});

  message.channel.send(`Les messages ont bien été supprimés !`)
};

module.exports.help = {
  name: "clear",
  description: "supprimer des messages"
}