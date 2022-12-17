const { Client, Intents, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, PermissionOverwrites, MessageSelectMenu, Interaction, Guild, Collector, Permissions, Collection,  } = require('discord.js')
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] })
bot.on("ready", ()=> {
    console.log("Bin online FUN BOT!!")
})
bot.login("YOUR_BOT_TOKEN")