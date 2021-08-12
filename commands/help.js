const { MessageEmbed } = require("discord.js");

module.exports = {
      name: 'help',
      description: 'This command is for help',
      async execute(message, args, Discord, client, Embed) {

            // const delete_emoji_function = message.delete();
            const delete_emoji = '👍';
            const newEmbed = new Discord.MessageEmbed()

            .setColor('#3399CC')
            .setTitle('**__Help for Chandler Bot.__**')
            .addFields(

                  {name:'c!joke ', value: 'This command is used for telling jokes.'},
                  {name:'c!shutdown', value: 'This command is used for shutting down the bot incase of a technical glitch and can only be switched back on CLxppY.'},
                  {name:'c!kick', value: 'This command is used for kicking a user out of a server.This command must be followed by a username and tag for example: c!kick user#0000.'},
                  {name:'c!ban', value: 'This command is used for banning a user from a server and follows the same rules as c!kick.'},
                  {name:'c!sleep', value: 'This command is used for putting Chandler to sleep incase of a technical glitch and can be switched back on by any one with ADMINISTRATOR perms.'},
                  {name:'c!wakeup', value: 'This command is used to wakeup Chandler from sleep.'},
                  {name:'Also try', value: 'wassup chandler.'}
            )
            .setFooter('Creator: Arjun, ClxppY#9968');

            await message.channel.send('⠀', newEmbed);
            message.delete({timeout: 15000 });
      }
      
}