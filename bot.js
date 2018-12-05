const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'węłčømé-🎀');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':loudspeaker: | نورت السيرفر ي عمــــري' , `**Welcome Ｗ|ＳＥＲＶＥＲ**, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
