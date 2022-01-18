const Discord = require('discord.js')
const db = require("quick.db")
 
module.exports = {
    run: async (client, message, args, member) => {
        //if(!member.guild.id === "898590483918495754")return message.reply("Vous n'êtes pas dans le serveur support");
        const channel = message.mentions.channels.first() || message.channel
        
        if (!message.member.permissions.has('MANAGE_MESSAGES') && (`ticket_${message.guild.id}`, message.author.id).author !== message.author.id) return message.channel.send('**Vous n\'avez pas la permission de fermer ce ticket.**')      
        db.delete(`ticket_${message.guild.id}`, message.author.id && channel.id)
        await message.channel.send(`**Le salon ${channel.name} a été fermé de force !**`)
        channel.delete()

        
    },
}
module.exports.help = {
    name: 'force-close',  
    category: "Ticket",
    description: "Permet de fermer un ticket de force.",
    usage: "force-close",
    guildOnly: true
}