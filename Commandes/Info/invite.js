const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setDescription(`[Invite moi](https://discord.com/oauth2/authorize?client_id=901732177602031616&scope=bot&permissions=805314622)`)
    .setColor('ffff00')

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "invite",
  description: "inviter le bot"
}