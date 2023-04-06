const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldMember, newMember) => {
  const status = newMember.activities.find(activity => activity.type === 'PLAYING' && activity.name === 'Rocket League');

  if (status) {
    console.log(`${newMember.user.tag} est maintenant en train de jouer à Rocket League.`);

    const member = newMember.member;
    const channel = member.guild.channels.cache.find(channel => channel.name === 'commands');
    if (!channel) return console.error('Le canal "commands" n\'a pas été trouvé sur le serveur.');

    channel.send(`/mute ${member.user.tag} 5m raison : Joue à Rocket League`);
  }
});

client.login("MTA5Mjg3NDE0NDQ3NzEwMjE2MA.Gdq0uq.9VwEUaIBrjvy6AccLqAdH19WlnWV1idQpds1S4");
