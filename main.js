const { Client } = require('discord.js-selfbot-v13');
const { Constants: { APIErrors }} = require('discord.js');
const Cooldown = new Set();

const client = new Client({
  disableEveryone: true
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

mytimer = setInterval(async () => {
  var channel = client.channels.cache.get('851790745815220234');
  console.log('Bumped Here! #-#-#')
  channel.sendSlash('302050872383242240', 'bump')
}, getRandomIntInclusive(7200000, 9600000))
// 7200000, 9600000

client.on('message', message => {
  if (message.channel.id === '851790745815220234' && message.type === 'APPLICATION_COMMAND' && message.author.id === '302050872383242240' && message.interaction.commandName === 'bump') {
    console.log('Detected Bump! Resetting...')
    clearInterval(mytimer)
    mytimer = setInterval(async () => {
      var channel = client.channels.cache.get('851790745815220234');
      console.log('Bumped Here! #+#+#')
      channel.sendSlash('302050872383242240', 'bump')
    }, getRandomIntInclusive(7200000, 9600000))
  }
})

client.login('ODQ4OTIzNDU1OTIyODk2OTQ3.Gi7rCo.MU1V7BQvrPcHEkcOmZCQoCYm29QeZOpme_28Gw');
