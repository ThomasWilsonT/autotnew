const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('I am online.')
})

client.on("messageCreate", (message) => {
    if (message.content == "Guilded"){
        message.reply("https://www.guilded.gg/i/EmzMZAM2")
    }
})
client.login(process.env.TOKEN)