//author: ClxppY
//date started: Aug10, 2021
//date ended: 

const Discord = require('discord.js');
// const config = require('./config.json');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const Embed = new Discord.MessageEmbed()


const prefix = 'c';

const fs = require('fs');
const { exit, send } = require('process');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      
      client.commands.set(command.name, command);
}

client.once('ready', () => {
      console.log("Chandler's online");
      client.user.setActivity('ClxppY', { type: 'LISTENING' });
})
//const for skps server common-chat

var sleep_var = 1;
// if its 1 it means its alive if its 0 it means its sleeping.

client.on('message', message => {

      const member = message.mentions.users.first();

      if(message.content.includes('⠀')) {

            message.delete({ timeout: 15000 });

      }

      if(message.content.includes('737178255735390308')) {

            client.users.cache.get('737178255735390308').send(message.author.username + " is calling you heres the link to the message - " + message.url);
            console.log("Trin was called by " + message.author.tag + " and dm was sent");
            

      }

      if(message.content.includes("tony") && message.author.username != 'tony.' && message.author.username != 'Chandler'  || message.content.includes("Tony") && message.author.username != 'tony.' && message.author.username != 'Chandler' || message.content.includes('484307490838806528')  ) {

           message.channel.send("Tony you are being called by " + message.author.username);
            console.log("Tony was called by " + message.author.tag);

      }

      if(message.content.includes('467306644825702420'))  {

            client.users.cache.get('467306644825702420').send(message.author.username + "is calling you on one of the servers you are in");
            console.log("Atharva was called by " + message.author.tag + "and dm was sent");

      }
      if(message.content.includes("arjun") && message.author.username != 'ClxppY' && message.author.username != 'Chandler'  || message.content.includes("Arjun") && message.author.username != 'ClxppY' && message.author.username != 'Chandler' || message.content.includes('467636610159345665')  )  {

            client.commands.get('arjunCall').execute(message);
            console.log("Arjun u have been pinged in a server by " + message.author.username);

      }

      if(message.content.includes("wassup chandler") || message.content.includes("Wassup Chandler") || message.content.includes("Wassup Chand") || message.content.includes("wassup Chand") || message.content.includes("Wassup chandler") || message.content.includes("Wassup chand")) {

            client.commands.get('wassup').execute(message);
            console.log("wassup chandler was called by" + message.author.tag);

      }

      if(!message.content.startsWith(prefix) || message.author.bot)
      return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

if(sleep_var == 1) {

      if(command === '!help') {
            client.commands.get('help').execute(message, args, Discord, client, Embed);
            console.log("help command was called by " + message.author.tag);
      }

      else if(command == '!test') {

            message.channel.send("info: " + member);

      }

      else if(command === "!kick") {

            if(message.member.permissions.has('KICK_MEMBERS') || message.guild.ownerID == message.author.id) {

                  if(message.guild.ownerID == message.author.id && message.mentions.members.first() != message.guild.ownerID) {

                        client.commands.get('kick').execute(message, args);
                        console.log("kick command was called by " + message.author.tag + " the owner of the server and succeeded");  

                  }

                  else if(message.content.includes(message.author.id)) {

                        message.channel.send("You cannot kick yourself");
                        console.log(message.author.tag + " tried to kick themselves and failed");

                  }

                  else if(message.mentions.members.first().permissions.has('KICK_MEMBERS') &&  message.guild.ownerID != message.author.id || message.mentions.members.first().permissions.has('ADMINISTRATOR') &&  message.guild.ownerID != message.author.id) {

                        message.channel.send("I'm sorry but i cannot kick another person with kick permissions.");
                        console.log("kick command was called by " + message.author.tag + " and failed");

                  }

                  else {

                        client.commands.get('kick').execute(message, args);
                        console.log("kick command was called by " + message.author.tag + " and succeeded"); 

                  }
            }
            else {
                  message.channel.send("You do not have the permission to use this command");
                  console.log("kick command was called by " + message.author.tag + " and failed");
            }
      }

      else if(command === "!ban") {

            if(message.member.permissions.has('BAN_MEMBERS') || message.guild.ownerID == message.author.id) {

                  if(message.guild.ownerID == message.author.id && message.mentions.members.first() != message.guild.ownerID) {

                        client.commands.get('ban').execute(message, args);
                        console.log("ban command was called by " + message.author.tag + " the owner of the server and succeeded");  

                  }

                  else if(message.content.includes(message.author.id)) {

                        message.channel.send("You cannot ban yourself");
                        console.log(message.author.tag + " tried to ban themselves and failed");

                  }

                  else if(message.mentions.members.first().permissions.has('BAN_MEMBERS') &&  message.guild.ownerID != message.author.id || message.mentions.members.first().permissions.has('ADMINISTRATOR') &&  message.guild.ownerID != message.author.id) {

                        message.channel.send("I'm sorry but i cannot ban another person with ban permissions.");
                        console.log("ban command was called by " + message.author.tag + " and failed");

                  }

                  else {

                        client.commands.get('ban').execute(message, args);
                        console.log("ban command was called by " + message.author.tag + " and succeeded"); 

                  }
            }
            else {
                  message.channel.send("You do not have the permission to use this command");
                  console.log("ban command was called by " + message.author.tag + " and failed");
            }
      }

      else if(command === '!joke') {
                  
                  client.commands.get('joke').execute(message, args);
                
      
      }

      else if(command == '!embed') {

            client.commands.get('embed').execute(message, args, Discord);

      }

      else if(command == '!sleep') {

            if(message.author.tag == 'ClxppY#9968') {
            client.commands.get('sleep').execute(message, args, client);
            sleep_var = 0;
            }
            else {
                  message.channel.send("You cannot use this command");
            }

      }

      else {
      return;
            }

      }

else {
      console.log("command tried when bot was sleeping.");
}

      if(command == '!wakeup') {
            if(message.author.tag == 'ClxppY#9968') {
            client.commands.get('wakeup').execute(message, args, client);
            sleep_var = 1;
            }
            else {

                  message.channel.send("You're not ClxppY i don't answer to you.");

            }
      }

})

client.login(process.env.CHANDLER_TOKEN);