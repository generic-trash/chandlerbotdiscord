module.exports = {
      name: 'kick',
      description: "kick ppl from server",
      execute(message, args) {
            
            const member = message.mentions.users.first();
            const memberTarget = message.guild.members.cache.get(member.id);

            if(member) {
                  
                  memberTarget.kick();
                  message.channel.send("User has been kicked from the server.");

            }
            else {
                  message.channel.send("Enter a valid  username.");
            }
      }
}