module.exports = {
      name: 'wakeup',
      description: 'Make Chandler wakeup',
      execute(message, args, client) {


            let text = "I'm back online :) can me whenever you like";
            let skps_channel_id = "801308164522901554";
            let bot_clan_channel_id = "796042742735962153";
            let hangout_channel_id = "814780059772256289";
            //let skps_server_id = "773226153296658485";
            //let hangout_server_id = "814780059772256286";
            //let bot_clan_server_id = "669560513151369236";

            channel = client.channels.cache.get(skps_channel_id);
            channel02 = client.channels.cache.get(bot_clan_channel_id);
            channel03 = client.channels.cache.get(hangout_channel_id);

            if(message.guild.id == '773226153296658485') {

                  channel.send(text);
                  console.log("chandler woken up in skps server⠀");

            }

            else if(message.guild.id = '796042742735962153') {

                  channel02.send(text);
                  console.log("chandler woken up in bot clan server⠀");

            }

            else if(message.guild.id = '814780059772256286') {

                  channel03.send(text);
                  console.log("chandler woken up in hangout server⠀");

            }

            else {

                  console.log("chandler woken up in unknown server⠀");

            }

}
}