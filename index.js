const Discord = require('discord.js');
const {Intents} = require('discord.js');
const client = new Discord.Client({intents : [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_BANS,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_INTEGRATIONS,
  Intents.FLAGS.GUILD_WEBHOOKS,
  Intents.FLAGS.GUILD_INVITES,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING
]});
const {token} = require('./token.json');
const {prefix} = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();

const { readdirSync } = require('fs');

readdirSync("./Commandes/").forEach((dir) => {
    const commandFiles = readdirSync(`./Commandes/${dir}/`).filter((files) => files.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(`./Commandes/${dir}/${file}`);
        if (!command.help.name) throw new Error("Please provide a command name.");
        //if (!command.help.description) throw new Error("Please provide a command description.")

        client.commands.set(command.help.name, command);

        console.log(`HANDLER: ${file} a été détecter !`);
    }
});

client.on('messageCreate', async message => {
    
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(command.slice(prefix.length))
    if(commandFile) commandFile.run(client, message, args)
    
    const user = message.mentions.members.first()

   if(user && user.id === "901732177602031616")
   	message.reply("Mon préfixe est : `e!` et ma commande d'aide `e!help`")
});

client.on("ready", async (member, message) => {
    
const channelid = '910556530867310623';
    const status_embed = new Discord.MessageEmbed()
        .setDescription("Bot ***__EssentielRP__*** en ligne !")
        .setColor('ffff00')

    const channel = client.channels.cache.get(channelid)

    channel.send({embeds : [status_embed]})
    
  console.log('Bot en ligne !')
  let statuses = [
      `${client.guilds.cache.size} serveur !`,
      `e!help`,
      `SILUX#0007`,
      `Bot en développement`,
      `${client.users.cache.size} membres`
  ]
  
  setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, {type: 'WATCHING'})
  }, 5000)
});

client.on("guildMemberAdd", (member, guild) => {


  if (member.guild.id != '898590483918495754') return; //Do not run on other servers.
  const channel_bvn = '901825306648784916'; //welcome channel id
  const reglement_channel = '910229174738911273'; //rules channel id
  const roles_channel = '910229405022969886'; //roles channel id

       const embed_bvn = new Discord.MessageEmbed()
		.setDescription(`Bienvenue ${member} sur **__${member.guild.name}__** \:tada: ! Pense à lire les  ${member.guild.channels.cache.get(reglement_channel)} et à prendre tes rôles ${member.guild.channels.cache.get(roles_channel)}`)
		.setColor('ffff00')
		.setFooter(member.guild.memberCount + " membres |")
		.setTimestamp()
		.setThumbnail(member.displayAvatarURL())
 const embed_bvn_mp = new Discord.MessageEmbed()
 	.setDescription(`** > Bienvenue ${member} sur le serveur __${member.guild.name}__, grâce à toi nous sommes ${member.guild.memberCount}, pense à prendre tes ${member.guild.channels.cache.get(roles_channel)} et à lire le ${member.guild.channels.cache.get(reglement_channel)} ! \n\n\:earth_americas:Liens Utiles \n[Invite moi](https://discord.com/oauth2/authorize?client_id=901732177602031616&scope=bot&permissions=805314622) \n[Support](https://discord.gg/xgVhYvU5hX) \n[Partenaire](https://discord.gg/U7xCMZhWbB)**`)
 	.setTimestamp()
 	.setColor('ffff00')
 member.send({embeds: [embed_bvn_mp]})

  const channel = member.guild.channels.cache.get(channel_bvn)
  channel.send({embeds: [embed_bvn]})
  //console.log(embed_bvn)

 
});

client.on("guildMemberRemove", (member, guild) => {
    if (member.guild.id != '898590483918495754') return; //Do not run on other servers.

  const channel_depart = '901825306648784916'; //welcome channel id
    
  const message_depart = `Au revoir ${member.user.username} viens de quitter le serveur nous espérons le revoir bientôt \:sob: ! Nous sommes désormais  ${member.guild.memberCount} membres !`

  const channel = member.guild.channels.cache.get(channel_depart)
  channel.send(message_depart)
});

client.login(process.env.token)
