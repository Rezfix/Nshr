const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('Power Online')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`

**
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏سيرفر Power دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة. :hearts: **
https://discord.gg/uhDudK

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
