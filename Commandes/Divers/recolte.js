const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const drogue = new db.table("Drogue");

module.exports.run = async (client, message, args) => {
    
    await drogue.add(`Drogue_${message.guild.id}_${message.author.id}`, 1)
    
    message.reply("Tu viens de récolter une portion de drogue !")
}

module.exports.help = {
  name: "recolte",
  description: "test"
}