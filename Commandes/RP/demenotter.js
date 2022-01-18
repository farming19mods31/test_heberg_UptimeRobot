const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  const user = message.mentions.members.first();

  const embed = new MessageEmbed()
    .setDescription(`${message.author} vient de menotter ${user} !`)
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})

};

module.exports.help = {
    name: "demenotter",
    description: "démenotter un membre"
}
