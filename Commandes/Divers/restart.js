const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  await require('child_process').execFile("pm2 restart")

  await message.reply("Le bot à redémarré avec succès !")
 
}

module.exports.help = {
  name: "restart",
  description: "test"
}