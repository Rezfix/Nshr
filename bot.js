const Discord = require('discord.js');
const iR25RR = new Discord.Client();

    console.log('---------------');
    console.log('we need 1000 Member')
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
const clinet = new Discord.Client();

client.on("guildMemberAdd", member => {
const mohamed= member.guild.channels.get("513290835341738004");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To Rulom. Server :dove:`), 4000)        
}
});

clinet.login(process.env.BOT_TOKE);
