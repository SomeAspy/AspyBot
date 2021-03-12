const Discord = require("discord.js");
//const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";

client.on("message", function(message) {
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        const timeTaken = Date.now()-message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    if(command === "uwu"){
        message.channel.send("https://youtu.be/h6DNdop6pD8!")
    }
    if(command == "serverinfo"){
        message.reply("status: existing")
    }
})


client.login(process.env.token);
