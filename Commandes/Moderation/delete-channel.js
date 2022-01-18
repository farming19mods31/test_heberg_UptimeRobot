module.exports.run = async (client, message, args) => {

  const channel = args[0];

  await message.guild.channels.delete(channel)

  message.author.send(`${message.author} vous venez de supprimer le salon ${channel} !`)
  
};

module.exports.help = {
  name: "delete-channel",
  description: "supprimer un channel"
};