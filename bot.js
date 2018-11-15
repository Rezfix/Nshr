const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('BOT IS Online')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`


**
السلام عليكم :slight_smile: 

سيرفر بيع وشراء ثقة  :link: 
سيرفر قيف اوايات يوميه 
وفيه  تصويت على 
100K Credit ProBot

رابط السيرفر** https://discord.gg/4kt8cKq

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
