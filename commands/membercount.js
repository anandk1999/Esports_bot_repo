const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "membercount",
    description: "this counts the number of members in the server",
    execute(message, args){
        let countEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setThumbnail('https://andbox.com/wp-content/uploads/2020/03/rutgers.png')
        .setTitle('Server Member Count')
        .setDescription(`**Members**: ${message.guild.members.cache.filter(member => !member.user.bot).size} \n\n **Bots**: ${message.guild.members.cache.filter(member => member.user.bot).size}`)
        
        message.channel.send({ embeds: [countEmbed]})
    }
}