const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const drogue = new db.table("Drogue");

module.exports.run = async (client, message, args) => {
    
    const user = message.mentions.members.first() || message.author;
    
    let inv_drogue = drogue.fetch(`Drogue_${message.guild.id}_${user.id}`)
    if(inv_drogue === null) inv_drogue = 0
    
    const inv_embed = new MessageEmbed()
    	.setTitle("__INVENTAIRE :__")
    	.setDescription(`Drogue : ${inv_drogue} items`)

    message.channel.send({embeds: [inv_embed]})
}

module.exports.help = {
    name: "inv",
    description: "Permet à l'utilisateur de voir son inventaire !"
}