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
const db = require('quick.db');
const fs = require('fs');
/*require('discord-buttons')(client);
const { MessageMenuOption, MessageMenu } = require('discord-buttons');*/

client.commands = new Discord.Collection();

/*fs.readdir('./Commandes/', (error, files ) => {
    if(error) console.log(error);
    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) {
        console.log('Aucune commande a été trouvée dans le HANDLER !')
    }

    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/${f}`);
        console.log(`HANDLER: ${f} a été detecter !`)
        client.commands.set(props.help.name, props)
    })
});*/

const { readdirSync } = require('fs');

readdirSync("./Commandes/").forEach((dir) => {
    const commandFiles = readdirSync(`./Commandes/${dir}/`).filter((files) => files.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(`./Commandes/${dir}/${file}`);
        if (!command.help.name) throw new Error("Please provide a command name.");
        if (!command.help.description) throw new Error("Please provide a command description.")

        client.commands.set(command.help.name, command);

        console.log(`HANDLER: ${file} a été détecter !`);
    }
});

client.on('messageCreate', async message => {

    let seted_prefix = db.fetch(`prefix_${message.guild.id}`)
    if(seted_prefix === null) seted_prefix = prefix
    
    if(!message.content.startsWith(seted_prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(command.slice(seted_prefix.length))
    if(commandFile) commandFile.run(client, message, args)
    
    
    const user = message.mentions.members.first()

   if(user && user.id === "905067604924833862")
        message.channel.send(`Mon préfixe sur ce serveur est : \`${seted_prefix}\` et ma commande d'aide \`${seted_prefix}help\``)
    
});

client.on("ready", async (member, message) => {
    
/*const channelid = '901486315676237904';
    const status_embed = new Discord.MessageEmbed()
        .setDescription("Bot ***__EssentielRP test__*** en ligne !")
        .setColor('ffff00')

    const channel = client.channels.cache.get(channelid)

    channel.send({embeds : [status_embed]})*/
    
  console.log('Bot en ligne !')
  let statuses = [
      `${client.guilds.cache.size} serveur !`,
      `p!help`,
      `farming19mods.31#3037`
  ]
  
  setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, {type: 'WATCHING'})
  }, 5000)
});

client.on("guildMemberAdd", async (member, guild) => {
    
  //if (member.guild.id != '897868355946553415') return; //Do not run on other servers.

  const channel_bvn = '897868355946553418'; //welcome channel id
  const reglement_channel = '912402368405074071'; //rules channel id
  const roles_channel = '912416841136222280'; //roles channel id

  // const embed = new Discord.MessageEmbed()
  //   .setDescription(`Bienvenue ${member} sur **__${member.guild.name}__** \:tada: ! Pense à lire les  ${member.guild.channels.cache.get(reglement_channel)} et à prendre tes rôles ${member.guild.channels.cache.get(roles_channel)}`)
  //   .setColor('ffff00')
  //   .setThumbnail(member.displayAvatarURL())

    
  // const message_bvn = `Bienvenue ${member} sur **__${member.guild.name}__** \:tada: ! Pense à lire les  ${member.guild.channels.cache.get(reglement_channel)} et à prendre tes rôles ${member.guild.channels.cache.get(roles_channel)}`

   const channel = member.guild.channels.cache.get(channel_bvn)
  // channel.send(message_bvn)

  const Canvas = require('canvas');

  var canvas = Canvas.createCanvas(960, 540);

  ctx = canvas.getContext("2d");

  var background = await Canvas.loadImage("./ESSENTIELRP_banner.png");

  ctx.drawImage(background, 0, 0, 960, 540);

  ctx.font = "42px Impact";
  
  ctx.fillStyle = "#ffff00";
  ctx.textAlign = "center";
  ctx.fillText(member.user.tag.toUpperCase(), 512, 410);

  ctx.beginPath();
  ctx.arc(512, 166, 119, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
      format: "png",
      size: 1024
  }));

  ctx.drawImage(avatar, 393, 15, 238, 238)

  var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");

  channel.send({files: [attachment]})
});

