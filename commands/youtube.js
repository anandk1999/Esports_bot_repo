module.exports = {
    name: "youtube",
    description: "sends youtube link!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/codelyon')
    }
}