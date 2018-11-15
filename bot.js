const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('BOT Online')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`


** سيرفر ممتاز + ثقة  

5 invite = 12k credits
10 invite = 22k credits
20 invite = 44k credits**
https://discord.gg/UduFa7g

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
