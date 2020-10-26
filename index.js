//Credit to GetRekt, all code written by GetRekt. Dont use code for bad things. this code for personal discord bot for free! to my website: soon...
//GetRekt#0001 for Help
const discord = require("discord.js")
const client = new discord.Client();
const bot = new discord.Client({ disableEveryone: true });
const db = require("quick.db");
const prefix = " ";//your prefix here
const MessageEmbed = require("discord.js");
const moment = require("moment");

client.on("ready", message => {
  console.log("I am ready");
  client.user.setActivity("CREDIT TO GETREKT#0001",//WRITE CUSTOME STATUS HERE
                         
  {
    type: "WATCHING"//PLAYING,WATCHING,LISTENING
  });
}); 

client.on("message", msg => {
  const args = msg.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "say") {
      msg.delete()
      if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.author.send("YOU DONT HAVE PREMISSION TO THIS COMMNAND!")
    msg.channel.send( args.join(" "));
  }
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find(
    ch => ch.id === " "//WRITE YOUR LEAVE CHANNEL ID

        );
  if (!channel) return;
  let embed = new discord.RichEmbed()
      .setTitle("user leave!")
      .setColor("RED")
      .setThumbnail(member.user.avatarURL)
      .setDescription(` 
${member},
leave the **${member.guild.name}**, \n we are now on: **${member.guild.memberCount} members!**`)
  channel.send(embed);
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "WELCOME CHANNEL ID HERE" //WRITE YOUR WELCOME CHANNEL ID
        
  );
  if (!channel) return;
  let embed = new discord.RichEmbed()
      .setTitle("user join!")
      .setColor("Green")
      .setThumbnail(member.user.avatarURL)
      .setDescription(` 
${member},
join to **${member.guild.name}**, \n we are now on: **${member.guild.memberCount} members!**`)
  channel.send(embed);
});




client.on("message", message => {
  if (message.content.startsWith(`${prefix}avatar`)) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new discord.RichEmbed()
      .setColor("#ff2052")
      .setAuthor(user.username)
      .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
  }
});

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://${process.env.DOMAIN}.glitch.me`);
}, 280000);

client.on("message", message => {
  if (message.content === `${prefix}h`) {
    let role = message.channel.guild.roles.find("name", "HERE");//STAFF ROLE NAME
    let vChannel = message.member.voiceChannel;
    if (message.member.voiceChannel)
      return message.reply(
        `Need your help! ${role} 
User in::bell: ` + vChannel + " Voice"
      );

    if (!message.member.voiceChannel)
      return message.reply(`Need your help! ${role}
:name_badge: User is not in any room!:name_badge:`);
  }
});
client.on("message", message => {
  if (message.content === `${prefix}helpme`) {
    let role = message.channel.guild.roles.find("name", "HERE");//STAFF ROLE NAME
    let vChannel = message.member.voiceChannel;
    if (message.member.voiceChannel)
      return message.reply(
        `Need your help! ${role} 
User in::bell: ` + vChannel + " Voice"
      );

    if (!message.member.voiceChannel)
      return message.reply(`Need your help! ${role}
:name_badge: User is not in any room!:name_badge:`);
  }
});

client.login("");//YOUR BOT TOKEN HERE
