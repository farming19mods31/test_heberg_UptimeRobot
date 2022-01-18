const Discord = require('discord.js')
const db = require("quick.db")
 
module.exports = {
    run: async (client, message, args, member) => {
        //if(!member.guild.id === "898590483918495754")return message.reply("Vous n'êtes pas dans le serveur support");
        if (message.guild){
         if (db.fetch(`ticket_${message.guild.id}`, message.author.id))
         return message.channel.send(`**Vous avez déjà un ticket d'ouvert !**`).then(sent => sent.delete({timeout:3e3}))
        //
        const channel = await message.guild.channels.create(`ticket ${message.author.username}`, {
            type: 'text',
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, 
            ]
        })
        db.set(`ticket_${message.guild.id}`, message.author.id)

        const embed1 = new Discord.MessageEmbed()
            .setDescription(`**Bonjour ${message.member}, bienvenue dans votre ticket. Nous allons nous occuper de vous.**`)
        
        channel.send({embeds: [embed1]})
            
            message.channel.send(`**Votre ticket ${channel} a été crée avec succès !**`).then(sent => sent.delete({timeout:3e3}))
        message.member.send(`**Votre ticket ${channel.name} a bien été crée !**`)
        //
        

    }},
}
module.exports.help = {
    name: 'ticket',  
    category: "Ticket",
    description: "Permet de crée un ticket.",
    usage: "ticket",
    guildOnly: true
}