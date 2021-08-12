module.exports = {
      name: 'ban',
      description: "ban ppl from server",
      execute(message, args) {
            
            
            const member = message.mentions.users.first();
            if(member) {

                  const memberTarget = message.guild.members.cache.get(member.id);
                  memberTarget.ban();
                  message.channel.send("User has been banned from the server");

            }
            else {
                  message.channel.send("Enter a valid username.");
            }
      }
}