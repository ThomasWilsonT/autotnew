const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateimage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "943112731903541309"

client.on("guildMemberAdd", async (member) => {
     const img = await generateImage(member)
     member.guild.channels.cache.get(welcomeChannelId).send({
         content: `<@${member.id}> Welcome to the server!`,
         files: [img]
})
    })
client.login(process.env.TOKEN)