module.exports = {
      name: 'ban',
      description: "ban ppl from server",
      execute(message, args) {
            
            const member = message.mentions.users.first();
            const memberTarget = message.guild.members.cache.get(member.id);
            
            if(member) {

                  memberTarget.ban();
                  message.channel.send("User has been banned from the server");

            }
            else {
                  message.channel.send("Enter a valid username.");
            }
      }
}