const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "rolecount",
    description: "this counts the number of members in a specific role in the server",
    execute(message, args){
        var arr = Array();
        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r).forEach(element => arr.push(element.name));
        var iterator = arr.values();
        //let guild = message.guild.fetchMembers;
        let text = ``;
        let countEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setThumbnail('https://andbox.com/wp-content/uploads/2020/03/rutgers.png')
        .setTitle('Role Member Count');
        for (let elements of iterator) {
            const temp = message.guild.roles.cache.find(role => role.name == elements);
            text = text + `${elements}: ${temp.members.size} \n\n`
        }
        countEmbed.setDescription(text);
        
        message.channel.send({ embeds: [countEmbed]})
        //.addField("Role List" , rolemap)
        //message.channel.send({ embeds: [embed]});
    }
}