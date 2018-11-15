const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('BOT Online')
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

iR25RR.on('message', message => {
    if (message.content.split(' ')[0] == '.') {
        if (message.guild === null) {
            return;
        }
        console.log("used");




        message.guild.members.forEach(member => {
            setInterval(function () {


   member.sendMessage(` 
**
السلام عليكم :slight_smile: 

سيرفر بيع وشراء ثقة  :link: 
سيرفر قيف اوايات يوميه 
وفيه  تصويت على 
100K Credit ProBot

رابط السيرفر** https://discord.gg/4kt8cKq

   
   `);
            })
        }, 500);
    }

});

iR25RR.login(process.env.BOT_TOKEN);
