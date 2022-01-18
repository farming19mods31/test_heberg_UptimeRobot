const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    /*const message_bouton = new MessageActionRow()
    	.addComponents(
    		new MessageButton()
				.setCustomId('primary')
				.setLabel('Primary')
				.setStyle('PRIMARY'),
       	)*/
    
    const message_bouton = new MessageButton()
		.setCustomId('primary')
		.setLabel('Primary')
		.setStyle('PRIMARY')
		//.setEmoji('123456789012345678');

  message.delete()
  
  message.channel.send("Salut")
    
  message.channel.send({components: [message_bouton]})
}

module.exports.help = {
  name: "test",
	description: "Commande de test !"
}