const discord = require("discord.js")
const client = new discord.Client()

client.on("ready", () => {
  console.log("i am ready, my master")
});


client.on("message", message => {
  if(message.content === "!ping") {
    return message.channel.send("pong " + client.ws.ping)
  }
})

client.login("ODgwMDQzNjE2NzEyNjYzMDYx.YSYifA.GGOe_CN3FkqBvrIZKf73i-0S4Ss")
