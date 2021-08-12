module.exports = {
      name: 'arjunCall',
      description: "if arjuns name is called how to reply",
      execute(message) {
            
            message.channel.send("**Boss " + message.author.username + " is calling you**");

      }
}