client.on("guildMemberRemove", (member, guild) => {
    if (member.guild.id != '897868355946553415') return; //Do not run on other servers.

  const channel_depart = '897868355946553418'; //welcome channel id
    
  const message_depart = `Au revoir ${member.user.username} viens de quitter le serveur nous espérons le revoir bientôt \:sob: ! Nous sommes désormais  ${member.guild.memberCount} membres !`

  const channel = member.guild.channels.cache.get(channel_depart)
  channel.send(message_depart)
});

client.on("messageCreate", async message => {
  if (message.author.bot) {
      return;
  }

  if (message.channel.type === "dm") {
      const msg = message.content;

      const guild = client.guilds.cache.find(g => g.id === `${guildSupport}`);

      let categorie = guild.channels.cache.find(c => c.name === "Tickets" && c.type === "category");
      if (!categorie) categorie = await guild.channels.create("Tickets", {type: "category", position: 1});

      if (!guild.channels.cache.find(c => c.name === `${message.author.id}-mp`)) {
          guild.channels.create(`${message.author.id}-mp`, {
              permissionOverwrites: [
                  {
                      deny: "VIEW_CHANNEL",
                      id: guild.id
                  },
              ],
              parent: categorie.id,
              topic: `${message.author.id}`,
          })
          .then(ch => {
              const e = new Discord.MessageEmbed()
              .setTitle("Un membre demande de l'aide")
              .setColor("#2F3136")
              .setDescription(`Utilisateur: ${message.author.tag}\nID: ${message.author.id}`)
              .setFooter("Merci de cliquer sur 🔒 pour fermer le ticket")
              .addField("Sa question", msg)
              ch.send(e)
              .then(msg => {
                  msg.react("🔒")
              })
          })
      }
  
  else {
}      const channelTicket = guild.channels.cache.find(c => c.name === `${message.author.id}-mp`)
{

          const e = new Discord.MessageEmbed()
          .setTitle("Une nouvelle question")
          .setColor("#2F3136")
          .addField("Sa question", msg)

          channelTicket.send(e)
      }
  }
  else {
if (message.channel.name.endsWith("-mp")) {
          const msg = message.content;

          message.delete();

          const e1 = new Discord.MessageEmbed()
          .setTitle(message.author.tag)
          .setColor("#2F3136")
          .setDescription(msg)

          message.channel.send(e1)

          const user = await client.users.fetch(`${message.channel.topic}`);

          const e2 = new Discord.MessageEmbed()
          .setTitle("Réponse du staff")
          .setColor("#2F3136")
          .addField(message.author.tag, msg)

          await user.send(e2)
          .then(msg => {
              msg.react("📥")
          })
      }

client.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) {
      return;
  }
  const { message } = reaction
  
  if (reaction.emoji.name === "🎟️") {
      reaction.users.remove(user.id)
      message.guild.channels.create(`${user.tag}-ticket`, {
          permissionOverwrites: [
              {
                  channels: (1),
                  deny: "VIEW_CHANNEL",
                  id: message.guild.id
              },
              {
                  allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "ADD_REACTIONS"],
                  id: user.id
              }
          ]
      })
      .then(ch => {
          const e = new Discord.MessageEmbed()
          .setTitle(":tickets: Nouveau Ticket")
          .setColor("#2F3136")
          .setDescription(`User: ${user.tag}\nID: ${user.id}`)
          .setFooter("Pour fermer le ticket merci de cliquer sur la reaction ci dessous 🔒. Merci de ne pas fermer un ticket seul")

          ch.send(e)
          .then(msg => {
              msg.react("🔒")
          })
      })
  }
  else if (reaction.emoji.name === "🔒") {
 
      if (message.channel.name.endsWith("-ticket") || message.channel.name.endsWith("-mp")) {
          message.channel.delete()
      
      }
      else {
         return;
       }
  
      }
  
  })
  
}
});

client.login(token)