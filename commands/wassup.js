module.exports = {
      name: 'wassup',
      description: "Chandler's response to wassup chandler",
      execute(message) {
            
            var random_num_response = Math.ceil(Math.random()*5);

            if(random_num_response == 1 ) {

                  message.channel.send("Nothing much mate wbu?");

            }

            else if(random_num_response == 2) {

                  message.channel.send("Tired of ClxppY giving me orders :( dont tell him i said this, wbu?");

            }

            else if(random_num_response == 3) {

                  message.channel.send("Just went to youtube.com its the best resort ever wbu?");

            }

            else if(random_num_response == 4) {

                  message.channel.send("I had to sell one of my kidneys, the 2400mhz 8gb one :( wbu?");

            }

            else if(random_num_response == 5) {

                  message.channel.send("My memory got reset the doctor says he said ive been diagnosed with a CMOS reset :( wbu?");

            }

      }
}