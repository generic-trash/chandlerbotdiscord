module.exports = {
      name: 'embed',
      description: 'This command is used for embeds',
      execute(message, args, Discord) {

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#3399CC')
            .setTitle('Rules')
            .setDescription('This is a embed for the server rules')
            .addFields(

                  {name:'Rule 1: ', value: 'Don\'t be toxic '},
                  {name:'Rule 2: ', value: 'Don\'t be idiotic '},
                  {name:'Rule 3: ', value: 'Don\'t be bad person '}

            )
            .setFooter('Make sure to check out the rules channel');

            message.channel.send(newEmbed);
      }
      
}