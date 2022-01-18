const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  db.set(`prefix_${message.guild.id}`, args[0])

  message.reply(`Changement de votre préfixe avec succès votre nouveau préfixe est : \`${args[0]}\` !`)
};

module.exports.help = {
  name: "set-prefix",
  description: "Permet de choisir un préfixe personnalisée pour le serveur !"
}