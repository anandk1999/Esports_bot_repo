const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = 'r!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('TestBotAnand is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'tempmute'){
        client.commands.get('tempmute').execute(message, args);
    }
});


client.login('OTE4NzEwOTE0MzUyNTQ5OTM5.YbLONg.OQ01M3KzY5agjmkU1Z-Jx2Ow5Uo');