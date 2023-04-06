const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const express = require('express');
const app = express();

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

client.login(process.env.TOKEN);
const token = process.env.TOKEN;
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

