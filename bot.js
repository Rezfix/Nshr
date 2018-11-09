const Discord = require('discord.js');
const iR25RR = new Discord.Client();

client.on('ready', () => {
    client.user.setGame('Welcome To Rezfix -help','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log(' Bot Is Online')
    console.log('---------------')
  });
 
iR25RR.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`


  **
  السلام عليكم كيف حالك
  تعريف عن سيرفرنا 
  سيرفر عبارة عن بيع و شراء  ثقه
  
  نبيع اشياء مقابل كريدت
  و نبيع اشياء مقابل سوا باي بال زين موبايلي
  اهم شي مايكون غالي
  
  فتحنا التقديم على رتبة بائع 
  نستقبل البائعين  **
  رابط https://discord.gg/R66G6Bg

`) 
}).catch(console.error)
})
iR25RR.login(process.env.BOT_TOKEN);
