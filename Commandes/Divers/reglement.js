const { MessageEmbed , emoji, role, reaction} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
  .setTitle("__Règlement :__")
  .setDescription(`
Règlement <:Essentielrp:910231767141720184> EssentielRP
⚠️ Si le règlement n'est pas respecter, il peut engendrais des sanctions


📜 I Règles générales.

➜ Rester courtois, poli et sympathique avec les autres membres/staffs du serveur.
➜ La diffusion d'informations privées est strictement interdite.
➜ Le staff est en droit de modifier tout pseudo non-conforme, de sanctionner toute photo de profil, de supprimer tout message inapproprié, ou de sanctionné tout personnes qui ne respect pas le règlement. 


✏️II Salons écrits.

➜ Le spam et le flood sont interdit.
➜ Les commandes sont à effectuer dans le salon 🌴・commandes.
➜ Veilliez à ne pas ping plusieurs staffs en même temps. ( il est préférable de ping soit le nom (exemple @farming19mods.31) ou une personnes d'une équipes d'administration.)

🔊 III Salons Vocaux.

➜ Le spam auditif et les screamers audios sont strictement interdits.
➜ Les soundboards et modificateurs de voix sont non conseilliez sur ce serveur.
➜ La musique n'est autorisée que dans les channels appropriés.


🚨Informations supplémentaires

➜ Il est nécessaire que vous parliez uniquement Français sur le serveur, pour faciliter la modération.
➜ Le staff se réserve le droit de contourner le règlement si cela s'avère nécessaire. En cas d'abus, des sanctions seront tout de même appliquées.
➜ Si vous ne voyez pas de salons sur le serveur Discord, merci de patienter un léger moment, le bot va vous attribuer le grade de Viewer. Si, même après plusieurs heures, vous ne voyez encore rien, veuillez créer un ticket pour nous le signaler.

Merci de cliquer sur la réactions en dessous de ce message ✅ pour accéder au serveur !
`)
    .setColor('ffff00')
  
    message.delete()

    message.channel.send({ embeds: [embed] });


}

module.exports.help = {
  name: "reglement",
  description: "Commande règlement"
};