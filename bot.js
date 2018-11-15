const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('Im Online')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`


** 
ألسلام عليكم كيف حالك .. 

احنا مسوين قيف اواي بسيرفرنا 
على 50 الف كريدت برو بوت
ف اتمنى تدخل و تشارك وشكرا.. <3**
https://discord.gg/4kt8cKq

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
