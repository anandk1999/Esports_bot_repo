module.exports = {
    name: "kick",
    description: "this command kicks a member!, only if the user has permissions to kick",
    execute(message, args){
        const tar_member = message.mentions.users.first(); 
        if(tar_member && message.member.permissions.has("KICK_MEMBERS")){
            const memberTarger = message.guild.members.cache.get(tar_member.id);
            memberTarger.kick();
            message.channel.send('User has been kicked');
        }else if(!tar_member){
            message.channel.send('This user does not exist');
        }else{
            message.channel.send('You do not have the permissions to kick that member');
        }
    }
}