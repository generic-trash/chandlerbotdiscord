//author: ClxppY
//date started: Aug10, 2021
//date ended: 

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'c';

const fs = require('fs');
const { exit } = require('process');

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

      if(message.content.includes("trin") && message.author.username != 'xXTgamerXx' && message.author.username != 'Chandler'  || message.content.includes("Trin") && message.author.username != 'xXTgamerXx' && message.author.username != 'Chandler' || message.content.includes('737178255735390308')  ) {

            client.users.cache.get('737178255735390308').send(message.author.username + " is calling you heres the link to the message - " + message.url);
            console.log("Trin was called by " + message.author.tag + " and dm was sent");

      }

      if(message.content.includes("tony") && message.author.username != 'tony.' && message.author.username != 'Chandler'  || message.content.includes("Tony") && message.author.username != 'tony.' && message.author.username != 'Chandler' || message.content.includes('484307490838806528')  ) {

           message.channel.send("Tony you are being called by " + message.author.username);
            console.log("Tony was called by " + message.author.tag);

      }

      if(message.content.includes("akash") && message.author.username != 'Syntax Error' && message.author.username != 'Chandler'  || message.content.includes("Akash") && message.author.username != 'Syntax Error' && message.author.username != 'Chandler' || message.content.includes('732453060395139082')  ) {

            client.users.cache.get('732453060395139082').send(message.author.username + " is calling you heres the link to the message - " + message.url);

      }

      if(message.content.includes("atharva") && message.author.username != 'Gamingforyou' && message.author.username != 'Chandler'  || message.content.includes("Atharva") && message.author.username != 'Gamingforyou' && message.author.username != 'Chandler' || message.content.includes('467306644825702420')  )  {

            client.users.cache.get('467306644825702420').send(message.author.username + "is calling you on one of the servers you are in");
            console.log("Atharva was called by " + message.author.tag + "and dm was sent");

      }
      if(message.content.includes("arjun") && message.author.username != 'ClxppY' && message.author.username != 'Chandler'  || message.content.includes("Arjun") && message.author.username != 'ClxppY' && message.author.username != 'Chandler' || message.content.includes('467636610159345665')  )  {

            client.commands.get('arjunCall').execute(message);
            console.log("Arjun u have been pinged in a server by " + message.author.username);

      }

      if(message.content.includes("wassup chandler") || message.content.includes("Wassup Chandler") || message.content.includes("Wassup Chand") || message.content.includes("wassup Chand") || message.content.includes("Wassup chandler") || message.content.includes("Wassup chand")) {

            client.commands.get('wassup').execute(message);

      }

      if(!message.content.startsWith(prefix) || message.author.bot)
      return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

if(sleep_var == 1) {

      if(command === '!help') {
            client.commands.get('help').execute(message, args, Discord);
      }

      else if(command === "!kick") {

            if(message.member.permissions.has('KICK_MEMBERS')) {

            client.commands.get('kick').execute(message, args);
            }
            else {
                  message.channel.send("You do not have the permission to use this command");
            }
      }

      else if(command === "!ban") {

            if(message.member.permissions.has('BAN_MEMBERS')) {

            client.commands.get('ban').execute(message, args);
            }
            else {
                  message.channel.send("You do not have the permission to use this command");
            }
      }

      else if(command === '!shutdown') {
            if(message.author.tag == 'ClxppY#9968' || message.author.username == 'Syntax Error' || message.author.username == 'Arch | Poteto | Trin' || message.author.username == 'AryanOwnsYou') {
                  exit();
            }
            else {
            message.channel.send("Ur not ClxppY! I dont answer to you!");
            console.log("Shutdown request failed called by " + message.author.tag);
            }
      }

      else if(command === '!joke') {

            if(message.channel.id == '801308164522901554') {

                  message.channel.send("This command is not allowed here " + message.author.username);
                 
            }

            else{
                  
                  client.commands.get('joke').execute(message, args);
                
      }
      }

      else if(command == '!embed') {

            client.commands.get('embed').execute(message, args, Discord);

      }

      else if(command == '!sleep') {

            if(message.member.permissions.has('VIEW_AUDIT_LOG') || message.author.tag == 'ClxppY#9968') {
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

            client.commands.get('wakeup').execute(message, args, client);
            sleep_var = 1;
      }

})

client.login('ODc0NjQxMzMzMjQ2MTExODA3.YRJ7Nw.8kRIOLHYu7DvUcK94F2ywjU3CGY');