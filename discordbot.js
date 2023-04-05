const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const Discord = require('discord.js');
const client = new Discord.Client();
const serverId = '1039582486402957322'; // Remplacez par l'ID de votre serveur

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldMember, newMember) => {
  const status = newMember.activities.find(activity => activity.type === 'PLAYING' && activity.name === 'Rocket League');

  if (status) {
    console.log(`${newMember.user.tag} est maintenant en train de jouer à Rocket League.`);

    const member = newMember.member;
    const guild = client.guilds.cache.get(serverId); // Récupère l'objet de votre serveur Discord
    const channel = guild.channels.cache.find(channel => channel.name === 'commands');
    if (!channel) return console.error('Le canal "commands" n\'a pas été trouvé sur le serveur.');

    channel.send(`/mute ${member.user.tag} 5m raison : Joue à Rocket League`);
  }
});

client.login('MTA5Mjg3NDE0NDQ3NzEwMjE2MA.GdCq1h.n8wm2WQtRj0ESNZkPecUrrqIwSo9qcypulQszg');
