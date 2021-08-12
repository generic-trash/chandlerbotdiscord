module.exports = {
      name: 'kick',
      description: "kick ppl from server",
      execute(message, args) {
            
            
            const member = message.mentions.users.first();
            if(member) {

                  const memberTarget = message.guild.members.cache.get(member.id);
                  memberTarget.kick();
                  message.channel.send("User has been kicked from the server.");

            }
            else {
                  message.channel.send("Enter a valid  username.");
            }
      }
}