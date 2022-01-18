const {MessageEmbed, emoji, role, reaction} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const sondage = args.slice(0).join(' ')
  
  const embed = new MessageEmbed()

    .setTitle("__SONDAGE__")

    .setDescription(sondage + "\n\n✅ oui | ❌ non")

    .setColor('ffff00')

    .setTimestamp()

    .setFooter(message.author.username)

  message.delete()

  let msg = await message.channel.send({embeds: [embed]})

  msg.react("✅")
  msg.react("❌")
};

module.exports.help = {

  name: "sondage",
  description: "créer un sondage"

};