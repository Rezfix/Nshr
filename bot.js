const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('Nshr Start')
    console.log('---------------')
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`

__@everyone  | @here __
**
سيرفرنا الجديد.. 

الكذبُ راقَكَ أنه متجملٌ..والصدقُ ساءكَ أنه عريانُ.
الصدقُ أفضلُ ما حضرتَ به..ولربما ضرَّ الفتى كذبُهْ.**

https://discord.gg/hwafSZX

`) 
}).catch(console.error)
})

iR25RR.login(process.env.BOT_TOKEN);
