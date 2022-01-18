const {MessageEmbed} = require('discord.js');
//const { command } = require('../../index.js');

module.exports.run = async (client, message, args, command) => {
  
  const embed = new MessageEmbed()
    .setTitle("__MES COMMANDES__")
    .addFields({
      name: "Economie", value: "\`" + command.help.name + "\`", inline: true
    }
    )
    .setColor('ffff00')
    .setTimestamp()
    .setFooter(message.author.username)

  message.delete()

  message.channel.send({embeds: [embed]})
};

module.exports.help = {
  name: "help1",
  description: "voir les commandes du bot"
}