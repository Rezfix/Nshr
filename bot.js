const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('Nshr Start')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`

**
:blue_heart:  ألنجوُم تثبٌت ولكن ألٌاراضي لآ تثبتً
**
https://discord.gg/au6eCz2

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
