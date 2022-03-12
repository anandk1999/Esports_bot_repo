const ms = require('ms');
module.exports = {
    name: "tempmute",
    description: "this mutes a member temporarily where time is specified",
    execute(message, args){
        const target = message.mentions.users.first();
        if(!args[1]){
            message.channel.send(`Time is not specified, provide a time that tells us how long the user has to be muted for`);
        }else if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Mod');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        }else{
            message.channel.send(`Can't find member `);
        }
    }
}