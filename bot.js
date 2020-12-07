const Discord = require('discord.js')

const { prefix } = require('./config.js')

const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Bot Lancer. l Create By Loki')
    bot.user.setActivity("Ecrivez !help pour de l'aide.")
});

bot.login(process.env.TOKEN);