const Discord = require('discord.js')
const db = require("quick.db")
 
module.exports = {
    run: async (client, message, args, member) => {
        //if(!member.guild.id === "898590483918495754")return message.reply("Vous n'êtes pas dans le serveur support");
        const channel = message.mentions.channels.first() || message.channel


        if (!db.get(`ticket_${message.guild.id}`, message.author.id && channel.id)) return message.channel.send('**Ce salon n\'est pas un ticket.**')
        if (!message.member.permissions.has('MANAGE_MESSAGES') && (`ticket_${message.guild.id}`, message.author.id).author !== message.author.id) return message.channel.send('**Vous n\'avez pas la permission de fermer ce ticket.**')
        db.delete(`ticket_${message.guild.id}`, message.author.id && channel.id)
        await message.channel.send(`**Le ticket ${channel.name} a été fermé !**`)
        channel.delete()

        
    },
}

module.exports.help = {
    name: 'close',  
    category: "Ticket",
    description: "Permet de fermer un ticket.",
    usage: "close",
    guildOnly: true
}