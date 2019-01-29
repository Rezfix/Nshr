const Discord = require('discord.js');
const client = new Discord.Client();

    console.log('---------------');
    console.log('we need 1000 Member')
    console.log('---------------')
 
client.on("guildMemberAdd", member => {
    if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
  channel: "welcome"
}
const channel = sWlc[member.guild.id].channel
  const sChannel = sWlc[member.guild.id].channel
  let welcomer = member.guild.channels.find('name', sChannel);
  let memberavatar = member.user.avatarURL
    if (!welcomer) return;
    if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
  const ei = invites[member.guild.id];
  const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
  const inviter = client.users.get(invite.inviter.id);
  const yumz = member.guild.channels.find("name", `${sChannel}`);
   yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
 //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
}); 
    var Canvas = require('canvas')
    var jimp = require('jimp')
    
    const w = ['./w1.png'];
    
            let Image = Canvas.Image,
                canvas = new Canvas(400, 200),
                ctx = canvas.getContext('2d');

            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err)
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 400, 200);
    
    })
    
                    let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                    jimp.read(url, (err, ava) => {
                        if (err) return console.log(err);
                        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                            if (err) return console.log(err);
    
                                  ctx.font = "bold 12px Arial";
                            ctx.fontSize = '20px';
                            ctx.fillStyle = "#f1f1f1";
                              ctx.fillText(member.user.username, 200, 150);
                            
                            //NAMEً
                            ctx.font = "bold 12px Arial";
                            ctx.fontSize = '20px';
                            ctx.fillStyle = "#f1f1f1";
    ctx.fillText(`Welcome To Server`, 260, 125);
    
                            //AVATARً
                            let Avatar = Canvas.Image;
                            let ava = new Avatar;
                            ava.src = buf;
                            ctx.beginPath();
                            ctx.arc(77, 101, 62, 0, Math.PI*2);
                            ctx.stroke();
                               ctx.clip();
                               ctx.drawImage(ava, 13, 38, 128, 126); 

                          
  welcomer.sendFile(canvas.toBuffer())
    
    
                        
    })
    })
    
    }
    });

    client.on('ready', () => {
        console.log("i'm Ready");
        client.user.setActivity('NextaBot', { type: 'playing' });
    });

client.login(process.env.BOT_TOKEN);
