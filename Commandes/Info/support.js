const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setDescription(`[Rejoins Nous](https://discord.gg/xgVhYvU5hX)`)
    .setColor('ffff00')

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "support",
  description: "rejoindre le serveur support"
}