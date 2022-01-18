
module.exports.run = async (client, message, args) => {

  const channel_name = args[0];
  const categorie_id = args[1]

  message.delete()
  await message.guild.channels.create(channel_name, {
    type: 'text',
    parent: categorie_id,
  }).then(e => {
  e.send({content: `${message.author} a créer le salon ${e}`})})
  
};

module.exports.help = {
  name: "create-channel",
  description: "créer un channel"
};